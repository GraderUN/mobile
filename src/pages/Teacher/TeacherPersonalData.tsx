import { IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import '../Page.css';
import { useQuery, gql } from '@apollo/client';


const DATOS_PERSONALES = gql`
  query profesor {
    profesorById(id: 15) {
        id
        nombre 
        apellido
        edad
        telefono
        email
    }
  }
`;

function DatosPersonales() {
    const { loading, error, data } = useQuery(DATOS_PERSONALES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data.profesorById);
    
    return (
        <IonList>
         <IonItem>
            <IonLabel>
                Nombre: {data.profesorById.nombre} {data.profesorById.apellido}
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>
                Edad: {data.profesorById.edad}
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>
                Email: {data.profesorById.email}
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>
                Telefono: {data.profesorById.telefono}
            </IonLabel>
        </IonItem>          
        </IonList>
    );
}


const Teacher: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    var studentId = 0;
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonInput type="number" value={studentId} placeholder="Enter Number" onIonChange={e => studentId = parseInt(e.detail.value!, 10)}></IonInput>
                </IonItem>
                <DatosPersonales/>
            </IonContent>
        </IonPage>
    );
};

export {
    Teacher,
    DatosPersonales
}
