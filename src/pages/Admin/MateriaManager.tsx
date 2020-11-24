import { gql, useQuery } from "@apollo/client";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import MateriaContext from "../../Data/MateriaContext";

import "../Startup/Page.css";

const SubjectManager: React.FC = () => {
  const materiasCtxt = useContext(MateriaContext);

  const history = useHistory();

  function VerMaterias() {
    const ALL_MATERIAS = gql`
      query {
        getSubjects {
          id
          name
          grade
          content
        }
      }
    `;
    let textCourse = " ";

    const { loading, error, data } = useQuery(ALL_MATERIAS);

    if (loading) return <p>CARGANDO</p>;
    if (error) return <p>Error :</p>;

    return data.getSubjects.map(({ id, name, grade, }) => (
      <IonCard key={id}>
        <IonCardHeader
          onClick={() => {
            materiasCtxt.addMateria(id, name, grade, "");
            console.log(materiasCtxt.materia);
            history.push("/page/ContenidoMateria");
          }}
        >
          <IonCardTitle>Nombre de la materia: {name}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {(() => {
              switch (grade) {
                case 1:
                  textCourse = "Primero";
                  break;
                case 2:
                  textCourse = "Segundo";
                  break;
                case 3:
                  textCourse = "Tercero";
                  break;
                case 4:
                  textCourse = "Cuarto";
                  break;
                case 5:
                  textCourse = "Quinto";
                  break;
                case 6:
                  textCourse = "Sexto";
                  break;
                case 7:
                  textCourse = "Septimo";
                  break;
                case 8:
                  textCourse = "Octavo";
                  break;
                case 9:
                  textCourse = "Noveno";
                  break;
                case 10:
                  textCourse = "Decimo";
                  break;
                case 11:
                  textCourse = "Once";
                  break;
                default:
                  textCourse = "Jardín";
                  break;  
              }
            })()}
            <IonItem>Pertenece al grado {textCourse}</IonItem>
            <IonButton
              slot="end"
              color="warning"
              onClick={() => {
                materiasCtxt.addMateria(id, name, grade, "");
                console.log("CLICK EN EDITAR");
                history.push("/page/EditarMateria");
              }}
            >
              Editar
            </IonButton>
            <IonButton
              slot="end"
              color="danger"
              onClick={() => {
                materiasCtxt.addMateria(id, name, grade, "");
                console.log("CLICK EN Eliminar");
                history.push("/page/EliminarMateria");
              }}
            >
              Eliminar
            </IonButton>
          </IonList>
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
          <IonTitle>Administrar materias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Administrar materias</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <VerMaterias />
          <IonFab vertical="bottom" horizontal="start" slot="fixed">
            {/* CAMBIAR EL HREF Y HACER EL AÑADIR */}
            <IonFabButton href="/page/CrearMateria">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default SubjectManager;
