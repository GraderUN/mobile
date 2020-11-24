import {
  IonButton,
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
  personSharp, refresh,
  schoolOutline,
  schoolSharp,
  storefrontOutline,
  storefrontSharp,
} from 'ionicons/icons';
import './Menu.css';
import {useHistory} from "react-router";
import { RefresherEventDetail } from '@ionic/core';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

var role = "student";

/*------------- Admin ---------------*/
const appAdmin1={
  title: 'Gestion de Estudiantes',
  url: '/page/GestionE',
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
const appAdmin5 ={
  title: 'Gestion de Profesores',
  url: '/page/GestionP',
  iosIcon: homeOutline,
  mdIcon: homeSharp
};
const appAdmin6={
  title: 'Gestion de Administrativos',
  url: '/page/GestionA',
  iosIcon: homeOutline,
  mdIcon: homeSharp
};
/*------------- student ---------------*/
const appStudent1={
  title: 'Datos personales Estudiante',
  url: '/page/PersonalStudentData',
  iosIcon: personOutline,
  mdIcon: personSharp
};
const appStudent2 = {
  title: 'Ver clase ESTUDIANTE',
  url: '/page/ClasesEstudiante',
  iosIcon: schoolOutline,
  mdIcon: schoolSharp
};
/*------------- Teacher ---------------*/
const appTeacher1={
  title: 'Datos personales Profesor',
  url: '/page/PersonalTeacherData',
  iosIcon: personOutline,
  mdIcon: personSharp
}
const appTeacher2={
  title: 'Ver clase PROFESOR',
  url: '/page/ClasesProfesor',
  iosIcon: schoolOutline,
  mdIcon: schoolSharp
}
/*------------- appStart ---------------*/
const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  }
];

/*------------------SOAP*/
const soapPages = {
    title: 'SOAP 2D',
    url: '/page/Puntajes',
    iosIcon: easelOutline,
    mdIcon: easelSharp
  };

switch(role) {
  case 'student': {
    //appPages.concat(appTeacher,appCerrar);
    appPages.push(appStudent1);
    appPages.push(appStudent2);
    appPages.push(soapPages);
    break;
  }
  case 'teacher': {
    appPages.push(appTeacher1);
    appPages.push(appTeacher2);
    appPages.push(soapPages);
    break;
  }
  case 'admin': {
    appPages.push(appAdmin1);
    appPages.push(appAdmin2);
    appPages.push(appAdmin3);
    appPages.push(appAdmin4);
    appPages.push(appAdmin5);
    appPages.push(appAdmin6);
    appPages.push(soapPages);
    break;
  }
  default: {
    break;
  }
}


const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }
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
            <IonItem
                onClick={()=>{
                  history.push('/page/Login')
                  sessionStorage.clear();
                  window.location.reload();
                }} className={location.pathname === '/page/Login' ? 'selected' : ''} routerLink={'/page/Login'} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={logOutOutline} md={logOutSharp} />
              <IonLabel>{'Cerrar sesión'}</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
  );
};

export default Menu;