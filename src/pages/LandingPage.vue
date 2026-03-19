<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <img src="/logo_corsidonie.png" alt="Logo Corsidonie" />
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <video class="hero-video" autoplay muted loop playsinline>
        <source src="/posidonie.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>
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
          <div class="images-showcase">
            <div class="showcase-item">
              <img src="/capsule.png" alt="Capsule biodégradable" />
            </div>
            <div class="showcase-item">
              <img src="/plongeur.jpg" alt="Plongeur en restauration de posidonie" />
            </div>
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
          <div class="service-subtitle">Préserver</div>
          <p>Achetez des crédits carbone générés par la plantation de posidonie. Chaque crédit représente 1 tonne de CO₂ capturé.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🌱</div>
          <h3>Prestation de restauration</h3>
          <div class="service-subtitle">Restaurer</div>
          <p>Confiez-nous votre projet de restauration marine. Nous plantons, suivons et certifions l'impact environnemental.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">📊</div>
          <h3>Suivi et impact</h3>
          <div class="service-subtitle">Connecter</div>
          <p>Visualisez votre impact en temps réel. Accédez à des données détaillées : CO₂ capturé, O₂ produit, biodiversité abritée.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Corsidonie</h4>
          <p>Restaurer les herbiers de posidonie pour un avenir durable en Méditerranée.</p>
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
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
}

.logo img {
  height: 100%;
  width: auto;
  max-width: 250px;
  object-fit: contain;
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
  position: relative;
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
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
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

.solution-text h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.solution-text {
  text-align: center;
}

.solution-text ul {
  list-style: none;
  display: inline-block;
  text-align: left;
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

.images-showcase {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.showcase-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.showcase-item img:hover {
  transform: scale(1.05);
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

.service-subtitle {
  color: #3EAB2E;
  font-size: 0.95rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
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
