//Pagina principal del administrativo
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


const GestionUsuarios: React.FC = () => {
    
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
            <IonButton href="/page/GestionU/RegistrarProfesor" color="primary" shape="round" fill="outline">
                Registrar nuevo profesor
            </IonButton>
            <IonButton href="/page/GestionU/RegistrarAdmin" color="primary" shape="round" fill="outline">
                Registrar nuevo administrativo
            </IonButton>
            <IonButton href="/page/GestionU/ModificarEstudiante" color="primary" shape="round" fill="outline">
                Modificar datos de un estudiante
            </IonButton>
            <IonButton href="/page/GestionU/ModificarProfesor" color="primary" shape="round" fill="outline">
                Modificar datos de un profesor
            </IonButton>
            <IonButton href="/page/GestionU/ModificarAdmin" color="primary" shape="round" fill="outline">
                Modificar datos de un administrativo
            </IonButton>
            <IonButton href="/page/GestionU/EliminarEstudiante" color="primary" shape="round" fill="outline">
                Eliminar un estudiante
            </IonButton>
            <IonButton href="/page/GestionU/EliminarProfesor" color="primary" shape="round" fill="outline">
                Eliminar un profesor
            </IonButton>
            <IonButton href="/page/GestionU/EliminarAdmin" color="primary" shape="round" fill="outline">
                Eliminar un administrativo
            </IonButton>
            <IonButton href="/page/GestionU/VerInfoEstudiante" color="primary" shape="round" fill="outline">
                Ver información de estudiantes
            </IonButton>
            <IonButton href="/page/GestionU/VerInfoProfesor" color="primary" shape="round" fill="outline">
                Ver información de profesores
            </IonButton>
            <IonButton href="/page/GestionU/VerInfoAdmin" color="primary" shape="round" fill="outline">
                Ver información de administrativos
            </IonButton>
        </IonPage>
    );
}

  export default GestionUsuarios;