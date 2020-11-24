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


const GestionEstudiante: React.FC = () => {
    
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
            <IonButton href="/page/GestionU/RegistrarEstudiante" color="primary" shape="round" fill="outline">
                Registrar nuevo estudiante
            </IonButton>

            <IonButton href="/page/GestionU/ModificarEstudiante" color="primary" shape="round" fill="outline">
                Modificar datos de un estudiante
            </IonButton>

            <IonButton href="/page/GestionU/EliminarEstudiante" color="primary" shape="round" fill="outline">
                Eliminar un estudiante
            </IonButton>

            <IonButton href="/page/GestionU/VerInfoEstudiante" color="primary" shape="round" fill="outline">
                Ver información de estudiantes
            </IonButton>

        </IonPage>
    );
}
export default GestionEstudiante;