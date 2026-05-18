# Lifehunt

A job portal and referral platform built with React. Lifehunt connects job seekers with opportunities and makes getting referrals as easy as clicking a button — no more awkward LinkedIn messages or cold outreach.

## Features

- **Job Portal** — Browse and apply for job listings, including FTE offers of 20LPA+
- **Referrals** — Get referrals with a single click, no LinkedIn messaging hassle
- **Talent Search** — Companies can find top talent through the platform
- **User Dashboard** — Track applications and referral activity
- **Profile Management** — Manage your professional profile
- **Authentication** — Sign up, login, and password reset via Firebase Auth

## Tech Stack

- **Frontend:** React 18, React Router v6
- **Styling:** Tailwind CSS, Material UI, Bootstrap, MDB React
- **Backend/Auth:** Firebase (Authentication, Firestore)
- **Other:** React Player, React Icons, React Spinners

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
git clone https://github.com/sreeram2001/Lifehunt.git
cd Lifehunt
npm install
```

### Firebase Setup

Create a `src/firebase.config.js` file with your Firebase project credentials:

```javascript
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
export const auth = getAuth();
```

### Run Locally

```bash
npm start
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

## Deployment

The project is configured for Firebase Hosting. Deploy with:

```bash
firebase deploy
```

## Project Structure

```
src/
├── Assets/          # Images and media
├── Components/      # Reusable UI components (Navbar, Footer, Dashboard, etc.)
├── App.js           # Main app with routing
├── Jobs.js          # Job listings page
├── Login.js         # Login page
├── Signup.js        # Signup page
├── Profile.js       # User profile
├── ReferralTable.js # Referral tracking
└── Protected.js     # Auth-protected route wrapper
```

## License

This project is private.
