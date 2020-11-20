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

const AGREGARCURSOS = gql`
mutation($course: CourseInput!){
    createCourse(
        course: $course
  ){
    grade
    letter
  }
}

`;


const AgregarCursos: React.FC = () => {
    const asignarCurso= () =>{
        console.log("buttom cick")
       // e.preventDefault();
       const gradeAux = grade.current?.value as string;
       const letterAux = letter.current?.value as string;
        createCurso({
            variables: { course:{
                grade: parseInt(gradeAux),
                letter: letterAux
            }
            }})
    }
    const grade = useRef<HTMLIonInputElement>(null);
    const letter = useRef<HTMLIonInputElement>(null);

    const [createCurso] =useMutation(AGREGARCURSOS);
    
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
                                <IonLabel position="floating" >Curso numero: </IonLabel>
                                <IonInput type="number" ref={grade}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >Curso letra: </IonLabel>
                                <IonInput ref={letter}> </IonInput>
                            </IonItem>
                        </IonList>
                        <IonButton onClick={asignarCurso}
                         color="secondary">
                            Agregar salón
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>

        </IonPage>
    );
}

  export {AgregarCursos};