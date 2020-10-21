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
import '../Page.css';
import {gql, useQuery} from "@apollo/client";


const CLASES = gql`
    query {
        AssignementsByProfessor(professor: "1234"){
            id,
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

    return data.AssignementsByCourse.map(({ materia, salon , horario}) => (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>{horario}</IonCardSubtitle>
                <IonCardTitle>{materia}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>en el salon {salon}</IonItem>
                </IonList>
                <IonButton>
                ver
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
                    <IonTitle>Estudiante</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos/>
            </IonContent>

        </IonPage>
    );
};

export default TeacherClasses;
