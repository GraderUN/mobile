import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  easelOutline,
  easelSharp,
  homeOutline,
  homeSharp,
  libraryOutline,
  librarySharp,
  logOutOutline,
  logOutSharp,
  personOutline,
  personSharp,
  schoolOutline,
  schoolSharp,
  storefrontOutline,
  storefrontSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

var role = "teacher";

/*const appAdmin: AppPage[] = [
  {
    title: 'Gestion de Usuarios',
    url: '/page/GestionU',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Salones ADMIN',
    url: '/page/AdministrarSalones',
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp
  },
  {
    title: 'Cursos ADMIN',
    url: '/page/AdministrarCursos',
    iosIcon: libraryOutline,
    mdIcon: librarySharp
  },
  {
    title: 'Clases ADMIN',
    url: '/page/AdministrarClases',
    iosIcon: easelOutline,
    mdIcon: easelSharp
  }
];*/
/*------------- Admin ---------------*/ 
const appAdmin1= 
  {
    title: 'Gestion de Usuarios',
    url: '/page/GestionU',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  };

  const appAdmin2={
    title: 'Salones ADMIN',
    url: '/page/AdministrarSalones',
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp
  };
  const appAdmin3={
    title: 'Cursos ADMIN',
    url: '/page/AdministrarCursos',
    iosIcon: libraryOutline,
    mdIcon: librarySharp
  };
  const appAdmin4={
    title: 'Clases ADMIN',
    url: '/page/AdministrarClases',
    iosIcon: easelOutline,
    mdIcon: easelSharp
  };
/*------------- student ---------------*/ 
const appStudent={
    title: 'Datos personales Estudiante',
    url: '/page/PersonalStudentData',
    iosIcon: personOutline,
    mdIcon: personSharp
  };
  /*------------- Teacher ---------------*/ 
/*const appTeacher: AppPage[] = [
  {
    title: 'Datos personales Profesor',
    url: '/page/PersonalTeacherData',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Ver clase ESTUDIANTE',
    url: '/page/ClasesEstudiante',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  },
  {
    title: 'Ver clase PROFESOR',
    url: '/page/ClasesProfesor',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  }
];*/
const appTeacher1={
    title: 'Datos personales Profesor',
    url: '/page/PersonalTeacherData',
    iosIcon: personOutline,
    mdIcon: personSharp
  }
  const appTeacher2={
    title: 'Ver clase ESTUDIANTE',
    url: '/page/ClasesEstudiante',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  }
  const appTeacher3={
    title: 'Ver clase PROFESOR',
    url: '/page/ClasesProfesor',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  }
/*------------- signOut ---------------*/ 
const appClose =  {
    title: 'Cerrar sesión',
    url: '/page/Trash',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp
  };
/*------------- appStart ---------------*/ 
const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  }
];

switch(role) { 
  case 'student': { 
    //appPages.concat(appTeacher,appCerrar);
    appPages.push(appStudent);
    appPages.push(appClose);
    break;
  } 
  case 'teacher': {
    appPages.push(appTeacher1); 
    appPages.push(appTeacher2);
    appPages.push(appTeacher3);
    appPages.push(appClose);
     break; 
  } 
  case 'admin': { 
    appPages.push(appAdmin1);
    appPages.push(appAdmin2);
    appPages.push(appAdmin3);
    appPages.push(appAdmin4);
    appPages.push(appClose);
    break; 
 } 
  default: { 
    appPages.push(appClose);
     break; 
  } 
} 


const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Bienvenido</IonListHeader>
          <IonNote>NOMBRE DE ESTUDIANTE</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
}; 

export default Menu;
