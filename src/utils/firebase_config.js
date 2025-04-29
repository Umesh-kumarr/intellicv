import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAbSvIZOwtR8PaltA41zN_4jzlJYaJyfSo",
  authDomain: "ai-resume-builder-199fc.firebaseapp.com",
  databaseURL: "https://ai-resume-builder-199fc-default-rtdb.firebaseio.com",
  projectId: "ai-resume-builder-199fc",
  storageBucket: "ai-resume-builder-199fc.firebasestorage.app",
  messagingSenderId: "883288943312",
  appId: "1:883288943312:web:b9718be3e2ea06fe280cd5",
  measurementId: "G-T3H73TDD0J"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBlg1QKjkXxUXFAfoc_biWw-515Yw5iqTo",
//   authDomain: "clevercv-resume.firebaseapp.com",
//   projectId: "clevercv-resume",
//   storageBucket: "clevercv-resume.firebasestorage.app",
//   messagingSenderId: "405435349497",
//   appId: "1:405435349497:web:83c0ce72d3a992b799a528"
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { firebaseConfig, auth, app, db, storage };