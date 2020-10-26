import {
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
    query{
    NotasEstudianteClase(
      datosEstudianteClase:{
      estudianteId: 1074187999,
      claseId: 1
    }
    ){
    notasIdEstudiante,
    notasValor,
    notasPorcentaje,
    notasPeriodo,
    NotasComentarios,
    tipoNotasNombre,
  }
}
`;

function Traerdatos() {
    const { loading, error, data } = useQuery(NOTAS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.NotasEstudianteClase.map(({ notasIdEstudiante, notasValor , notasPorcentaje , notasPeriodo
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
                    <IonItem>tipo de nota{tipoNotasNombre}</IonItem>
                    <IonItem>{NotasComentarios}</IonItem>

                </IonList>

            </IonCardContent>
        </IonCard>

    ));
}


const StudentGrades: React.FC = () => {

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

export default StudentGrades;
