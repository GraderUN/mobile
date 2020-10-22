import React, { useRef, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
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


interface administrativo{

    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    telefono: number,
    email: string

}

const AGREGAR_ADMIN = gql`

    mutation crearAdministrativo($nombre: nombre){
        createAdministrativo(administrativo: {
            nombre: $nombre,
            apellido: $apellido,
            edad: 11,
            telefono: 1111111111,
            email: "Email del Administrativo"
        }) 
    }
`;

const InsertarAdministrativo: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    
    const nombreInput = useRef<HTMLIonInputElement>(null);
    const apellidoInput = useRef<HTMLIonInputElement>(null);
    const edadInput = useRef<HTMLIonInputElement>(null);
    const telefonoInput = useRef<HTMLIonInputElement>(null);
    const emailInput = useRef<HTMLIonInputElement>(null);

    const registrarAdmin = () => {
        const nombre = nombreInput.current?.value as string;
        const apellido = apellidoInput.current?.value as string;
        const edad = edadInput.current?.value as number;
        const telefono = telefonoInput.current?.value as number;
        const email = emailInput.current?.value as string;

        /*if (nombre && apellido && edad && telefono && email) {
            const { loading, error, data } = useMutation(AGREGAR_ADMIN);

            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
        }*/
    }

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
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el apellido</IonLabel>
                        <IonInput value={number}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese la edad</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Ingrese el telefono</IonLabel>
                        <IonInput value={number}> </IonInput>
                    </IonItem><IonItem>
                        <IonLabel position="stacked">Ingrese el email</IonLabel>
                        <IonInput value={text}> </IonInput>
                    </IonItem>
                </IonList>
                <IonButton color="secondary" shape="round" fill="outline">
                        Registrar
                </IonButton>
            </IonContent>
        </IonPage>
  
    );
  }
  
  export default InsertarAdministrativo;