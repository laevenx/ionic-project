import React, {useState} from "react";
import firebase from "../data/firebase";
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
import { useHistory } from "react-router-dom";
import { arrowForwardSharp } from 'ionicons/icons';


const Register = (props) => {
    const {complete} = props
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory()

  function register() {
    console.log(email, password)
    if (password == repeatPass) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          console.log(result);
          complete()
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setTimeout(() => {
              setError(null)
          },3000)
        });
    } else {
      setError("Password and Repeat Password are not match");
      setTimeout(() => {
        setError(null)
    },3000)
    }
  }

  return (
    <IonContent fullscreen>
      <IonItemGroup>
        <div style={{textAlign: 'center'}}>Register</div>
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
        
        <IonItem>
          <IonLabel position="floating">Repeat Password</IonLabel>
          <IonInput
            type="password"
            onIonChange={(event) => {
              setRepeatPass(event.target.value);
            }}
          ></IonInput>
        </IonItem>

        <IonButton expand="block" onClick={register}>
          Register
          <IonIcon icon={arrowForwardSharp}></IonIcon>
        </IonButton>
        <IonNote color="danger">{error}</IonNote>
      </IonItemGroup>
    </IonContent>
  );
};

export default Register;
