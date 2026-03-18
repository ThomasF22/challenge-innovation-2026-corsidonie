# Corsidonie - Site Concept

Site concept pour le projet innovation **Corsidonie** : restauration des herbiers de posidonie en Méditerranée.

## 🌊 Vue d'ensemble

Corsidonie est une plateforme web moderne permettant aux entreprises de :
- Découvrir le projet et son impact environnemental
- Acheter des crédits carbone générés par la plantation de posidonie
- Suivre leurs plantations et leur impact en temps réel
- Visualiser la cartographie des herbiers restaurés

## 🚀 Démarrage rapide

### Installation

```bash
cd corsidonie-app
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible à `http://localhost:5173/`

### Build pour la production

```bash
npm run build
```

## 📁 Structure du projet

```
corsidonie-app/
├── src/
│   ├── App.vue                 # Composant racine (gestion navigation)
│   ├── main.js                 # Entry point
│   ├── pages/
│   │   ├── LandingPage.vue     # Page d'accueil
│   │   ├── LoginPage.vue       # Page de connexion
│   │   └── DashboardPage.vue   # Tableau de bord (client)
│   └── components/             # Composants réutilisables
├── index.html                  # HTML principal
├── vite.config.js              # Configuration Vite
└── package.json                # Dépendances
```

## 🎨 Design

**Palette de couleurs :**
- 🔵 Bleu primaire : `#0066CC`
- 🟦 Bleu clair : `#00A8E8`
- 🔳 Bleu foncé : `#004BA8`
- ⚪ Blanc : `#FFFFFF`

**Thème :** Moderne et marin, inspiré par l'océan Méditerranéen.

## 📱 Pages

### 1. **Landing Page** (Accueil)
- Hero section avec CTA
- Présentation du problème (4 cartes)
- Solution proposée
- Services (3 offres)
- Footer with contact

### 2. **Login Page** (Connexion)
- Authentification locale (localStorage)
- Démo : tout email/password fonctionne

### 3. **Dashboard** (Tableau de bord)

#### Onglet "Mes posidonies"
- **Statistiques :** Nombre de posidonies, CO₂ capturé, O₂ produit, crédits
- **Graphiques :** Évolution du CO₂ sur 6 mois
- **Biodiversité :** Espèces abritées et leur nombre
- **Température :** Conditions de l'eau en temps réel

#### Onglet "Cartographie"
- **Carte Leaflet** de la Corse
- **Marqueurs :**
  - 🔵 Bleu : Posidonies Corsidonie
  - 🔷 Bleu clair : Herbiers existants
- **Filtre :** Afficher/masquer tous les herbiers
- **Légende interactive**

## 🔧 Technologies utilisées

| Tech | Rôle |
|------|------|
| **Vue 3** | Framework frontend |
| **Vite** | Build tool & dev server |
| **Leaflet** | Cartographie interactive |
| **CSS custom** | Styling thème marin |
| **localStorage** | Stockage authentification client |

## 💾 Données

Toutes les données sont actuellement **mocksées** :
- **Statistiques :** Chiffres fixes pour démonstration
- **Graphiques :** Données statiques (6 mois)
- **Carte :** Points aléatoires réalistes autour de la Corse
- **Authentification :** localStorage (pas de backend)

## 🔐 Authentification

Mode démo local :
- Entrez **n'importe quel email** et **mot de passe**
- Les données sont stockées en `localStorage`
- Logout efface les données de session

## 🗺️ Cartographie

**Coordonnées Corsica :** lat 41.9, lng 9.0

**Points générés :**
- 15 posidonies Corsidonie (dans 0.5° de la Corse)
- 10 herbiers existants (pour contexte)

Chaque point popup affiche : nom + surface estimée.

## 📊 Données stats (mock)

```javascript
{
  plantedPosidonies: 2450,     // pieds
  co2Captured: 12.3,           // tonnes
  o2Produced: 8.7,             // tonnes
  credits: 245                 // crédits carbone
}
```

## 🎯 Prochaines étapes / Améliorations

- [ ] Backend Node.js/Express pour vraies données
- [ ] Base de données (PostgreSQL) pour stockage
- [ ] Authentification OAuth
- [ ] API données géographiques réelles
- [ ] Dashboard admin pour gestion posidonies
- [ ] Intégration paiement crédits carbone
- [ ] Notifications temps réel
- [ ] Export rapports PDF
- [ ] Mobile responsive
- [ ] Tests unitaires & E2E

## 📝 Notes

- Site **desktop optimisé** (responsive en cours)
- Pas de authentification backend (local storage)
- Données complètement mockées pour démo
- Leaflet utilise CDN public OpenStreetMap

## 📞 Support

Pour questions ou modifications :
- Créez une issue
- Contactez l'équipe Corsidonie

---

**Status :** MVP Concept ✅ | **Dernière mise à jour :** Mars 2026
