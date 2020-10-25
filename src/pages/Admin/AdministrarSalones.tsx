import React, { useState } from 'react';
import { briefcase } from 'ionicons/icons';
import { 
    IonButton, 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonIcon 
} from '@ionic/react';


const AdministrarSalones: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonIcon slot="start" icon={briefcase} />
                    <IonTitle>Bienvenido a gestión de usuarios</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonTitle>Seleccione una de las opciones</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonButton color="primary" shape="round" fill="outline">
                Registrar nuevo estudiante
            </IonButton>
            <IonButton color="primary" shape="round" fill="outline">
                Registrar nuevo profesor
            </IonButton>
            <IonButton color="primary" shape="round" fill="outline">
                Registrar nuevo administrativo
            </IonButton>
            <IonButton color="primary" shape="round" fill="outline">
                Modificar datos de un estudiante
            </IonButton>
            <IonButton color="primary" shape="round" fill="outline">
                Modificar datos de un profesor
            </IonButton>
            <IonButton color="primary" shape="round" fill="outline">
                Modificar datos de un administrativo
            </IonButton>
            <IonButton color="primary" shape="round" fill="outline">
                Eliminar un estudiante
            </IonButton>
            <IonButton color="primary" shape="round" fill="outline">
                Eliminar un profesor
            </IonButton>
            <IonButton color="primary" shape="round" fill="outline">
                Eliminar un administrativo
            </IonButton>
        </IonPage>
    );
}

  export default AdministrarSalones;