// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore"
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApGzSvhZN0hluZdBKY_I6EDe_whu5oU4o",
  authDomain: "schoolpaladinng.firebaseapp.com",
  projectId: "schoolpaladinng",
  storageBucket: "schoolpaladinng.appspot.com",
  messagingSenderId: "659939454227",
  appId: "1:659939454227:web:8cf630f13662755c73bee6",
  measurementId: "G-FRF1RKFYYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const analytics = getAnalytics(app);


interface Transaction {
  userId: string;
  amount: number;
  product_id: number;
  product_name?: string;
  quantity: number;
  purchaseDate: Date;
  itemsNames: []
}

export const addTransaction = async (transaction: Transaction) => {
  try {
    const docRef = await addDoc(collection(db, "transactions"), transaction);
    console.log("Transaction written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getUserTransactions = async (userId: string) => {
  const transactionsRef = collection(db, "transactions");
  const q = query(transactionsRef, where("userId", "==", userId));

  const querySnapshot = await getDocs(q);
  const transactions = querySnapshot.docs.map(doc => doc.data() as Transaction);
  console.log(transactions)
  return transactions;
};

