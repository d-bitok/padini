import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  // apiKey: "AIzaSyAuyAKIH-Yj6M0HGF6fKX20RNRf-ASgBx0",
  // authDomain: "padini-general-supplies.firebaseapp.com",
  // projectId: "padini-general-supplies",
  // storageBucket: "padini-general-supplies.appspot.com",
  // messagingSenderId: "781123287127",
  // appId: "1:781123287127:web:883008fff055362e75cb12",
  // measurementId: "G-CF135WSX1K"

  apiKey: "AIzaSyCfi79LiwfLa210dwATcj9MFx02E3AEpLQ",
  authDomain: "padini-invoices.firebaseapp.com",
  projectId: "padini-invoices",
  storageBucket: "padini-invoices.appspot.com",
  messagingSenderId: "227149304744",
  appId: "1:227149304744:web:5531782aeb51b55abbc39d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
