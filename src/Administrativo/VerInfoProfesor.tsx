import React, { useState } from 'react';
import { 
    IonNote, 
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
    IonList, 
    IonCard,
    IonCardContent,
    IonButtons,
    IonMenuButton
} from '@ionic/react';
import { gql, useQuery } from '@apollo/client';

const VER_PROFESOR = gql`
    query {
        allProfesores{
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
    const { loading, error, data } = useQuery(VER_PROFESOR);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allProfesores.map(({ id, nombre, apellido, edad, telefono, email }) => (
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

const VerInfoProfesor: React.FC = () => {
    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Profesores</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos/>
            </IonContent>
        </IonPage>

    );
}

export default VerInfoProfesor;