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
import { documentOutline, documentSharp, homeOutline, homeSharp,personOutline, personSharp, schoolOutline, schoolSharp,
  trashOutline, trashSharp } from 'ionicons/icons';
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
    title: 'Datos personales',
    url: '/page/Outbox',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Notas',
    url: '/page/Favorites',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  },
  {
    title: 'Solicitudes',
    url: '/page/Favorites',
    iosIcon: documentOutline,
    mdIcon: documentSharp
  },
  {
    title: 'Cerrar sesión',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Gestion de Usuarios',
    url: '/page/GestionU',
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
