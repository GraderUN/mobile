import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Startup/Page.css";
import { useQuery, gql } from "@apollo/client";

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

const Teacher: React.FC = () => {
  function DatosPersonales({ id }) {
    const src =
      "https://unblast.com/wp-content/uploads/2020/09/Male-Teacher-Illustration.jpg";
    const DATOS_PERSONALES = gql`
      query($id: Int!) {
        profesorById(id: $id) {
          id
          nombre
          apellido
          edad
          telefono
          email
        }
      }
    `;

    const { loading, error, data } = useQuery(DATOS_PERSONALES, {
      variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {data.profesorById.nombre} {data.profesorById.apellido}
          </IonCardTitle>
          <IonCardSubtitle className="ion-text-wrap">
            Numero de teléfono: {data.profesorById.telefono}
          </IonCardSubtitle>
          <IonCardSubtitle className="ion-text-wrap">
            Email: {data.profesorById.email}
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonImg src={src}></IonImg>
        </IonCardContent>
      </IonCard>
    );
  }
  async function loadData() {
    const { value }: any = await Storage.get({ key: "user" });
    let data = JSON.parse(value);
    setId(data.id);
  }

  useEffect(() => {
    loadData();
  });

  const [id, setId] = useState<string>("");
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
        <DatosPersonales id={parseInt(id)} />
      </IonContent>
    </IonPage>
  );
};

export { Teacher };
