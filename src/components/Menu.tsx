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
import { documentAttachOutline, documentAttachSharp, easelOutline, easelSharp, homeOutline, homeSharp,libraryOutline,librarySharp,logOutOutline,logOutSharp,personOutline, personSharp, schoolOutline, schoolSharp, storefrontOutline, storefrontSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/Inbox',
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
    title: 'Datos personales Administrador',
    url: '/page/PersonalAdminData',
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
    title: 'Solicitudes',
    url: '/page/Solicitudes',
    iosIcon: documentAttachOutline,
    mdIcon: documentAttachSharp
  },
  {
    title: 'Salones ADMIN',
    url: '/page/SalonesAdmin',
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp
  },
  {
    title: 'Cursos ADMIN',
    url: '/page/CursosAdmin',
    iosIcon: libraryOutline,
    mdIcon: librarySharp
  },
  {
    title: 'Clases ADMIN',
    url: '/page/ClasesAdmin',
    iosIcon: easelOutline,
    mdIcon: easelSharp
  },
  {
    title: 'Cerrar sesión',
    url: '/page/Trash',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp
  },
  {
    title: 'Insertar Administrativo',
    url: '/page/InsertarAdministrativo',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
];

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
