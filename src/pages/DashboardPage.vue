<template>
  <div class="dashboard-page">
    <!-- Header -->
    <div class="dashboard-header">
      <div class="header-content">
        <h1>Tableau de bord Corsidonie</h1>
        <div class="user-info" v-if="currentUser">
          <span>👤 {{ currentUser.name || currentUser.email || 'Utilisateur' }}</span>
          <button @click="$emit('logout')" class="logout-btn">Déconnexion</button>
        </div>
      </div>
    </div>

    <!-- Menu Tabs -->
    <div class="menu-tabs">
      <button
        :class="['tab', { active: activeTab === 'posidonies' }]"
        @click="activeTab = 'posidonies'"
      >
        🌱 Mes posidonies
      </button>
      <button
        :class="['tab', { active: activeTab === 'cartographie' }]"
        @click="activeTab = 'cartographie'"
      >
        🗺️ Cartographie
      </button>
    </div>

    <!-- Content -->
    <div class="dashboard-content">
      <!-- Mes Posidonies Tab -->
      <div v-show="activeTab === 'posidonies'" class="tab-content">
        <div class="stats-grid">
          <div class="stat-card">
            <h3>Posidonies plantées</h3>
            <div class="stat-number">{{ stats.plantedPosidonies }}</div>
            <p>pieds</p>
          </div>
          <div class="stat-card">
            <h3>CO₂ capturé</h3>
            <div class="stat-number">{{ stats.co2Captured }}</div>
            <p>tonnes</p>
          </div>
          <div class="stat-card">
            <h3>O₂ produit</h3>
            <div class="stat-number">{{ stats.o2Produced }}</div>
            <p>tonnes</p>
          </div>
        </div>

        <!-- Charts -->
        <div class="charts-grid">
          <div class="chart-container">
            <h3>Évolution du CO₂ capturé</h3>
            <div class="chart">
              <div class="chart-bar" v-for="(month, idx) in chartData.months" :key="idx">
                <div
                  class="bar"
                  :style="{ height: (chartData.co2[idx] / 100) * 200 + 'px' }"
                ></div>
                <span>{{ month }}</span>
              </div>
            </div>
          </div>

          <div class="chart-container">
            <h3>Biodiversité abritée</h3>
            <div class="biodiversity-list">
              <div v-for="species in biodiversityData" :key="species.name" class="species">
                <span>{{ species.emoji }} {{ species.name }}</span>
                <span class="count">{{ species.count }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cartographie Tab -->
      <div v-show="activeTab === 'cartographie'" class="tab-content">
        <div class="map-container">
          <div id="map" ref="mapElement"></div>
          <div class="map-legend">
            <h3>Légende</h3>
            <div class="legend-item">
              <div class="legend-dot user-posidonie"></div>
              <span>Mes plantations</span>
            </div>
            <div class="legend-item">
              <div class="legend-dot corsidonie"></div>
              <span>Autres Corsidonie</span>
            </div>
            <div class="legend-item">
              <div class="legend-dot other"></div>
              <span>Herbiers existants</span>
            </div>
          </div>
        </div>

        <!-- Filtered Stats -->
        <div class="filtered-stats-section">
          <h3>📊 Données actuelles avec filtres appliqués</h3>
          <div class="filtered-stats-grid">
            <div class="filtered-stat">
              <div class="filtered-stat-value">{{ filteredStats.totalPoints }}</div>
              <div class="filtered-stat-label">Points visibles</div>
            </div>
            <div class="filtered-stat">
              <div class="filtered-stat-value">{{ filteredStats.totalCo2 }} <span>kg</span></div>
              <div class="filtered-stat-label">CO₂ capturé</div>
            </div>
            <div class="filtered-stat">
              <div class="filtered-stat-value">{{ filteredStats.totalSurface }} <span>m²</span></div>
              <div class="filtered-stat-label">Surface totale</div>
            </div>
            <div class="filtered-stat">
              <div class="filtered-stat-value">{{ filteredStats.averageCo2PerPoint }} <span>kg</span></div>
              <div class="filtered-stat-label">CO₂ moyen par point</div>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <h3>Filtres de la carte</h3>
          <div class="filter-group">
            <label>
              <input v-model="showUserPosidonies" type="checkbox" />
              🌱 Mes plantations
            </label>
            <label>
              <input v-model="showOtherCorsidonie" type="checkbox" />
              🔵 Autres plantations Corsidonie
            </label>
            <label>
              <input v-model="showOtherHerbiers" type="checkbox" />
              🔷 Herbiers existants
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick, watch } from 'vue'

export default {
  name: 'DashboardPage',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  emits: ['logout'],
  setup(props) {
    const activeTab = ref('posidonies')
    const mapElement = ref(null)
    const showAllPosidonies = ref(true)
    const showUserPosidonies = ref(true)
    const showOtherCorsidonie = ref(true)
    const showOtherHerbiers = ref(true)
    const currentUser = ref(props.user)
    const userPosidonies = ref([]) // Les 5 posidonies de l'utilisateur
    let mapInstance = null

    // Mock data
    const stats = ref({
      plantedPosidonies: 2450,
      co2Captured: 12.3,
      o2Produced: 8.7
    })

    const chartData = ref({
      months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
      co2: [15, 22, 28, 35, 42, 50]
    })

    const biodiversityData = ref([
      { name: 'Poissons', emoji: '🐠', count: 342 },
      { name: 'Crustacés', emoji: '🦐', count: 156 },
      { name: 'Mollusques', emoji: '🐚', count: 89 },
      { name: 'Coraux', emoji: '🪸', count: 42 }
    ])

    // Données filtrées
    const filteredStats = ref({
      totalPoints: 0,
      totalCo2: 0,
      totalSurface: 0,
      averageCo2PerPoint: 0
    })

    // Load posidonie points from JSON files
    const loadPosidoniaData = async () => {
      try {
        const [corsidonieResponse, otherResponse] = await Promise.all([
          fetch('/points_corsidonie.json'),
          fetch('/points_general.json')
        ])

        let corsidonieData = await corsidonieResponse.json()
        let otherData = await otherResponse.json()

        // Transformer GeoJSON FeatureCollection en array de points
        corsidonieData = transformGeoJSON(corsidonieData)
        otherData = transformGeoJSON(otherData)

        return { corsidonieData, otherData }
      } catch (error) {
        console.error('Erreur chargement points:', error)
        return { corsidonieData: [], otherData: [] }
      }
    }

    // Générer des données aléatoires pour un point
    const generatePointData = (index) => {
      const startDate = new Date('2026-03-18')
      const endDate = new Date('2030-01-01')
      const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
      const date = new Date(randomTime)

      return {
        date: date.toLocaleDateString('fr-FR'),
        surface: Math.floor(Math.random() * 96 + 5), // 5-100 m²
        co2: Math.floor(Math.random() * 198 + 3) // 3-200 kg
      }
    }

    // Transformer GeoJSON FeatureCollection ou array simple
    const transformGeoJSON = (data) => {
      if (!data) return []

      // Si c'est un array simple, ajouter les données mock
      if (Array.isArray(data) && data.length > 0 && !data[0].type) {
        return data.map((point, index) => ({
          ...point,
          ...generatePointData(index)
        }))
      }

      // Si c'est un FeatureCollection
      if (data.type === 'FeatureCollection' && data.features) {
        return data.features.map((feature, index) => {
          const [lng, lat] = feature.geometry.coordinates
          return {
            lat: lat,
            lng: lng,
            name: feature.properties?.name || `Point ${index + 1}`,
            size: feature.properties?.size || 100,
            ...generatePointData(index)
          }
        })
      }

      // Si c'est un array contenant un FeatureCollection
      if (Array.isArray(data) && data[0]?.type === 'FeatureCollection') {
        return transformGeoJSON(data[0])
      }

      return []
    }

    const initMap = async () => {
      if (!mapElement.value) return
      
      // Utiliser l'objet global L de Leaflet (chargé via CDN)
      if (typeof L === 'undefined') {
        console.error('Leaflet non chargé')
        return
      }

      // Détruire la carte précédente si elle existe
      if (mapInstance) {
        mapInstance.remove()
      }

      mapInstance = L.map(mapElement.value).setView([41.9, 9.0], 9)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(mapInstance)

      // Charger les données depuis les fichiers JSON
      const { corsidonieData, otherData } = await loadPosidoniaData()

      // Add Corsidonie markers
      corsidonieData.forEach((point) => {
        // Vérifier si ce point est une posidonie de l'utilisateur
        const isUserPosidonie = userPosidonies.value.some(up => 
          up.lat === point.lat && up.lng === point.lng
        )

        // Vérifier si on doit afficher ce point selon les filtres
        const shouldDisplay = (isUserPosidonie && showUserPosidonies.value) || 
                             (!isUserPosidonie && showOtherCorsidonie.value)
        
        if (!shouldDisplay) return

        const marker = L.circleMarker([point.lat, point.lng], {
          radius: isUserPosidonie ? 12 : 8,
          fillColor: isUserPosidonie ? '#004BA8' : '#0066CC',
          color: '#004BA8',
          weight: isUserPosidonie ? 3 : 2,
          opacity: 1,
          fillOpacity: isUserPosidonie ? 1 : 0.8
        })
        const popupText = isUserPosidonie ? 
          `<strong>🌱 ${point.name}</strong><br><em>Votre plantation</em><br>📅 ${point.date}<br>📐 ${point.surface} m²<br>🌍 ${point.co2} kg CO₂` :
          `<strong>${point.name}</strong><br>📅 ${point.date}<br>📐 ${point.surface} m²<br>🌍 ${point.co2} kg CO₂`
        marker.bindPopup(popupText)
        marker.addTo(mapInstance)
      })

      // Add other posidonies
      if (showOtherHerbiers.value) {
        otherData.forEach((point) => {
          const marker = L.circleMarker([point.lat, point.lng], {
            radius: 6,
            fillColor: '#00A8E8',
            color: '#0066CC',
            weight: 1,
            opacity: 0.6,
            fillOpacity: 0.5
          })
          marker.bindPopup(`<strong>${point.name}</strong><br>📅 ${point.date}<br>📐 ${point.surface} m²<br>🌍 ${point.co2} kg CO₂`)
          marker.addTo(mapInstance)
        })
      }
    }

    // Sélectionner 5 posidonies aléatoires pour l'utilisateur
    const selectRandomUserPosidonies = (allPosidonies) => {
      if (!allPosidonies || allPosidonies.length === 0) return []
      
      const shuffled = [...allPosidonies].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, Math.min(5, shuffled.length))
    }

    // Calculer les stats filtrées selon les filtres actifs
    const calculateFilteredStats = async () => {
      const { corsidonieData, otherData } = await loadPosidoniaData()
      
      let totalPoints = 0
      let totalCo2 = 0
      let totalSurface = 0

      // Compter les points Corsidonie filtrés
      corsidonieData.forEach((point) => {
        const isUserPosidonie = userPosidonies.value.some(up => 
          up.lat === point.lat && up.lng === point.lng
        )

        const shouldCount = (isUserPosidonie && showUserPosidonies.value) || 
                           (!isUserPosidonie && showOtherCorsidonie.value)
        
        if (shouldCount) {
          totalPoints++
          totalCo2 += point.co2 || 0
          totalSurface += point.surface || 0
        }
      })

      // Compter les autres herbiers filtrés
      if (showOtherHerbiers.value) {
        otherData.forEach((point) => {
          totalPoints++
          totalCo2 += point.co2 || 0
          totalSurface += point.surface || 0
        })
      }

      filteredStats.value = {
        totalPoints,
        totalCo2,
        totalSurface,
        averageCo2PerPoint: totalPoints > 0 ? (totalCo2 / totalPoints).toFixed(1) : 0
      }
    }

    onMounted(async () => {
      // Load user data from localStorage if not provided via props
      if (!currentUser.value) {
        const savedUser = localStorage.getItem('corsidonie_user')
        if (savedUser) {
          try {
            currentUser.value = JSON.parse(savedUser)
          } catch (e) {
            console.error('Erreur parsing user:', e)
          }
        }
      }

      // Load user posidonies (5 aléatoires)
      const { corsidonieData } = await loadPosidoniaData()
      userPosidonies.value = selectRandomUserPosidonies(corsidonieData)

      // Calculer les stats filtrées initiales
      await calculateFilteredStats()

      // Initialize map if on cartographie tab
      if (activeTab.value === 'cartographie') {
        nextTick(() => {
          initMap()
        })
      }
    })

    // Watch activeTab changes
    watch(activeTab, (newTab) => {
      if (newTab === 'cartographie') {
        nextTick(() => {
          initMap()
        })
      }
    })

    // Watch filter changes
    watch([showUserPosidonies, showOtherCorsidonie, showOtherHerbiers], async () => {
      // Recalculer les stats filtrées
      await calculateFilteredStats()
      
      // Redessiner la carte si on est sur l'onglet cartographie
      if (activeTab.value === 'cartographie' && mapInstance) {
        initMap()
      }
    })

    return {
      activeTab,
      mapElement,
      showAllPosidonies,
      showUserPosidonies,
      showOtherCorsidonie,
      showOtherHerbiers,
      stats,
      chartData,
      biodiversityData,
      currentUser,
      userPosidonies,
      filteredStats,
      initMap
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  background-color: var(--light-gray);
  min-height: 100vh;
}

.dashboard-header {
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 2rem;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-header h1 {
  font-size: 2rem;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logout-btn {
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.menu-tabs {
  background-color: var(--white);
  border-bottom: 2px solid #e0e0e0;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}

.tab {
  padding: 1rem 2rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.tab.active {
  color: var(--primary-blue);
  border-bottom-color: var(--primary-blue);
  font-weight: bold;
}

.tab:hover {
  color: var(--primary-blue);
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.tab-content {
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid var(--light-blue);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.stat-card h3 {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
}

.stat-card p {
  color: #999;
  font-size: 0.9rem;
}

/* Charts Grid */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.chart-container {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.chart-container h3 {
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
}

.chart {
  display: flex;
  align-items: flex-end;
  height: 200px;
  gap: 0.5rem;
}

.chart-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.bar {
  width: 100%;
  background: linear-gradient(to top, var(--light-blue), var(--primary-blue));
  border-radius: 5px 5px 0 0;
  min-height: 10px;
}

.chart-bar span {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
}

/* Biodiversity */
.biodiversity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.species {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 5px;
}

.species span {
  font-size: 1.1rem;
}

.count {
  background-color: var(--light-blue);
  color: var(--white);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
}

/* Map */
.map-container {
  position: relative;
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

#map {
  height: 500px;
  width: 100%;
}

.map-legend {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.map-legend h3 {
  margin: 0 0 1rem 0;
  color: var(--primary-blue);
  font-size: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.legend-dot.user-posidonie {
  background-color: #004BA8;
}

.legend-dot.corsidonie {
  background-color: #0066CC;
}

.legend-dot.other {
  background-color: #00A8E8;
}

/* Filter */
.filter-section {
  padding: 1.5rem 2rem;
  background-color: var(--white);
  border-radius: 10px;
}

.filter-section h3 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.filter-section label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
}

.filter-section input[type='checkbox'] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

/* Filtered Stats */
.filtered-stats-section {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-top: 4px solid var(--light-blue);
}

.filtered-stats-section h3 {
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.filtered-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.filtered-stat {
  background: linear-gradient(135deg, #f5f9ff 0%, #e8f4ff 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary-blue);
  text-align: center;
}

.filtered-stat-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
}

.filtered-stat-value span {
  font-size: 0.9rem;
  color: #666;
  margin-left: 0.5rem;
  font-weight: normal;
}

.filtered-stat-label {
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
