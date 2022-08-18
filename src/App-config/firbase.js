import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8rTcxqDwvQ2cyZa1S3suM4QUqw1VZ7Vo",
  authDomain: "reactfirebase-69e0e.firebaseapp.com",
  projectId: "reactfirebase-69e0e",
  storageBucket: "reactfirebase-69e0e.appspot.com",
  messagingSenderId: "306653830325",
  appId: "1:306653830325:web:63bc9bbebc1ae8acb672fc"
};
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db}