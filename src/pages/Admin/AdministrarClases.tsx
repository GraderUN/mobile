import React from 'react';
import { add } from 'ionicons/icons';
import {gql, useQuery} from "@apollo/client";
import { 
    IonButton, 
    IonButtons,
    IonContent, 
    IonHeader, 
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
    IonCardTitle,
    IonMenuButton,
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonItem, 
    IonFab,
    IonFabButton,
    IonList, 
    IonIcon 
} from '@ionic/react';

const SALON = gql`
    query {
        allClassrooms{
            id
            description
            capacidad
        }
    }
`;


function Traerdatos() {
    const { loading, error, data } = useQuery(SALON);

    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allClassrooms.map(({ id ,description, capacidad}) => (
        <IonCard key={id}>
            <IonCardHeader>
                <IonCardTitle>{description}</IonCardTitle>
                <IonCardSubtitle>{id}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>capacidad {capacidad}</IonItem>

                </IonList>
                <IonButton href="/" color="secondary">
                    Editar
                </IonButton>
                <IonButton href="/" color="danger">
                    Eliminar
                </IonButton>
            </IonCardContent>
        </IonCard>

    ));
}

const AdministrarClases: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle> Salones</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                <IonFabButton href="/page/AgregarSalones">
                    <IonIcon icon={add} />
                </IonFabButton>
                </IonFab>
                <Traerdatos/>
            </IonContent>
        </IonPage>
    );
}
  export {AdministrarClases};