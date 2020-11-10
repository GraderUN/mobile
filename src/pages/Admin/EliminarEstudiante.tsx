import React, { useRef } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { gql, useMutation } from "@apollo/client";

const ELIMINAR_ESTUDIANTE = gql`
  mutation deleteEstudiante($id: Int!) {
    deleteEstudiante(id: $id)
  }
`;

const EliminarEstudiante: React.FC = () => {
  const idInput = useRef<HTMLIonInputElement>(null);
  const [deleteEstudiante] = useMutation(ELIMINAR_ESTUDIANTE);

  const eliminarEstudiante = () => {
    const idI = idInput.current?.value as string;
    if (idI) {
      deleteEstudiante({ variables: { id: parseInt(idI, 10) } });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/GestionU" />
          </IonButtons>
          <IonTitle>Eliminar estudiante</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">
              Ingrese el ID del estudiante a eliminar
            </IonLabel>
            <IonInput ref={idInput}> </IonInput>
          </IonItem>
        </IonList>
        <IonButton
          onClick={eliminarEstudiante}
          color="secondary"
          shape="round"
          fill="outline"
        >
          Eliminar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EliminarEstudiante;
