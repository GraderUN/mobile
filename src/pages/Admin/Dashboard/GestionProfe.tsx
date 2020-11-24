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


const GestionProfe: React.FC = () => {

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle size="small">Bienvenido a gestión de profesores</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonButton href="/page/GestionU/RegistrarProfesor" color="primary" shape="round" fill="outline">
                Registrar nuevo profesor
            </IonButton>

            <IonButton href="/page/GestionU/ModificarProfesor" color="primary" shape="round" fill="outline">
                Modificar datos de un profesor
            </IonButton>

            <IonButton href="/page/GestionU/EliminarProfesor" color="primary" shape="round" fill="outline">
                Eliminar un profesor
            </IonButton>


            <IonButton href="/page/GestionU/VerInfoProfesor" color="primary" shape="round" fill="outline">
                Ver información de profesores
            </IonButton>

        </IonPage>
    );
}
export default GestionProfe;