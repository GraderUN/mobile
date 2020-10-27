import Menu from './components/Menu';
import Page from './pages/Page';
import TeacherClasses from "./Teacher/TeacherClasses";
import StudentClasses from "./Student/StudentClasses"
import React from 'react';
import { IonApp, IonItem, IonLabel, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import InsertarAdministrativo from './Administrativo/InsertarAdministrativo';
import VerInfoAdministrativo from './Administrativo/VerInfoAdministrativo';
import InsertarEstudiante from './Administrativo/InsertarEstudiante';
import InsertarProfesor from './Administrativo/InsertarProfesor';
import EliminarEstudiante from './Administrativo/EliminarEstudiante';
import EliminarProfesor from './Administrativo/EliminarProfesor';
import ModificarEstudiante from './Administrativo/ModificarEstudiante';
import ModificarProfesor from './Administrativo/ModificarProfesor';
import GestionUsuarios from './Administrativo/GestionUsuarios';
import ModificarAdministrativo from './Administrativo/ModificarAdministrativo';
import EliminarAdministrativo from './Administrativo/EliminarAdministrativo';
import VerInfoEstudiante from './Administrativo/VerInfoEstudiante';
import VerInfoProfesor from './Administrativo/VerInfoProfesor';

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache()
});
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <IonItem>
      <IonLabel>
        {currency} : {rate}
      </IonLabel>
    </IonItem>
    
  ));
}

const App: React.FC = () => {

  return (
    <IonApp>
      <ApolloProvider client = {client}>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
              <Route path="/ClasesProfesor" component={TeacherClasses} exact />
              <Route path="/ClasesEstudiante" component={StudentClasses} exact />
              <Route path="/page/GestionU" component={GestionUsuarios} exact />
              <Route path="/page/GestionU/RegistrarAdmin" component={InsertarAdministrativo} exact />
              <Route path="/page/GestionU/RegistrarEstudiante" component={InsertarEstudiante} exact />
              <Route path="/page/GestionU/RegistrarProfesor" component={InsertarProfesor} exact />
              <Route path="/page/GestionU/ModificarAdmin" component={ModificarAdministrativo} exact />
              <Route path="/page/GestionU/ModificarEstudiante" component={ModificarEstudiante} exact />
              <Route path="/page/GestionU/ModificarProfesor" component={ModificarProfesor} exact />
              <Route path="/page/GestionU/EliminarAdmin" component={EliminarAdministrativo} exact />
              <Route path="/page/GestionU/EliminarEstudiante" component={EliminarEstudiante} exact />
              <Route path="/page/GestionU/EliminarProfesor" component={EliminarProfesor} exact />
              <Route path="/page/GestionU/VerInfoAdmin" component={VerInfoAdministrativo} exact />
              <Route path="/page/GestionU/VerInfoEstudiante" component={VerInfoEstudiante} exact />
              <Route path="/page/GestionU/VerInfoProfesor" component={VerInfoProfesor} exact />
              <Redirect from="/" to="/page/GestionU" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
      </ApolloProvider>
    </IonApp>
  );
};

export{
  App,
  ExchangeRates
}
