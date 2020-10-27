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


const AgregarClases: React.FC = () => {
    const curso = useRef<HTMLIonInputElement>(null);
    const materia = useRef<HTMLIonInputElement>(null);
    const profesor = useRef<HTMLIonInputElement>(null);
    const salon = useRef<HTMLIonInputElement>(null);
    const horario = useRef<HTMLIonInputElement>(null);

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
                                <IonLabel position="floating" >Curso: </IonLabel>
                                <IonInput type="number" ref={curso}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >materia: </IonLabel>
                                <IonInput ref={materia}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >profesor: </IonLabel>
                                <IonInput ref={profesor}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >salon: </IonLabel>
                                <IonInput ref={salon}> </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" >horario: </IonLabel>
                                <IonInput ref={horario}> </IonInput>
                            </IonItem>
                        </IonList>
                        <IonButton onClick={e => () => {

                            e.preventDefault();

                            const cursoAux = curso.current?.value as number;
                            const materiaAux = materia.current?.value as string;
                            const profesorAux = profesor.current?.value as string;
                            const salonAux = salon.current?.value as string;
                            const horarioAux = horario.current?.value as string;
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

  export {AgregarClases};