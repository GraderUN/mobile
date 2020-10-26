import React from 'react';
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
                    <IonLabel>{data.administrativoById.nombre}</IonLabel>
                    <IonNote slot="start">Nombre:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>{data.administrativoById.apellido}</IonLabel>
                    <IonNote slot="start">Apellido:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>{data.administrativoById.edad}</IonLabel>
                    <IonNote slot="start">Edad:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>{data.administrativoById.telefono}</IonLabel>
                    <IonNote slot="start">Telefono:</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>{data.administrativoById.email}</IonLabel>
                    <IonNote slot="start">Email:</IonNote>
                </IonItem>
            </IonList>
        </IonPage>
    );
}

export default VerInfoAdministrativo;