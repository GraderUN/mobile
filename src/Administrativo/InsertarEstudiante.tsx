import React, { useState } from 'react';
import { 
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

interface estudiante{

    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    sexo: string,
    nombreTutor: string,
    apellidoTutor: string,
    telefonoTutor: bigint,
    emailTutor: string

}

const InsertarEstudiante: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Registrar un nuevo estudiante</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el nombre</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el apellido</IonLabel>
                        <IonInput value={number}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese la edad</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el sexo</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el nombre del tutor</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el apellido del tutor</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el telefono del tutor</IonLabel>
                        <IonInput value={number}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el email del tutor</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                </IonList>
                <IonButton color="secondary" shape="round" fill="outline">
                    Registrar
                </IonButton>
            </IonContent>
        </IonPage>

    );
}

export default InsertarEstudiante;