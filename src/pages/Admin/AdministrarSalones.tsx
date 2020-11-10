import {
    IonButton,
    IonButtons,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader, IonItem, IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import {gql, useQuery} from "@apollo/client";


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



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allClassrooms.map(({id ,description, capacidad}) => (
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


const AdministrarSalones: React.FC = () => {

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
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton href="/page/AgregarSalones">
                    <IonIcon icon={add} />
                </IonFabButton>
                </IonFab>
                <Traerdatos/>
            </IonContent>
        </IonPage>
    );
};

export default AdministrarSalones ;