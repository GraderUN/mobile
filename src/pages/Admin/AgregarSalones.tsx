import React, { useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
//import { briefcase } from 'ionicons/icons';
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
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent
} from '@ionic/react';

const AGREGARSALON = gql`
mutation($classroom : ClassroomInput!){
    createClassroom(
        classroom : $classroom
  )
}
`;


const AgregarSalones: React.FC = () => {
    const asignarSalon= () =>{
            console.log("buttom cick")
           // e.preventDefault();

            const capacidadAux = capacidad.current?.value as string;
            const descripcionAux = descripcion.current?.value as string;
            createSalon({
                variables: { classroom:{
                    capacidad: parseInt(capacidadAux),
                    description: descripcionAux
                }
                }})
        }
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
                        <IonButton onClick={asignarSalon}
                         color="secondary">
                            Agregar salón
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>

        </IonPage>
    );
}

  export {AgregarSalones};