import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5HT1a4lXEi_vWQ4sW2pql6MeulXjhnyc",
  authDomain: "react-coderhouse-91364.firebaseapp.com",
  projectId: "react-coderhouse-91364",
  storageBucket: "react-coderhouse-91364.appspot.com",
  messagingSenderId: "321681396225",
  appId: "1:321681396225:web:7354b05373f7cb27c96600",
  measurementId: "G-1WWVJ7CGHC",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
