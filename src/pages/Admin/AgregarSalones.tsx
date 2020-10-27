import React, { useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
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
    IonIcon,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent
} from '@ionic/react';

const AGREGARSALON = gql`
mutation($classroom : ClassroomInput!){
    createClassroom(
        classroom : $ClassroomInput
  )
}
`;


const AgregarSalones: React.FC = () => {
    const capacidad = useRef<HTMLIonInputElement>(null);
    const descripcion = useRef<HTMLIonInputElement>(null);

    const [createSalon] =useMutation(AGREGARSALON);
    
    return(
        <IonPage>
            <IonHeader>
            <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Agregar Salón </IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonTitle>Ingresar un nuevo salón</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonCard>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel position="floating">Capacidad del salón: </IonLabel>
                                <IonInput type="number" ref={capacidad}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Descripción del salón: </IonLabel>
                                <IonInput ref={descripcion}> </IonInput>
                            </IonItem>
                        </IonList>
                        <IonButton onClick={e => () => {

                            e.preventDefault();

                            const capacidadAux = capacidad.current?.value as number;
                            const descripcionAux = descripcion.current?.value as string;
                            createSalon({
                                variables: {
                                    capacidad: capacidadAux,
                                    description: descripcionAux
                                }})
                        }
                        } color="secondary">
                            Agregar salón
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>

        </IonPage>
    );
}

  export {AgregarSalones};