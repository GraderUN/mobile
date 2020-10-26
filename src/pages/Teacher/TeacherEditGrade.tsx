import React, { useRef} from 'react';
import {gql, useMutation, useQuery} from '@apollo/client';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonButton, IonButtons, IonMenuButton, IonCard, IonCardContent
} from '@ionic/react';

/*
interface administrativo{

    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    telefono: number,
    email: string

}
*/

const GETNOTA = gql`
query($id: Int!){
  getNotabyId(
    id: $id
  ){
    notasId,
    notasValor,
    notasPeriodo,
    notasPorcentaje,
    notasComentarios
  }
}
`;

const UPDATENOTA = gql`
mutation($id: Int! , $notasUpdateInput : notasUpdateInput!){
  updateNota(
    notasGestionInput : $notasGestionInput
  )
}
`;

let thisId = 1;

const TeacherEditGrade: React.FC = () => {

    const { loading, error, data } = useQuery(GETNOTA , {variables :
            {id : thisId}});

/*
    const id =  useRef<HTMLIonInputElement>(data.getNotabyId.notasId);
    const notaValor = useRef<HTMLIonInputElement>(data.getNotabyId.notasValor);
    const notaPorcentaje = useRef<HTMLIonInputElement>(data.getNotabyId.notasPorcentaje);
    const notaPeriodo = useRef<HTMLIonInputElement>(data.getNotabyId.notasPeriodo);
    const notaComentario = useRef<HTMLIonInputElement>(data.getNotabyId.notasComentarios)
    */
    const notaValor = useRef<HTMLIonInputElement>(null);
    const notaPorcentaje = useRef<HTMLIonInputElement>(null);
    const notaPeriodo = useRef<HTMLIonInputElement>(null);
    const notaComentario = useRef<HTMLIonInputElement>(null)

    const [updateNota] =useMutation(UPDATENOTA);
    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Actualizar Nota </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel >Id de la nota: {thisId}</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel >Nota: </IonLabel>
                                <IonInput ref={notaValor}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel >Porcentaje:</IonLabel>
                                <IonInput ref={notaPorcentaje}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel >Periodo</IonLabel>
                                <IonInput ref={notaPeriodo}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel >Comentario: </IonLabel>
                                <IonInput ref={notaComentario}> </IonInput>
                            </IonItem>
                        </IonList>
                        <IonButton onClick={e => () => {

                            e.preventDefault();

                            const valorI = notaValor.current?.value as number;
                            const porcentajeI = notaPorcentaje.current?.value as number;
                            const periodoI = notaPeriodo.current?.value as string;
                            const commentI = notaComentario.current?.value as string
                            updateNota({
                                variables: {
                                    id: thisId,
                                    notasUpdateInput:{
                                        notaValor: valorI,
                                        notaPorcentaje: porcentajeI,
                                        notaPeriodo: periodoI,
                                        notaComentario: commentI
                                    }
                                }})
                        }
                        } color="secondary">
                            Agregar
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>

    );
}

export default TeacherEditGrade;