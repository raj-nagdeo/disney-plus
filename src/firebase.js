import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCPCBGl922u4_1Q5M9Uijm6y1A5PhZTqh0",
  authDomain: "disney-plus-frontend.firebaseapp.com",
  databaseURL: "https://disney-plus-frontend-default-rtdb.firebaseio.com",
  projectId: "disney-plus-frontend",
  storageBucket: "disney-plus-frontend.appspot.com",
  messagingSenderId: "605968816546",
  appId: "1:605968816546:web:930d86478fa5f324d77afb"
 
};

  

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
export { auth, provider, storage };
export default db;



// apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",



getDoc(doc(db, "movies", id)).then(docSnap => {
  if (docSnap.exists()) {
      setMovie(docSnap.data());
  } else {
    console.log("No such document!");
  }
})