// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT4kO61dBc9t8EmyoMhopDjJTLPb4kfLE",
  authDomain: "edu-soul.firebaseapp.com",
  projectId: "edu-soul",
  storageBucket: "edu-soul.firebasestorage.app",
  messagingSenderId: "98538560581",
  appId: "1:98538560581:web:0bf3d6e7f951f8c77c572c",
  measurementId: "G-KBZ576QVBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export { analytics };
