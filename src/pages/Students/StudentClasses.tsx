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
import React, {useContext, useEffect, useState} from 'react';
import '../Startup/Page.css';
import {gql, useQuery} from "@apollo/client";

import { Plugins } from "@capacitor/core";
import {useHistory} from "react-router";
import CursoContext from "../../Data/Courses/CursoContext";
import ClassContext from "../../Data/Classes/ClassContext";
const { Storage } = Plugins;

const CLASES = gql`
    query ($id: String!){
        assignementsbyStudent(id: $id){
            id
            materia,
            salon,
            profesor,
            horario
        }
    }
`;




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

    const history = useHistory();

    const claseCtxt = useContext(ClassContext);

    function Traerdatos({id}) {
        const { loading, error, data } = useQuery(CLASES , {variables:{id: id}});

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.assignementsbyStudent.map(({ id, materia, salon , profesor , horario}) => (
            <IonCard key={id}>
                <IonCardHeader>
                    <IonCardSubtitle>{horario}</IonCardSubtitle>
                    <IonCardTitle>{materia}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonList>
                        <IonItem>con el profesor {profesor}</IonItem>
                        <IonItem>en el salon {salon}</IonItem>
                    </IonList>
                    <IonButton onClick={() => {
                        claseCtxt.changeClass(id);
                        history.push("/page/Studentgrades");
                    }} >
                        Ver
                    </IonButton>
                </IonCardContent>
            </IonCard>

        ));
    }
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
