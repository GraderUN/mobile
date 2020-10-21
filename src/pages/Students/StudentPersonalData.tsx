import { IonButton, IonButtons, IonCard, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import '../Page.css';
import { useQuery, gql } from '@apollo/client';


const DATOS_PERSONALES = gql`
  query estudiante {
    estudianteById(id: 10) {
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

function DatosPersonales() {
    const { loading, error, data } = useQuery(DATOS_PERSONALES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data.estudianteById);
    
    return (
        <IonList>
         <IonItem>
            <IonLabel>
                Tu nombre: {data.estudianteById.nombre} {data.estudianteById.apellido}
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>
                Tu edad: {data.estudianteById.edad}
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>
                Tu email: email@generico.com
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>
                El nombre de tu tutor: {data.estudianteById.nombreTutor}
            </IonLabel>
        </IonItem>     
        <IonItem>
            <IonLabel>
                El telefono de tu tutor: {data.estudianteById.nombreTutor} {data.estudianteById.nombreTutor}
            </IonLabel>
        </IonItem>         
        </IonList>
    );
}


const Students: React.FC = () => {

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
                <IonCard>
                    <IonCardHeader>
                        <IonButton href= "/pages/Inbox">Botón</IonButton>
                    </IonCardHeader>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export {
    Students,
    DatosPersonales
}
