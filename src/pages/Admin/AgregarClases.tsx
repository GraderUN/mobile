import React, { useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
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
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent
} from '@ionic/react';

const AGREGARCLASE = gql`
mutation createAssignement($assignement: AssignementInput!){
    createAssignement(
        assignement: $assignement
  )
}
`;


const AgregarClases: React.FC = () => {
    
    const curso = useRef<HTMLIonInputElement>(null);
    const salon = useRef<HTMLIonInputElement>(null);
    const horario = useRef<HTMLIonInputElement>(null);
    const profesor = useRef<HTMLIonInputElement>(null);
    const materia = useRef<HTMLIonInputElement>(null);    
    

    const [createClases] =useMutation(AGREGARCLASE);
    const asignarClases= () =>{
        console.log("buttom cick")
       // e.preventDefault();
       const cursoAux = curso.current?.value as string;
       const materiaAux = materia.current?.value as string;
       const profesorAux = profesor.current?.value as string;
       const salonAux = salon.current?.value as string;
       const horarioAux = horario.current?.value as string;
        console.log("buttom cick")
             createClases({
                variables: {assignement:{
                    curso: cursoAux,
                    salon: salonAux,
                    horario:horarioAux,
                    profesor:profesorAux,
                    materia:materiaAux
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
                    <IonTitle>Agregar un curso </IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonTitle>Ingresar un nuevo curso</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonCard>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel position="floating" >Curso: </IonLabel>
                                <IonInput ref={curso}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >salon: </IonLabel>
                                <IonInput ref={salon}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >horario: </IonLabel>
                                <IonInput ref={horario}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >profesor: </IonLabel>
                                <IonInput ref={profesor}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >materia: </IonLabel>
                                <IonInput ref={materia}> </IonInput>
                            </IonItem>
                        </IonList>
                        <IonButton onClick={asignarClases}
                         color="secondary">
                            Agregar clase
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>

        </IonPage>
    );
}

  export {AgregarClases};