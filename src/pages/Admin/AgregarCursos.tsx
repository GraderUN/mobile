import React, { useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
import { briefcase } from 'ionicons/icons';
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
    IonIcon,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent
} from '@ionic/react';

/*const AGREGARCURSOS = gql`
mutation(course: CourseInput!){
    createCourse(
        course: CourseInput!
  ){
    grade
    letter
  }
}
`;*/


const AgregarCursos: React.FC = () => {
    const grade = useRef<HTMLIonInputElement>(null);
    const letter = useRef<HTMLIonInputElement>(null);

//    const [createSalon] =useMutation(AGREGARCURSOS);
    
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
                        <IonButton onClick={e => () => {

                            e.preventDefault();

                            const gradeAux = grade.current?.value as number;
                            const letterAux = letter.current?.value as string;
                          /*  createSalon({
                                variables: {
                                    grade: gradeAux,
                                    letter: letterAux
                                }})*/
                        }
                        } color="secondary">
                            Agregar salón
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>

        </IonPage>
    );
}

  export {AgregarCursos};