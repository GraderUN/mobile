import { gql, useMutation } from '@apollo/client';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';


const CrearMateria: React.FC = () => {

    const nombreInput = useRef<HTMLIonInputElement>(null);
    const gradoInput = useRef<HTMLIonInputElement>(null);
    const [showAlert1, setShowAlert1] = useState(false);
    const ADD_MATERIA= gql`
         mutation postSubject($data : SubjectInput!){
            postSubject(data : $data){
                rows
                response
            }
        }
    `;

    function AddMateria(){
      const nombre = nombreInput.current?.value as string;
      const grado = gradoInput.current?.value as number;
      
      console.log("nombre:",nombre," grado: ", grado);
      
    const [createMateria] = useMutation(ADD_MATERIA, {
        variables: {
          data:{
            name: nombre, 
            grade: grado
          }
          },
      });
  
      return (
        <IonItem>
          <IonButton
            color="primary"
            onClick={() => {
                createMateria().then((result)=> {
                    
                if (result.data.postSubject.response === "Success") {
                  setShowAlert1(true);
                }
              }).catch(()=> {
                console.log("ERROR FATAL");
                
              });
            }}
          >
            Crear Materia
          </IonButton>
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            cssClass="my-custom-class"
            header={"La materia "+ nombre}
            message={"Fue creada correctamente"}
            buttons={["OK"]}
          />
        </IonItem>
      );
    }
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>Añadir una materia</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonList>
          <IonItemDivider>Nombre: </IonItemDivider>
          <IonItem>
            <IonInput placeholder="Ingrese el nombre de la materia" ref={nombreInput}></IonInput>
          </IonItem>
          <IonItemDivider>Grado a asignar: </IonItemDivider>
          <IonItem>
            <IonInput type="number" placeholder="Ingrese el grado" ref={gradoInput}></IonInput>
          </IonItem>
          </IonList>
          <AddMateria/>
        </IonContent>
        </IonPage>
    );
};


export default CrearMateria;