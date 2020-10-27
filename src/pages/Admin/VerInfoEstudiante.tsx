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

const VER_ESTUDIANTE = gql`
    query {
        allEstudiantes{
            id
            nombre
            apellido
            edad
            sexo
            nombreTutor
            apellidoTutor
            telefonoTutor
            emailTutor
        }
    } 
`;

function Traerdatos() {
    const { loading, error, data } = useQuery(VER_ESTUDIANTE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allEstudiantes.map(({ id, nombre, apellido, edad, sexo, nombreTutor, apellidoTutor, telefonoTutor, emailTutor }) => (
        <IonCard>
            <IonCardContent>
                <IonList>
                    <IonItem>ID: {id}</IonItem>
                    <IonItem>Nombre: {nombre}</IonItem>
                    <IonItem>Apellido: {apellido}</IonItem>
                    <IonItem>Edad: {edad}</IonItem>
                    <IonItem>Sexo: {sexo}</IonItem>
                    <IonItem>Nombre del tutor: {nombreTutor}</IonItem>
                    <IonItem>Apellido del tutor: {apellidoTutor}</IonItem>
                    <IonItem>Telefono del tutor: {telefonoTutor}</IonItem>
                    <IonItem>Email del tutor: {emailTutor}</IonItem>
                </IonList>
            </IonCardContent>
        </IonCard>

    ));
}

const VerInfoEstudiante: React.FC = () => {

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Estudiantes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos/>
            </IonContent>
        </IonPage>

    );
}

export default VerInfoEstudiante;