
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAlODTJW4m_6YureTlXlnWOxcPI50HUvYY",
    authDomain: "crwn-clothing-db-9758a.firebaseapp.com",
    projectId: "crwn-clothing-db-9758a",
    storageBucket: "crwn-clothing-db-9758a.firebasestorage.app",
    messagingSenderId: "69187597025",
    appId: "1:69187597025:web:f19a9f28aa4196a6cbbda0"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters(
  {
      prompt: "select_account"
  }
)
export const auth = getAuth();

export const signinWithGooglePopup =() => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect =() => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot= await getDoc(userDocRef);
    
    if(!userSnapshot.exists()){
        const {displayName, email} =userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef,{
                displayName, email, createdAt
            });
        }catch(error){
            console.log('nista');
        }
    }
    return userDocRef;
}

