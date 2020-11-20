import { gql, useQuery } from "@apollo/client";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonBackButton,
} from "@ionic/react";
import React, { useContext } from "react";
import MateriasContext from "../../Data/MateriaContext";

const TeacherClass: React.FC = () => {
  const materiasCtxt = useContext(MateriasContext);

  const ELIMINAR = gql`
    mutation deleteSubject($id: id) {
        deleteSubject(id: $id) {
        response
      }
    }
  `;
  function BorrarMateria() {
    const { loading, error, data } = useQuery(ELIMINAR, {
      variables: { id: materiasCtxt.materia.id},
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :/</p>;
    if(data.deleteSubject.response === "Success") return(
        <IonItem>SUCESS</IonItem>
    );
    return (<IonItem>NOT</IonItem>);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>{materiasCtxt.materia.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonItem><IonLabel>Está seguro de que desea eliminar: {materiasCtxt.materia.name} ?</IonLabel></IonItem>
       
       <IonButton onClick={() => {

       }}>SI</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default TeacherClass;
