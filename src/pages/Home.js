import React from "react";
import {
  IonContent,
  IonHeader,
  
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
 
  IonButton,
  IonItem,
  
} from "@ionic/react";
import "./Home.css";
import { useHistory } from "react-router";
import { exitOutline } from "ionicons/icons";

const Home = () => {
  const history = useHistory();

  const refresh = (e) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }} size="large">
              Welcome
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </IonItem>
        <IonButton
          style={{ margin: "auto" }}
          color="danger"
          onClick={() => {
            history.push("/main");
          }}
        >
          <ion-icon icon={exitOutline}></ion-icon>Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
