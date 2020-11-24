import {
  IonButton,
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
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useContext, useEffect, useState} from "react";
import "../Startup/Page.css";
import { gql, useQuery } from "@apollo/client";
import CursoContext from "../../Data/Courses/CursoContext";
import { useHistory } from "react-router";
import {Plugins} from "@capacitor/core";
import ClassContext from "../../Data/Classes/ClassContext";

const { Storage } = Plugins;


const CLASES = gql`
  query($professor: String!) {
    AssignementsByProfessor(professor: $professor) {
      id
      curso
      materia
      salon
      horario
    }
  }
`;

let profesor = "17";

const TeacherClasses: React.FC = () => {

  async function loadData() {
    const { value }: any = await Storage.get({ key: "user" });
    let data = JSON.parse(value);
    setId(data.id);
  }

  useEffect(() => {
    loadData();
  });

  const [user, setId] = useState<string>("");

  const history = useHistory();

  const cursoCtxt = useContext(CursoContext);
  const classCtxt = useContext(ClassContext);

  function Traerdatos({id}) {
    const { loading, error, data } = useQuery(CLASES, {
      //variables: { professor: user },
      variables: { professor: profesor },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.AssignementsByProfessor.map(
      ({ curso, materia, salon, horario }) => (

          <IonCard key={id}>
          <IonCardHeader>
            <IonCardSubtitle>{horario}</IonCardSubtitle>
            <IonCardTitle>{materia}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>en el salon {salon}</IonItem>
              <IonItem>con el curso {curso}</IonItem>
            </IonList>
            <IonButton
              onClick={() => {
                cursoCtxt.changeCurso(curso);
                classCtxt.changeClass(id);
                history.push("/page/TeacherCourse");
              }}
            >
              ver curso
            </IonButton>
          </IonCardContent>
        </IonCard>
      )
    );
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mis Clases</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Traerdatos id={user}/>
      </IonContent>
    </IonPage>
  );
};

export default TeacherClasses;
