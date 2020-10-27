import { gql, useQuery } from "@apollo/client";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonTextarea,
  IonCard,
  IonButton,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import MateriasContext from "../../Data/MateriaContext";

const TeacherClass: React.FC = () => {
  const materiasCtxt = useContext(MateriasContext);
  const [content, setContent] = useState<string>();

  const ACTUALIZAR = gql`
    mutation putContent($id: Int!, $content: String!) {
      putContent(id: $id, content: $content) {
        response
      }
    }
  `;
  function ActualizarContenido() {
    const { loading, error, data } = useQuery(ACTUALIZAR, {
      variables: { id: materiasCtxt.materia.id, content: content },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :/</p>;
    if(data.putContent.response === "Success") return(
        <IonItem>SUCESS</IonItem>
    );
    return (<IonItem>NOT</IonItem>);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{materiasCtxt.materia.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonItem>
            <IonLabel>Nombre: {materiasCtxt.materia.name}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Grado: {materiasCtxt.materia.grade.toString()}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Contenido:</IonLabel>
            <IonTextarea className="ion-text-wrap"
              value={content}
              placeholder={materiasCtxt.materia.content}
              onIonChange={(e) => setContent(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
        </IonCard>
        <IonItem>
          <IonButton
            color="warning"
            onClick={() => {
                console.log("HIZO CLICK");
              return (<IonContent><ActualizarContenido/></IonContent>)
            }}
          >
            Actualizar datos
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default TeacherClass;
