import { gql, useQuery } from "@apollo/client";
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import MateriasContext from "../../Data/MateriaContext";
import "../Startup/Page.css";

const SubjectContent: React.FC = () => {
  const GET_MATERIA = gql`
    query($id: Int!){
      getContent(id: $id) {
        id
        name
        grade
        content
      }
    }
  `;

  const materiasCtxt = useContext(MateriasContext);

  function GetMateria({ id }) {
    const { loading, error, data } = useQuery(GET_MATERIA, {
      variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{data.getContent.name}</IonCardTitle>
          <IonCardSubtitle className="ion-text-wrap">
            La materia se dicta para el grado: {data.getContent.grade}
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className="ion-text-wrap">
          Contenido de la materia: {data.getContent.content}
        </IonCardContent>
      </IonCard>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contenido</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <GetMateria id={materiasCtxt.materia.id}/>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default SubjectContent;
