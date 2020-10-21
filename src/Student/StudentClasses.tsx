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
import '../pages/Page.css';
import {gql, useQuery} from "@apollo/client";


const CLASES = gql`
    query {
        AssignementsByCourse(courseID: "5f8e5d11090c20a6b6feef3d"){
            materia,
            salon,
            profesor,
            horario
        }
    }
`;

function Traerdatos() {
    const { loading, error, data } = useQuery(CLASES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.AssignementsByCourse.map(({ materia, salon , profesor , horario}) => (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>{horario}</IonCardSubtitle>
                <IonCardTitle>{materia}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>con el profesor {profesor}</IonItem>
                    <IonItem>en el salon {salon}</IonItem>
                </IonList>
                <IonButton>
                    Ver
                </IonButton>
            </IonCardContent>
        </IonCard>

    ));
}


const StudentClasses: React.FC = () => {

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

export default StudentClasses;
