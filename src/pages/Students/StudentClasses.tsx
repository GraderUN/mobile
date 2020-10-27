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
import React, {useEffect, useState} from 'react';
import '../Startup/Page.css';
import {gql, useQuery} from "@apollo/client";

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

const CLASES = gql`
    query ($id: String!){
        assignementsbyStudent(id: $id){
            materia,
            salon,
            profesor,
            horario
        }
    }
`;

function Traerdatos({id}) {
    const { loading, error, data } = useQuery(CLASES , {variables:{id: id}});

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
                <IonButton href="/page/Studentgrades" >
                    Ver
                </IonButton>
            </IonCardContent>
        </IonCard>

    ));
}


const StudentClasses: React.FC = () => {

    async function loadData() {
        const { value }: any = await Storage.get({ key: "user" });
        let data = JSON.parse(value);
        setId(data.id);
    }

    useEffect(() => {
        loadData();
    });

    const [id, setId] = useState<string>("");


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
                <Traerdatos id={id}/>
            </IonContent>
        </IonPage>
    );
};

export default StudentClasses;
