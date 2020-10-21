import React, { useState } from 'react';
import { 
    IonNote, 
    IonButton, 
    IonIcon, 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonList 
} from '@ionic/react';

const VerInfoEstudiante: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    return(

        <IonPage>
            <IonList>
                <IonItem>
                    <IonLabel>Andres Felipe</IonLabel>
                    <IonNote slot="start">Nombre:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Andres Felipe</IonLabel>
                    <IonNote slot="start">Apellido:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Andres Felipe</IonLabel>
                    <IonNote slot="start">Edad:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Andres Felipe</IonLabel>
                    <IonNote slot="start">Sexo:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Andres Felipe</IonLabel>
                    <IonNote slot="start">Nombre del tutor:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Andres Felipe</IonLabel>
                    <IonNote slot="start">Apellido del tutor:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Andres Felipe</IonLabel>
                    <IonNote slot="start">Telefono del tutor:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Andres Felipe</IonLabel>
                    <IonNote slot="start">Email del tutor:</IonNote>
                </IonItem>
            </IonList>
        </IonPage>

    );
}

export default VerInfoEstudiante;