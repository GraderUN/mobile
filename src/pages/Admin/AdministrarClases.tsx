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
        allAssignements{
            id
            curso
            salon
            horario
            materia
            profesor
        }
    }
`;
 
function Traerdatos() {
    const { loading, error, data } = useQuery(SALON);



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allAssignements.map(({id,curso,salon,horario,materia,profesor}) => (
        <IonCard key={id}>
            <IonCardHeader>
    <IonCardTitle>{materia}-{profesor}</IonCardTitle>
                <IonCardSubtitle>{id}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>horario: {horario}</IonItem>
                    <IonItem>Curso: {curso}</IonItem>
                    <IonItem>Salón: {salon}</IonItem>
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
                    <IonTitle> Clases </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton href="/page/AgregarClases">
                    <IonIcon icon={add} />
                </IonFabButton>
                </IonFab>
                <Traerdatos/>
            </IonContent>
        </IonPage>
    );
};

export default AdministrarClases ;