import {
    IonButton,
    IonButtons,
    IonCard, IonCardContent, IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonBadge
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import {gql, useQuery} from "@apollo/client";


const SALON = gql`
    query {
        allCourses{
            id
            letter
            grade
        }
    }
`;

function Traerdatos() {
    const { loading, error, data } = useQuery(SALON);



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allCourses.map(({id ,letter, grade}) => (
        <IonCard key={id}>
            <IonCardHeader>
                <IonCardTitle>
                
                <IonBadge color="light">Curso: </IonBadge>
                {grade}-{letter}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonButton href="/" color="secondary">
                    Editar
                </IonButton>
                <IonButton href="/" color="danger">
                    Eliminar
                </IonButton>
            </IonCardContent>
        </IonCard>

    ));
}


const AdministrarCursos: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle> Cursos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton href="/page/AgregarCursos">
                    <IonIcon icon={add} />
                </IonFabButton>
                </IonFab>
                <Traerdatos/>
            </IonContent>
        </IonPage>
    );
};

export default AdministrarCursos ;
