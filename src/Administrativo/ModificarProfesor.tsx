import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

const ModificarProfesor: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Cambiar datos del profesor</IonTitle>
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
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el telefono</IonLabel>
                        <IonInput value={number}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el email</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                </IonList>
                <IonButton color="secondary" shape="round" fill="outline">
                        Modificar
                </IonButton>
            </IonContent>
        </IonPage>

    );
}

export default ModificarProfesor;