import React from 'react';

import {
    IonButton,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton
} from '@ionic/react';


const GestionAdmin: React.FC = () => {

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle size="small">Bienvenido a gestión de usuarios</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonButton href="/page/GestionU/RegistrarAdmin" color="primary" shape="round" fill="outline">
                Registrar nuevo administrativo
            </IonButton>

            <IonButton href="/page/GestionU/ModificarAdmin" color="primary" shape="round" fill="outline">
                Modificar datos de un administrativo
            </IonButton>

            <IonButton href="/page/GestionU/EliminarAdmin" color="primary" shape="round" fill="outline">
                Eliminar un administrativo
            </IonButton>

            <IonButton href="/page/GestionU/VerInfoAdmin" color="primary" shape="round" fill="outline">
                Ver información de administrativos
            </IonButton>
        </IonPage>
    );
}
export default GestionAdmin;