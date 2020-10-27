import Menu from "./components/Menu";

import { Students } from "./pages/Students/StudentPersonalData";
import { Teacher } from "./pages/Teacher/TeacherPersonalData";
import MateriaManager from "./pages/Admin/MateriaManager";
import ContenidoMateria from "./pages/Admin/ContenidoMateria";
import EditarMateria from "./pages/Admin/EditarMateria";
import EliminarMateria from "./pages/Admin/EliminarMateria";

import TeacherClasses from "./pages/Teacher/TeacherClasses";
import StudentClasses from "./pages/Students/StudentClasses";

import React from "react";

import {
  IonApp,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import StudentGrades from "./pages/Students/StudentGrades";
import TeacherGrades from "./pages/Teacher/TeacherGrades";
import TeacherClass from "./pages/Teacher/TeacherClass";
import TeacherAgregarNota from "./pages/Teacher/TeacherAgregarNota";
import TeacherEditGrades from "./pages/Teacher/TeacherEditGrade";
import MateriaContextProvider from "./Data/MateriaContextProvider";

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
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
      <ApolloProvider client={client}>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <MateriaContextProvider>
              <IonRouterOutlet id="main">
                <Redirect from="/" to="/page/PersonalStudentData" exact />
                <Route
                  path="/page/PersonalStudentData"
                  component={Students}
                  exact
                />
                <Route
                  path="/page/PersonalTeacherData"
                  component={Teacher}
                  exact
                />
                <Route
                  path="/page/MateriaManager"
                  component={MateriaManager}
                  exact
                />
                <Route
                  path="/page/ContenidoMateria"
                  component={ContenidoMateria}
                  exact
                />
                <Route
                  path="/page/EditarMateria"
                  component={EditarMateria}
                  exact
                />
                <Route
                  path="/page/EliminarMateria"
                  component={EliminarMateria}
                  exact
                />


                <Route
                  path="/page/ClasesProfesor"
                  component={TeacherClasses}
                  exact
                />
                <Route
                  path="/page/ClasesEstudiante"
                  component={StudentClasses}
                  exact
                />
                <Route path="/Studentgrades" component={StudentGrades} exact />
                <Route path="/TeacherGrades" component={TeacherGrades} exact />
                <Route path="/TeacherCourse" component={TeacherClass} exact />
                <Route
                  path="/Agregarnota"
                  component={TeacherAgregarNota}
                  exact
                />
                <Route path="/Editarnota" component={TeacherEditGrades} exact />

                <Route
                  path="/ClasesProfesor"
                  component={TeacherClasses}
                  exact
                />
                <Route
                  path="/ClasesEstudiante"
                  component={StudentClasses}
                  exact
                />

              </IonRouterOutlet>
            </MateriaContextProvider>
          </IonSplitPane>
        </IonReactRouter>
      </ApolloProvider>
    </IonApp>
  );
};

export { App, ExchangeRates };
