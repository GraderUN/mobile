import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonTextarea,
  IonCard,
  IonButton,
  IonBackButton,
  IonAlert,
  IonInput,
} from "@ionic/react";
import React, { useContext, useRef, useState } from "react";
import MateriasContext from "../../Data/MateriaContext";

const TeacherClass: React.FC = () => {
  const contentInput = useRef<HTMLIonInputElement>(null);
  const materiasCtxt = useContext(MateriasContext);

  const [showAlert1, setShowAlert1] = useState(false);

  const GET_CONTENIDO = gql`
    query($id: Int!) {
      getContent(id: $id) {
        content
      }
    }
  `;
  const UPDATE_CONTENIDO = gql`
    mutation($id: Int!, $content: String!) {
      putContent(id: $id, content: $content) {
        rows
        response
      }
    }
  `;
  /*
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
*/
  function Updatecontent({ content }) {
    const [updateContenido] = useMutation(UPDATE_CONTENIDO, {
      variables: { id: materiasCtxt.materia.id, content: content },
    });

    return (
      <IonItem>
        <IonButton
          color="warning"
          onClick={() => {
            updateContenido().then((result)=> {
              
              if (result.data.putContent.response === "Success") {
                setShowAlert1(true);
              }
            }).catch(()=> {
              console.log("ERROR FATAL");
              
            });
          }}
        >
          Actualizar Contenido
        </IonButton>
        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass="my-custom-class"
          header={"La materia "+ materiasCtxt.materia.name}
          message={"Fue modificada correctamente"}
          buttons={["OK"]}
        />
      </IonItem>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
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
            <IonInput
              className="ion-text-wrap"
              value={materiasCtxt.materia.content}
              placeholder="Contenido"
              ref = {contentInput}
            ></IonInput>
          </IonItem>
        </IonCard>
        <IonItem>
          <Updatecontent content={contentInput.current?.value as string} />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default TeacherClass;
