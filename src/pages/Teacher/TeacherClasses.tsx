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
    IonToolbar
} from '@ionic/react';
import React from 'react';
import '../Startup/Page.css';
import {gql, useQuery} from "@apollo/client";


const CLASES = gql`
    query {
        AssignementsByProfessor(professor: "15"){
            curso,
            materia,
            salon,
            horario
        }
    }
`;

function Traerdatos() {
    const { loading, error, data } = useQuery(CLASES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.AssignementsByProfessor.map(({ curso ,materia, salon , horario}) => (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>{horario}</IonCardSubtitle>
                <IonCardTitle>{materia}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>en el salon {salon}</IonItem>
                    <IonItem>con el curso {curso}</IonItem>
                </IonList>
                <IonButton href="/TeacherCourse">
                    ver curso
                </IonButton>
            </IonCardContent>
        </IonCard>

    ));
}


const TeacherClasses: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Mis Clases</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos/>
            </IonContent>

        </IonPage>
    );
};

export default TeacherClasses;
