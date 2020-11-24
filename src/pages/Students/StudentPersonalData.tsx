import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
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

const Students: React.FC = () => {
  function DatosPersonales({ id }) {
    const src =
      "https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200088/114296479-graduation-student-avatar-icon-profession-logo-male-character-a-man-in-graduate-cap-and-mantle-peopl.jpg";
    
    const DATOS_PERSONALES = gql`
      query($id: Int!) {
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
    
    const { loading, error, data } = useQuery(DATOS_PERSONALES, {variables: {id: id}});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            {data.estudianteById.nombre} {data.estudianteById.apellido}
          </IonCardTitle>
          <IonCardSubtitle>
            Tutor: {data.estudianteById.nombreTutor}{" "}
            {data.estudianteById.apellidoTutor}
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
    setUser(data.id);
  }

  useEffect(() => {
    loadData();
  },[]);

  const [user, setUser] = useState<string>("");

  const { name } = useParams<{ name: string }>();

  function ExchangeRates() {
    const EXCHANGE_RATES = gql`
      query($currency: String!) {
        rates(currency: $currency) {
          currency
          rate
        }
      }
    `;
    const { loading, error, data } = useQuery(EXCHANGE_RATES, {
      variables: { currency: user },
    });
    let n: number = 0;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
      <IonItem key={n}>
        <IonLabel>
          {currency} : {rate}
          {(n = n + 1)}
        </IonLabel>
      </IonItem>
    ));
  }

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
        <IonItem>
          <IonLabel>Bienvenido</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel className="ion-text-wrap">
            A continuación podrás ver tú información personal:
          </IonLabel>
        </IonItem>
        <DatosPersonales id={parseInt(user)}/>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Si deseas cambiar alguno de tus datos personales, envía una
              solicitud aqui.
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton href="/pages/Inbox">USER ID: {user}</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export { Students };
