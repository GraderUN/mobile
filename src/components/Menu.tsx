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

const appPages: AppPage[] = [

  {
    title: 'Inicio',
    url: '/page/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Gestion de Estudiantes',
    url: '/page/GestionE',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Gestion de Profesores',
    url: '/page/GestionP',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Gestion de Administrativos',
    url: '/page/GestionA',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Datos personales Estudiante',
    url: '/page/PersonalStudentData',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
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
  },
  {
    title: 'Gestion Materias ADMIN',
    url: '/page/MateriaManager',
    iosIcon: libraryOutline,
    mdIcon: librarySharp
  },
  {
    title: 'Salones ADMIN',
    url: '/page/AdministrarSalones',
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp
  },
  {
    title: 'Cursos ADMIN',
    url: '/page/AgregarCursos',
    iosIcon: libraryOutline,
    mdIcon: librarySharp
  },
  {
    title: 'Clases ADMIN',
    url: '/page/AgregarClases',
    iosIcon: easelOutline,
    mdIcon: easelSharp
  },
  {
    title: 'SOAP 2D',
    url: '/page/Puntajes',
    iosIcon: easelOutline,
    mdIcon: easelSharp
  },
];


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
