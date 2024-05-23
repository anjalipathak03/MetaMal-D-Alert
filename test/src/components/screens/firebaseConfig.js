import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics'; // Import the getAnalytics method

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVi15K5r_TwxPsYSMiqMzybdkoXZDCptI",
    authDomain: "metamal-d-alert-cb10a.firebaseapp.com",
    projectId: "metamal-d-alert-cb10a",
    storageBucket: "metamal-d-alert-cb10a.appspot.com",
    messagingSenderId: "788760488439",
    appId: "1:788760488439:web:baa8c722b8af6818d326f2",
    measurementId: "G-TCCPFWM3L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };