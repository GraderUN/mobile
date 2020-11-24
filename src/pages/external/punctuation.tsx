import {
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import '../Startup/Page.css';
import {gql, useQuery} from "@apollo/client";


const PUNTAJE = gql`
    query {
        allPuntajes{
            name
            email,
            puntaje,
        }
    }
`;



const punctuation: React.FC = () => {



    function Traerdatos() {
        const { loading, error, data } = useQuery(PUNTAJE  );

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.allPuntajes.map(({ email, name, puntaje}) => (
            <IonCard key={email}>
                <IonCardHeader>
                    <IonCardSubtitle>{name}</IonCardSubtitle>
                    <IonCardSubtitle>{email}</IonCardSubtitle>
                    <IonCardTitle>{puntaje}</IonCardTitle>
                </IonCardHeader>
            </IonCard>

        ));
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Lista de puntajes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos></Traerdatos>
            </IonContent>
        </IonPage>
    );
};

export default punctuation;
