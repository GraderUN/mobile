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


const NOTAS = gql`
    query ($datosEstudianteClase : datosEstudianteClase!) { 
    NotasEstudianteClase(
      datosEstudianteClase : $datosEstudianteClase
    ){
    notasId,
    notasIdEstudiante,
    notasValor,
    notasPorcentaje,
    notasPeriodo,
    notasComentarios,
    tipoNotasNombre
  }
}
`;

let claseId = "5f977f16e5994ac676b66da2"
let estudianteId = 11
function Traerdatos() {
    const { loading, error, data } = useQuery(NOTAS , {variables : {datosEstudianteClase :{claseId : claseId , estudianteId : estudianteId} }});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.NotasEstudianteClase.map(({  notasIdEstudiante, notasValor , notasPorcentaje , notasPeriodo
                                              , NotasComentarios, tipoNotasNombre}) => (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>{notasIdEstudiante}</IonCardSubtitle>
                <IonCardTitle>{notasValor}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>recuerde que el porcentaje de la nota es {notasPorcentaje}</IonItem>
                    <IonItem>nota en el periodo {notasPeriodo}</IonItem>
                    <IonItem>tipo de nota {tipoNotasNombre}</IonItem>
                    <IonItem>comentario {NotasComentarios}</IonItem>

                </IonList>
                <IonButton color="warning" href="/page/Editarnota">
                    Editar
                </IonButton>
            </IonCardContent>
        </IonCard>

    ));
}

const TeacherGrades: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Notas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos/>
            </IonContent>

        </IonPage>
    );
};

export default TeacherGrades;
