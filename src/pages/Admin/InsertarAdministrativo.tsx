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
    IonButton
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

const AGREGAR_ADMIN = gql`
mutation{
    createAdministrativo( $nombre: String!, $apellido: String!, $edad: Int!, $telefono: Int!, $email: String!){
        createAdministrativo(administrativo: {
            nombre: $nombre,
            apellido: $apellido,
            edad: $edad,
            telefono: $telefono,
            email: $email
        }) 
    }
} 
`;

const InsertarAdministrativo: React.FC = () => {
    
    const nombreInput = useRef<HTMLIonInputElement>(null);
    const apellidoInput = useRef<HTMLIonInputElement>(null);
    const edadInput = useRef<HTMLIonInputElement>(null);
    const telefonoInput = useRef<HTMLIonInputElement>(null);
    const emailInput = useRef<HTMLIonInputElement>(null);

    const [createAdministrativo] =useMutation(AGREGAR_ADMIN);

    return(
  
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Crear un nuevo administrativo</IonTitle>
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
                <IonButton onClick={e => () => {

                            e.preventDefault();
                            
                            const nombreI = nombreInput.current?.value as string;
                            const apellidoI = apellidoInput.current?.value as string;
                            const edadI = edadInput.current?.value as number;
                            const telefonoI = telefonoInput.current?.value as number;
                            const emailI = emailInput.current?.value as string;
                            createAdministrativo({ variables: {nombre: nombreI, apellido: apellidoI, edad: edadI, telefono: telefonoI, email: emailI}})
                        }
                    } color="secondary" shape="round" fill="outline">
                    Registrar
                </IonButton>
            </IonContent>
        </IonPage>
  
    );
}

export default InsertarAdministrativo;