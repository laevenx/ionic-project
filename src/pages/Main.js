import React, { useState } from "react";

import { IonPage, IonButton } from "@ionic/react";

import Login from "../components/Login";
import Register from "../components/Register";

const Main = () => {
  const [mode, setMode] = useState("login");
  const [modeName, setModeName] = useState("Register");

  function changeMode() {
    if (mode === "login") {
      setMode("register");
      setModeName("Login");
    } else {
      setMode("login");
      setModeName("Register");
    }
  }

  function complete() {
    setMode("login");
    setModeName("Register");
  }

  return (
    <IonPage>
      {mode === "login" ? <Login /> : <Register complete={complete} />}
      <IonButton
        onClick={() => {
          changeMode();
        }}
      >
        {modeName}
      </IonButton>
    </IonPage>
  );
};

export default Main;
