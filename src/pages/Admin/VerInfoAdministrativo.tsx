import React from 'react';
import { 
    IonNote, 
    IonPage, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonCard,
    IonCardContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent
} from '@ionic/react';
import { gql, useQuery } from '@apollo/client';

const VER_ADMIN = gql`
    query {
        allAdministrativos{
            id
            nombre
            apellido
            edad
            telefono
            email
        }
    } 
`;

function Traerdatos() {
    const { loading, error, data } = useQuery(VER_ADMIN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allAdministrativos.map(({ id, nombre, apellido, edad, telefono, email }) => (
        <IonCard>
            <IonCardContent>
                <IonList>
                    <IonItem>ID: {id}</IonItem>
                    <IonItem>Nombre: {nombre}</IonItem>
                    <IonItem>Apellido: {apellido}</IonItem>
                    <IonItem>Edad: {edad}</IonItem>
                    <IonItem>Telefono: {telefono}</IonItem>
                    <IonItem>Email: {email}</IonItem>
                </IonList>
            </IonCardContent>
        </IonCard>

    ));
}

const VerInfoAdministrativo: React.FC = () => {
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Administrativos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos/>
            </IonContent>
        </IonPage>
    );
}

export default VerInfoAdministrativo;