import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import firebaseConfig from '../data/firebaseConfig'

const Main = () => {
    firebase.initializeApp(firebaseConfig);
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(null);

    function login (){

    }

    function register(){

    }

    return (
    <>

    </>
    )
}

export default Main;