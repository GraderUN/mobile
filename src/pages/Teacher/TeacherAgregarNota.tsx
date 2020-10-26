import React, { useRef} from 'react';
import { gql, useMutation } from '@apollo/client';
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

const AGREGARNOTA = gql`
mutation($notasGestionInput : notasGestionInput!){
  createNota(
    notasGestionInput : $notasGestionInput
  )
}
`;

const TeacherAgregarNota: React.FC = () => {

    const notaIdEstudiante = useRef<HTMLIonInputElement>(null);
    const notaTipoNotasId = useRef<HTMLIonInputElement>(null);
    const notaValor = useRef<HTMLIonInputElement>(null);
    const notaPorcentaje = useRef<HTMLIonInputElement>(null);
    const notaPeriodo = useRef<HTMLIonInputElement>(null);
    const notaComentario = useRef<HTMLIonInputElement>(null)

    const [createAdministrativo] =useMutation(AGREGARNOTA);


    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Agregar Nota </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel >Id del estudiante: </IonLabel>
                                <IonInput ref={notaIdEstudiante}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel >Tipo de nota: </IonLabel>
                                <IonInput ref={notaTipoNotasId}> </IonInput>
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

                            const estudianteI = notaIdEstudiante.current?.value as string;
                            const tipoI = notaTipoNotasId.current?.value as string;
                            const valorI = notaValor.current?.value as number;
                            const porcentajeI = notaPorcentaje.current?.value as number;
                            const periodoI = notaPeriodo.current?.value as number;
                            const commentI = notaComentario.current?.value as string;
                            createAdministrativo({
                                variables: {
                                    notaIdEstudiante: estudianteI,
                                    notaTipoNotasId: tipoI,
                                    notaValor: valorI,
                                    notaPorcentaje: porcentajeI,
                                    notaPeriodo: periodoI,
                                    notaComentario: commentI
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

export default TeacherAgregarNota;