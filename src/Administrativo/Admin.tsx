//Pagina principal del administrativo
import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

const Admin: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Administrativo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">
                        Bienvenido a la pagina de administrativos, por favor seleccione una de las siguientes opciones
                    </IonTitle>
                </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
  };

  export default Admin;