import {
    IonButtons,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import '../pages/Page.css';
import {gql, useQuery} from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;


function Traerdatos() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>{currency}</IonCardSubtitle>
                <IonCardTitle>{rate}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                this is the content
            </IonCardContent>
        </IonCard>

    ));
}


const Teacher: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Profesor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Traerdatos/>
            </IonContent>

        </IonPage>
    );
};

export default Teacher;
