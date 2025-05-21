# 📱 Mately Project – Application Mobile de Gestion de Tâches

## 👩‍💻 Réalisé par

**Bochra Allagui**  
Étudiante en ingénierie informatique, spécialité génie logiciel – Hochschule Schmalkalden (Allemagne)

---

## 🎯 Objectif

Créer une application mobile qui permet :

- D’afficher dynamiquement une liste de tâches.
- De simuler des tâches créées côté backend (simulateur multi-utilisateurs).
- De mettre à jour automatiquement l’interface toutes les 5 secondes.

---

## 🛠️ Technologies

### Backend

- **Node.js**
- **Express**
- **MongoDB** (avec Mongoose)

### Frontend

- **React Native** (avec **Expo**)
- Composants personnalisés
- API interne (`/services/api.js`)

---

## 📁 Structure du projet

```
MatelyProject-Allagui Bochra/
├── BackEnd/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
├── FrontEnd/
│   ├── components/
│   ├── screens/
│   ├── services/
│   └── App.js
└── README.md
```

---

## 🚀 Lancer le projet

### ⚙️ Backend

1. Aller dans le dossier :

   ```bash
   cd BackEnd
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer le serveur :
   ```bash
   node app.js
   ```

> Le backend démarre sur `http://localhost:5000`

---

### 📱 Frontend (Expo)

1. Aller dans le dossier :

   ```bash
   cd FrontEnd
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Démarrer l’application :
   ```bash
   npx expo start
   ```

> Ouvre ensuite dans un navigateur (web) ou utilise un émulateur mobile.

---

## ✅ Fonctionnalités principales

- `GET /tasks?after=<date>` : récupère les nouvelles tâches après une date (max 20 résultats)
- `POST /tasks/simulate` : simule la création de 10 tâches (espacées de 5s)
- Mise à jour automatique côté front toutes les 5 secondes
- Affichage dynamique avec `FlatList`
- Bouton "Simuler des ajouts" intégré
- Pas de requêtes redondantes (grâce à `lastFetchTime`)
- Séparation claire des composants et appels API

---

## ✨ Bonus réalisés

- 🎨 Couleur par statut :
  - `todo` → gris
  - `in_progress` → bleu clair
  - `done` → vert
- ✨ Animation fluide à l’arrivée des nouvelles tâches
- 🔀 Tri côté backend par `createdAt`
- 🧠 Architecture claire et évolutive

---

## 📌 Contraintes respectées

- Pas de bibliothèque externe imposée
- Utilisation judicieuse de `useEffect`, `useCallback`, `useRef`
- Code clair, structuré et réutilisable

---

## 🧠 Mini note de conception

Ce projet a été conçu dans une logique de séparation claire entre le frontend (React Native) et le backend (Node.js + MongoDB), afin de simuler un environnement multi-utilisateurs en temps réel.

### Architecture

- Le **backend** expose une API REST minimaliste avec deux routes clés :
  - `GET /tasks?after=<date>` : permet une synchronisation incrémentale des tâches.
  - `POST /tasks/simulate` : simule l’ajout de tâches à intervalle régulier.
- Le **frontend** repose sur une FlatList animée, avec récupération incrémentale et différenciation visuelle des statuts.

### Choix techniques

- Utilisation de `useCallback`, `useEffect`, `useRef` pour la performance et la clarté.
- Couleurs et animations pour améliorer l’expérience utilisateur.
- Pas de librairie externe pour la synchro : gestion manuelle pour démontrer la logique.

Ce projet reflète une approche pédagogique orientée bonne pratique (asynchrone, composants réutilisables, backend indexé, etc.).

---

## 📬 Contact

- [LinkedIn](https://www.linkedin.com/in/bochra-allagui-3284a3217/)
- bochraallegui@gmail.com

---

© 2025 – Bochra Allagui
