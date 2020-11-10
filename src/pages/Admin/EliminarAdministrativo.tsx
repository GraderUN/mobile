import React, { useRef} from "react";
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

const ELIMINAR_ADMIN = gql`
  mutation deleteAdministrativo($id: Int!) {
    deleteAdministrativo(id: $id)
  }
`;
const EliminarAdministrativo: React.FC = () => {
  const idInput = useRef<HTMLIonInputElement>(null);
  const [deleteAdministrativo] = useMutation(ELIMINAR_ADMIN);

  const eliminarAdministrativo = () => {
    const idI = idInput.current?.value as string;
    if (idI) {
      deleteAdministrativo({ variables: { id: parseInt(idI, 10) } });
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/GestionU" />
          </IonButtons>
          <IonTitle>Eliminar administrativo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Ingrese el ID a eliminar</IonLabel>
            <IonInput ref={idInput}> </IonInput>
          </IonItem>
        </IonList>
        <IonButton
          onClick={eliminarAdministrativo}
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

export default EliminarAdministrativo;
