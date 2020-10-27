import React, { useRef } from 'react';
import { 
    IonButton, 
    IonIcon, 
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

const AGREGAR_ESTUDIANTE = gql`
    mutation createEstudiante(
        $nombre: String!, 
        $apellido: String!, 
        $edad: Int!, 
        $sexo: String!,
        $nombreTutor: String!,
        $apellidoTutor: String!,
        $telefonoTutor: Int!, 
        $emailTutor: String!){
        createEstudiante(estudiante: {
            nombre: $nombre,
            apellido: $apellido,
            edad: $edad,
            sexo: $sexo,
            nombreTutor: $nombreTutor,
            apellidoTutor: $apellidoTutor,
            telefonoTutor: $telefonoTutor,
            emailTutor: $emailTutor
        })
    }
`

const InsertarEstudiante: React.FC = () => {

    const nombreInput = useRef<HTMLIonInputElement>(null);
    const apellidoInput = useRef<HTMLIonInputElement>(null);
    const edadInput = useRef<HTMLIonInputElement>(null);
    const sexoInput = useRef<HTMLIonInputElement>(null);
    const nombreTInput = useRef<HTMLIonInputElement>(null);
    const apellidoTInput = useRef<HTMLIonInputElement>(null);
    const telefonoInput = useRef<HTMLIonInputElement>(null);
    const emailInput = useRef<HTMLIonInputElement>(null);

    const [createEstudiante] =useMutation(AGREGAR_ESTUDIANTE);
    const insertarEstudiante = () => {

        const nombreI = nombreInput.current?.value as string;
        const apellidoI = apellidoInput.current?.value as string;
        const edadI = edadInput.current?.value as string;
        const sexoI = sexoInput.current?.value as string;
        const nombreTI = nombreTInput.current?.value as string;
        const apellidoTI = apellidoTInput.current?.value as string;
        const telefonoI = telefonoInput.current?.value as string;
        const emailI = emailInput.current?.value as string;
        if(nombreI && apellidoI && edadI && sexoI && nombreTI && apellidoTI && telefonoI && emailI){
            createEstudiante({ 
                variables: {
                    nombre: nombreI, 
                    apellido: apellidoI, 
                    edad: parseInt(edadI, 10), 
                    sexo: sexoI,
                    nombreTutor: nombreTI,
                    apellidoTutor: apellidoTI,
                    telefonoTutor: parseInt(telefonoI, 10), 
                    emailTutor: emailI
                }
            })
        }
    }

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Registrar un nuevo estudiante</IonTitle>
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
                        <IonLabel position="stacked">Ingrese el sexo</IonLabel>
                        <IonInput ref={sexoInput}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el nombre del tutor</IonLabel>
                        <IonInput ref={nombreTInput}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el apellido del tutor</IonLabel>
                        <IonInput ref={apellidoTInput}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el telefono del tutor</IonLabel>
                        <IonInput ref={telefonoInput}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el email del tutor</IonLabel>
                        <IonInput ref={emailInput}> </IonInput>
                    </IonItem>
                </IonList>
                <IonButton onClick={insertarEstudiante} color="secondary" shape="round" fill="outline">
                    Registrar
                </IonButton>
            </IonContent>
        </IonPage>

    );
}

export default InsertarEstudiante;