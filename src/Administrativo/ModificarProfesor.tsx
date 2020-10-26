import React, { useRef, useState } from 'react';
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

const MODIFICAR_PROFESOR = gql`
    mutation updateProfesor(
        $id: Int!, 
        $nombre: String!, 
        $apellido: String!, 
        $edad: Int!, 
        $telefono: Int!, 
        $email: String!){
        updateProfesor(id: $id, profesor: {
            nombre: $nombre,
            apellido: $apellido,
            edad: $edad,
            telefono: $telefono,
            email: $email
        })
    }
`

const ModificarProfesor: React.FC = () => {

    const idInput = useRef<HTMLIonInputElement>(null);
    const nombreInput = useRef<HTMLIonInputElement>(null);
    const apellidoInput = useRef<HTMLIonInputElement>(null);
    const edadInput = useRef<HTMLIonInputElement>(null);
    const telefonoInput = useRef<HTMLIonInputElement>(null);
    const emailInput = useRef<HTMLIonInputElement>(null);

    const [updateProfesor] =useMutation(MODIFICAR_PROFESOR);
    const modificarProfesor = () => {

        const idI = idInput.current?.value as string;
        const nombreI = nombreInput.current?.value as string;
        const apellidoI = apellidoInput.current?.value as string;
        const edadI = edadInput.current?.value as string;
        const telefonoI = telefonoInput.current?.value as string;
        const emailI = emailInput.current?.value as string;
        if(idI && nombreI && apellidoI && edadI && telefonoI && telefonoI && emailI){
            updateProfesor({ 
                variables: {
                    id: parseInt(idI, 10), 
                    nombre: nombreI, 
                    apellido: apellidoI, 
                    edad: parseInt(edadI, 10), 
                    telefono: parseInt(telefonoI, 10), 
                    email: emailI
                }
            })
        }
    }
    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Cambiar datos del profesor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el ID del profesor a modificar</IonLabel>
                        <IonInput ref={idInput}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el nombre</IonLabel>
                        <IonInput ref={nombreInput}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el apellido</IonLabel>
                        <IonInput ref={apellidoInput}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese la edad</IonLabel>
                        <IonInput ref={edadInput}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el telefono</IonLabel>
                        <IonInput ref={telefonoInput}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el email</IonLabel>
                        <IonInput ref={emailInput}> </IonInput>
                    </IonItem>
                </IonList>
                <IonButton onClick={modificarProfesor} color="secondary" shape="round" fill="outline">
                        Modificar
                </IonButton>
            </IonContent>
        </IonPage>

    );
}

export default ModificarProfesor;