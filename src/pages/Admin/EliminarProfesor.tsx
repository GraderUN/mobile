import React, { useRef } from 'react';
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
    IonList 
} from '@ionic/react';
import { gql, useMutation } from '@apollo/client';

const ELIMINAR_PROFESOR = gql`
    mutation deleteProfesor($id: Int!){
        deleteProfesor(id: $id)
    }
`

const EliminarProfesor: React.FC = () => {

    const idInput = useRef<HTMLIonInputElement>(null);
    const [deleteProfesor] =useMutation(ELIMINAR_PROFESOR);

    const eliminarProfesor = () => {

        const idI = idInput.current?.value as string;
        if(idI){
            deleteProfesor({ variables: {id: parseInt(idI, 10)}})
        }
    }

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Eliminar profesor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                <IonItem>
                        <IonLabel position="stacked">Ingrese el ID del profesor a eliminar</IonLabel>
                        <IonInput ref={idInput}> </IonInput>
                    </IonItem>
                </IonList>
                <IonButton onClick={eliminarProfesor} color="secondary" shape="round" fill="outline">
                        Eliminar
                </IonButton>
            </IonContent>
        </IonPage>

    );
}

export default EliminarProfesor;