<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">Corsidonie</div>
        <button class="login-btn" @click="$emit('login')">Se connecter</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Restaurons les herbiers de posidonie</h1>
        <p>Compensez votre empreinte carbone tout en réparant les écosystèmes marins de la Méditerranée</p>
        <button class="cta-btn" @click="$emit('login')">Commencer</button>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="problem">
      <h2>Le problème</h2>
      <div class="problem-grid">
        <div class="problem-card">
          <h3>🌊 Écosystème en danger</h3>
          <p>La posidonie, le "poumon de la Méditerranée", est en déclin rapide. Les herbiers diminuent chaque année, menaçant toute la biodiversité marine.</p>
        </div>
        <div class="problem-card">
          <h3>🐟 Impact économique</h3>
          <p>La disparition de la posidonie affecte l'économie halieutique et touristique. Les pollutions côtières augmentent sans ce filtre naturel.</p>
        </div>
        <div class="problem-card">
          <h3>⚠️ Santé publique</h3>
          <p>Une eau polluée impacte les poissons, les récoltes, et à terme notre santé. La posidonie est notre meilleur allié naturel.</p>
        </div>
        <div class="problem-card">
          <h3>📉 Érosion côtière</h3>
          <p>Sans la posidonie, les plages s'érodent. Nos côtes perdent du terrain face aux tempêtes et au changement climatique.</p>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="solution">
      <div class="solution-content">
        <div class="solution-text">
          <h2>Notre solution</h2>
          <p>Corsidonie propose un service clé en main de restauration des écosystèmes marins basé sur la replantation de posidonie.</p>
          <ul>
            <li><strong>Capsules biodégradables</strong> : Nos capsules en PHA facilitent la plantation et la croissance des herbiers</li>
            <li><strong>Suivi géographique</strong> : Cartographie en temps réel de vos plantes et de l'impact environnemental</li>
            <li><strong>Crédits carbone certifiables</strong> : Transformez votre action en crédits carbone vérifiables</li>
          </ul>
        </div>
        <div class="solution-image">
          <div class="image-placeholder">
            🌿 Posidonie en restauration
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <h2>Nos services</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">💳</div>
          <h3>Crédits carbone</h3>
          <p>Achetez des crédits carbone générés par la plantation de posidonie. Chaque crédit représente 1 tonne de CO₂ capturé.</p>
          <button class="service-btn">En savoir plus</button>
        </div>
        <div class="service-card">
          <div class="service-icon">🌱</div>
          <h3>Prestation de restauration</h3>
          <p>Confiez-nous votre projet de restauration marine. Nous plantons, suivons et certifions l'impact environnemental.</p>
          <button class="service-btn">En savoir plus</button>
        </div>
        <div class="service-card">
          <div class="service-icon">📊</div>
          <h3>Suivi et impact</h3>
          <p>Visualisez votre impact en temps réel. Accédez à des données détaillées : CO₂ capturé, O₂ produit, biodiversité abritée.</p>
          <button class="service-btn">En savoir plus</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Corsidonie</h4>
          <p>Restaurrer les herbiers de posidonie pour un avenir durable en Méditerranée.</p>
        </div>
        <div class="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#problem">Le problème</a></li>
            <li><a href="#solution">Notre solution</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>info@corsidonie.fr</p>
          <p>+33 4 95 XX XX XX</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Corsidonie. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
.landing-page {
  background-color: var(--white);
}

/* Navbar */
.navbar {
  background-color: var(--white);
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-blue);
}

.login-btn {
  padding: 0.5rem 1.5rem;
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: var(--dark-blue);
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-btn {
  padding: 1rem 2.5rem;
  background-color: var(--white);
  color: var(--primary-blue);
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Problem Section */
.problem {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.problem h2,
.solution h2,
.services h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 3rem;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.problem-card {
  background-color: #f0f4f8;
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid var(--light-blue);
}

.problem-card h3 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

.problem-card p {
  color: #555;
  line-height: 1.6;
}

/* Solution Section */
.solution {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.solution-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.solution-text h2 {
  text-align: left;
  margin-bottom: 2rem;
}

.solution-text ul {
  list-style: none;
}

.solution-text li {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
}

.solution-text strong {
  color: var(--primary-blue);
}

.image-placeholder {
  background: linear-gradient(135deg, var(--light-blue) 0%, #00d4ff 100%);
  height: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem;
}

/* Services Section */
.services {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: var(--white);
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 2.5rem;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.3s;
}

.service-card:hover {
  box-shadow: 0 10px 30px rgba(0, 102, 204, 0.15);
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: var(--primary-blue);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-btn {
  padding: 0.7rem 1.5rem;
  background-color: var(--light-blue);
  color: var(--white);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.service-btn:hover {
  background-color: var(--primary-blue);
}

/* Footer */
.footer {
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 3rem 2rem 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: var(--white);
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  color: #e0e0e0;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
