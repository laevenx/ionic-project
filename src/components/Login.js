import React, {useState} from 'react'
import firebase from '../data/firebase'
import {
    IonContent,
    IonIcon,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonNote,
    IonItemGroup,
    
  } from "@ionic/react";
import { useHistory } from 'react-router-dom';
import { arrowForwardSharp } from 'ionicons/icons';

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [error, setError] = useState(null);
  const history = useHistory()

    function login() {
        
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((result) => {
            console.log(result);
            history.push('/home')
          })
          .catch((err) => {
            console.log(err.message);
            setError(err.message);
            setTimeout(() => {
                setError(null)
            },3000)
          });
      }

      return (
        <IonContent fullscreen>
     
        <IonItemGroup>
          <div style={{textAlign: 'center'}}>Login</div>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="text"
              onIonChange={(event) => {
                setEmail(event.target.value);
              }}
            ></IonInput>
          </IonItem>
         
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(event) => {
                setPassword(event.target.value);
              }}
            ></IonInput>
          </IonItem>
          
  
          <IonButton expand="block" onClick={login}>
            Login
            <IonIcon icon={arrowForwardSharp}></IonIcon>
          </IonButton>
          
          <IonNote color="danger">{error}</IonNote>
        </IonItemGroup>
      </IonContent>
      )

}

export default Login