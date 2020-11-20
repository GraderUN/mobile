import React, { useRef} from 'react';
import {gql, useMutation} from '@apollo/client';
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


const UPDATENOTA = gql`
mutation updateNota($id: Int! , $notasUpdateInput : notasUpdateInput!){
  updateNota(
    id: $id
    notasUpdateInput : $notasUpdateInput
  )
}
`;

let thisId = 1;

const TeacherEditGrade: React.FC = () => {


    const notaValor = useRef<HTMLIonInputElement>(null);
    const notaPorcentaje = useRef<HTMLIonInputElement>(null);
    const notaPeriodo = useRef<HTMLIonInputElement>(null);
    const notaComentario = useRef<HTMLIonInputElement>(null)

    const [updateNota] =useMutation(UPDATENOTA);

    const editar = () =>{

        const valorI = notaValor.current?.value as string;
        const porcentajeI = notaPorcentaje.current?.value as string;
        const periodoI = notaPeriodo.current?.value as string;
        const commentI = notaComentario.current?.value as string
        updateNota({
            variables: {
                id: thisId,
                notasUpdateInput:{
                    notaValor: Number.parseFloat(valorI),
                    notaPorcentaje: parseInt(porcentajeI , 10),
                    notaPeriodo: parseInt(periodoI , 10),
                    notaComentario: commentI
                }
            }})
    }

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
                                <IonInput ref={notaValor} > </IonInput>
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
                        <IonButton onClick={editar} color="secondary">
                            Confirmar
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>

    );
}

export default TeacherEditGrade;