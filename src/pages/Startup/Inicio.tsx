import { IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
const Inicio: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
            <IonTitle>Bienvenido</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
        <IonTitle>BIENVENIDO</IonTitle>
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Inicio;
