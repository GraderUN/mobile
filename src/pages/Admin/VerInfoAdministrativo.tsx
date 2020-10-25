import React, { useState } from 'react';
import { 
    IonNote, 
    IonPage, 
    IonItem, 
    IonLabel, 
    IonList 
} from '@ionic/react';
import { gql, useQuery } from '@apollo/client';

const VER_ADMIN = gql`
    query {
        administrativoById(id: 16 ){
            nombre,
            apellido,
            edad,
            telefono,
            email
        }
    } 
`;

const VerInfoAdministrativo: React.FC = () => {

    const { loading, error, data } = useQuery(VER_ADMIN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (

        <IonPage>
            <IonList>
                <IonItem>
                    <IonLabel>{data.nombre}</IonLabel>
                    <IonNote slot="start">Nombre:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>{data.apellido}</IonLabel>
                    <IonNote slot="start">Apellido:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>{data.edad}</IonLabel>
                    <IonNote slot="start">Edad:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>{data.telefono}</IonLabel>
                    <IonNote slot="start">Telefono:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>{data.email}</IonLabel>
                    <IonNote slot="start">Email:</IonNote>
                </IonItem>
            </IonList>
        </IonPage>
    );
}

export default VerInfoAdministrativo;