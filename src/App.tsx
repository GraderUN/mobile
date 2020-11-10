import React from "react";
/* Default */
import Menu from "./components/Menu";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

/* ADMIN */
import { AgregarSalones } from "./pages/Admin/AgregarSalones";
import { AgregarCursos } from "./pages/Admin/AgregarCursos";
import { AgregarClases } from "./pages/Admin/AgregarClases";
import MateriaManager from "./pages/Admin/MateriaManager";
import ContenidoMateria from "./pages/Admin/ContenidoMateria";
import EditarMateria from "./pages/Admin/EditarMateria";
import EliminarMateria from "./pages/Admin/EliminarMateria";
import InsertarAdministrativo from "./pages/Admin/InsertarAdministrativo";
import VerInfoAdministrativo from "./pages/Admin/VerInfoAdministrativo";
import InsertarEstudiante from "./pages/Admin/InsertarEstudiante";
import InsertarProfesor from "./pages/Admin/InsertarProfesor";
import EliminarEstudiante from "./pages/Admin/EliminarEstudiante";
import EliminarProfesor from "./pages/Admin/EliminarProfesor";
import ModificarEstudiante from "./pages/Admin/ModificarEstudiante";
import ModificarProfesor from "./pages/Admin/ModificarProfesor";
import GestionUsuarios from "./pages/Admin/GestionUsuarios";
import ModificarAdministrativo from "./pages/Admin/ModificarAdministrativo";
import EliminarAdministrativo from "./pages/Admin/EliminarAdministrativo";
import VerInfoEstudiante from "./pages/Admin/VerInfoEstudiante";
import VerInfoProfesor from "./pages/Admin/VerInfoProfesor";
import AdministrarSalones from "./pages/Admin/AdministrarSalones";

/* Estudiante */
import { Students } from "./pages/Students/StudentPersonalData";
import StudentGrades from "./pages/Students/StudentGrades";
import StudentClasses from "./pages/Students/StudentClasses";

/* Inicio */
import Inicio from "./pages/Startup/Inicio";

/* Profesor */
import { TeacherPersonalData } from "./pages/Teacher/TeacherPersonalData";
import TeacherClasses from "./pages/Teacher/TeacherClasses";
import TeacherGrades from "./pages/Teacher/TeacherGrades";
import TeacherClass from "./pages/Teacher/TeacherClass";
import TeacherAgregarNota from "./pages/Teacher/TeacherAgregarNota";
import TeacherEditGrades from "./pages/Teacher/TeacherEditGrade";

/* Ionic */
import {
  IonApp,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";


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
import "./theme/variables.css";

/* Contexto para variables */
import MateriaContextProvider from "./Data/MateriaContextProvider";
import CursoContextProvider from "./Data/CursoContextProvider";
import Login from "./components/Login";

/*API GATEWAY CONNECTION */
const client = new ApolloClient({
  uri: "http://ec2-3-214-224-154.compute-1.amazonaws.com:5000",
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
              <CursoContextProvider>
                <IonRouterOutlet id="main">
                  <Redirect from="/" to="/page/PersonalStudentData" exact />
                  {/* LOGIN */}

                  <Route
                      path="/page/Login"
                      component={Login}
                      exact
                  />


                  {/* INICIO */}

                  <Route
                      path="/page/Inicio"
                      component={Inicio}
                      exact
                  />

                  {/* Profesor */}

                  <Route
                      path="/Agregarnota"
                      component={TeacherAgregarNota}
                      exact
                  />
                  <Route
                      path="/page/ClasesProfesor"
                      component={TeacherClasses}
                      exact
                  />
                  <Route
                      path="/Editarnota"
                      component={TeacherEditGrades}
                      exact
                  />
                  <Route
                      path="/page/PersonalTeacherData"
                      component={TeacherPersonalData}
                      exact
                  />
                  <Route
                      path="/page/TeacherCourse"
                      component={TeacherClass}
                      exact
                  />
                  <Route
                      path="/TeacherGrades"
                      component={TeacherGrades}
                      exact
                  />

                  {/* Estudiante */}

                  <Route
                      path="/page/ClasesEstudiante"
                      component={StudentClasses}
                      exact
                  />
                  <Route
                      path="/page/Studentgrades"
                      component={StudentGrades}
                      exact
                  />
                  <Route
                      path="/page/PersonalStudentData"
                      component={Students}
                      exact
                  />

                  {/* Administrador */}

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
                      path="/page/AgregarSalones"
                      component={AgregarSalones}
                      exact
                  />
                  <Route
                      path="/page/AgregarCursos"
                      component={AgregarCursos}
                      exact
                  />
                  <Route
                      path="/page/AgregarClases"
                      component={AgregarClases}
                      exact
                  />
                  <Route
                      path="/page/GestionU"
                      component={GestionUsuarios}
                      exact
                  />
                  <Route
                      path="/page/GestionU/RegistrarAdmin"
                      component={InsertarAdministrativo}
                      exact
                  />
                  <Route
                      path="/page/GestionU/RegistrarEstudiante"
                      component={InsertarEstudiante}
                      exact
                  />
                  <Route
                      path="/page/GestionU/RegistrarProfesor"
                      component={InsertarProfesor}
                      exact
                  />
                  <Route
                      path="/page/GestionU/ModificarAdmin"
                      component={ModificarAdministrativo}
                      exact
                  />
                  <Route
                      path="/page/GestionU/ModificarEstudiante"
                      component={ModificarEstudiante}
                      exact
                  />
                  <Route
                      path="/page/GestionU/ModificarProfesor"
                      component={ModificarProfesor}
                      exact
                  />
                  <Route
                      path="/page/GestionU/EliminarAdmin"
                      component={EliminarAdministrativo}
                      exact
                  />
                  <Route
                      path="/page/GestionU/EliminarEstudiante"
                      component={EliminarEstudiante}
                      exact
                  />
                  <Route
                      path="/page/GestionU/EliminarProfesor"
                      component={EliminarProfesor}
                      exact
                  />
                  <Route
                      path="/page/GestionU/VerInfoAdmin"
                      component={VerInfoAdministrativo}
                      exact
                  />
                  <Route
                      path="/page/GestionU/VerInfoEstudiante"
                      component={VerInfoEstudiante}
                      exact
                  />
                  <Route
                      path="/page/GestionU/VerInfoProfesor"
                      component={VerInfoProfesor}
                      exact
                  />
                  <Route
                      path="/page/AgregarSalones"
                      component={AgregarSalones}
                      exact
                  />
                  <Route
                      path="/page/AgregarCursos"
                      component={AgregarCursos}
                      exact
                  />
                  <Route
                      path="/page/AgregarClases"
                      component={AgregarClases}
                      exact
                  />
                  <Route
                      path="/page/AdministrarSalones"
                      component={AdministrarSalones}
                      exact
                  />
                </IonRouterOutlet>
              </CursoContextProvider>
            </MateriaContextProvider>
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
