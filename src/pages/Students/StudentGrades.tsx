import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useContext, useEffect, useState} from "react";
import "../Startup/Page.css";
import { gql, useQuery } from "@apollo/client";

import { Plugins } from "@capacitor/core";
import CursoContext from "../../Data/CursoContext";
import ClassContext from "../../Data/ClassContext";
const { Storage } = Plugins;

const NOTAS = gql`
  query($datosEstudianteClase: datosEstudianteClase!) {
    NotasEstudianteClase(datosEstudianteClase: $datosEstudianteClase) {
      notasIdEstudiante
      notasValor
      notasPorcentaje
      notasPeriodo
      notasComentarios
      tipoNotasNombre
    }
  }
`;

function Traerdatos({ clase, id }) {
  const { loading, error, data } = useQuery(NOTAS, {
    variables: {
      datosEstudianteClase: {
        estudianteId: id,
        claseId: clase,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.NotasEstudianteClase.map(
    ({
      notasIdEstudiante,
      notasValor,
      notasPorcentaje,
      notasPeriodo,
      NotasComentarios,
      tipoNotasNombre,
    }) => (
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>{notasIdEstudiante}</IonCardSubtitle>
          <IonCardTitle>{notasValor}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem>
              recuerde que el porcentaje de la nota es {notasPorcentaje}
            </IonItem>
            <IonItem>nota en el periodo {notasPeriodo}</IonItem>
            <IonItem>tipo de nota {tipoNotasNombre}</IonItem>
            <IonItem>comentarios {NotasComentarios}</IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    )
  );
}

//let clase = "5f977f16e5994ac676b66da2";
//let id = 11;
const StudentGrades: React.FC = () => {

    async function loadData() {
        const { value }: any = await Storage.get({ key: "user" });
        let data = JSON.parse(value);
        setId(data.id);
    }

    useEffect(() => {
        loadData();
    });

    const [id, setId] = useState<string>("");

    const classCtx = useContext(ClassContext);


    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/ClasesEstudiante" />
          </IonButtons>
          <IonTitle>Notas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Traerdatos clase={classCtx.clase} id={id} />
      </IonContent>
    </IonPage>
  );
};

export default StudentGrades;