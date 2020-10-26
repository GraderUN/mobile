import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../Startup/Page.css';
import { useQuery, gql } from "@apollo/client";

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

const Students: React.FC = () => {

  function DatosPersonales({id}) {
    const DATOS_PERSONALES = gql`
      query($id: Int!){
        estudianteById(id: $id) {
          id
          nombre
          apellido
          edad
          sexo
          nombreTutor
          apellidoTutor
          telefonoTutor
          emailTutor
        }
      }
    `;
    
    const { loading, error, data } = useQuery(DATOS_PERSONALES, {variables: {id}});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <IonList>
        <IonItem>
          <IonLabel>
            Tu nombre: {data.estudianteById.nombre}{" "}
            {data.estudianteById.apellido}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Tu edad: {data.estudianteById.edad}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Tu email: email@generico.com</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            El nombre de tu tutor: {data.estudianteById.nombreTutor}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            El telefono de tu tutor: {data.estudianteById.nombreTutor}{" "}
            {data.estudianteById.nombreTutor}
          </IonLabel>
        </IonItem>
      </IonList>
    );
  }

  async function loadData() {
    const { value }: any = await Storage.get({ key: "user" });
    let data = JSON.parse(value);
    setfullData(data.id);
  }

  useEffect(() => {
    loadData();
  });

  let studentId = 0;
  const [fullData, setfullData] = useState<string>("");

  const { name } = useParams<{ name: string }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DatosPersonales id={parseInt(fullData)}/>
        <IonItem>
          <IonLabel> DATO: {parseInt(fullData)}</IonLabel>
        </IonItem>
        <IonCard>
          <IonCardHeader>
            <IonButton href="/pages/Inbox">Botón</IonButton>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export { Students };
