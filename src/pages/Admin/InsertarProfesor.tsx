import React, { useRef } from 'react';
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
    IonButton 
} from '@ionic/react';
import { gql, useMutation } from '@apollo/client';

const AGREGAR_PROFESOR = gql`
    mutation createProfesor(
        $nombre: String!, 
        $apellido: String!, 
        $edad: Int!, 
        $telefono: Int!, 
        $email: String!){
        createProfesor(profesor: {
            nombre: $nombre,
            apellido: $apellido,
            edad: $edad,
            telefono: $telefono,
            email: $email
        })
    }
`

const InsertarProfesor: React.FC = () => {

    const nombreInput = useRef<HTMLIonInputElement>(null);
    const apellidoInput = useRef<HTMLIonInputElement>(null);
    const edadInput = useRef<HTMLIonInputElement>(null);
    const telefonoInput = useRef<HTMLIonInputElement>(null);
    const emailInput = useRef<HTMLIonInputElement>(null);

    const [createProfesor] =useMutation(AGREGAR_PROFESOR);
    const insertarProfesor = () => {

        const nombreI = nombreInput.current?.value as string;
        const apellidoI = apellidoInput.current?.value as string;
        const edadI = edadInput.current?.value as string;
        const telefonoI = telefonoInput.current?.value as string;
        const emailI = emailInput.current?.value as string;
        if(nombreI && apellidoI && edadI && telefonoI && telefonoI && emailI){
            createProfesor({ 
                variables: {
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
                    <IonTitle>Crear un nuevo profesor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
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
                <IonButton onClick={insertarProfesor} color="secondary" shape="round" fill="outline">
                    Registrar
                </IonButton>
            </IonContent>
        </IonPage>

    );
}

export default InsertarProfesor;