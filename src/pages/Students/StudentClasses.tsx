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
        assignementsbyStudent(id: "11"){
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

    return data.assignementsbyStudent.map(({ materia, salon , profesor , horario}) => (
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
                <IonButton href="Studentgrades" >
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
                    <IonTitle>Clases cursadas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos/>
            </IonContent>
        </IonPage>
    );
};

export default StudentClasses;
