// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBykgpe7g5veCZ9eossRb9Wu_u28y4IRU",
    authDomain: "asmt10-react-firebase-immigrat.firebaseapp.com",
    projectId: "asmt10-react-firebase-immigrat",
    storageBucket: "asmt10-react-firebase-immigrat.appspot.com",
    messagingSenderId: "355740775694",
    appId: "1:355740775694:web:55eb9e0ec261ebf932d35f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;