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
import { add } from 'ionicons/icons';
import React from 'react';
import {gql, useQuery} from "@apollo/client";

const CURSO = gql`
    query{
        allCourses {
            id
            grade
            letter
        }
    }
`;

function Traerdatos() {
    const { loading, error, data } = useQuery(CURSO);

    console.log("data.....",data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allCourses.map(({ id ,grade, letter}) => (
        <IonCard key={id}>
            <IonCardHeader>
                <IonCardTitle>{grade}</IonCardTitle>
                <IonCardSubtitle>{id}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>grado: {letter}</IonItem>

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


const AdministrarCursos: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle> Cursos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                <IonFabButton href="/page/AgregarCursos">
                    <IonIcon icon={add} />
                </IonFabButton>
                </IonFab>
                <Traerdatos/>
            </IonContent>
        </IonPage>
    );
}

  export default {AdministrarCursos};