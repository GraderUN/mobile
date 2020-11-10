import {
    IonButton,
    IonCol,
    IonContent,
    IonHeader, IonIcon, IonInput,
    IonItem, IonLabel,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import {personCircle} from "ionicons/icons";

const Login: React.FC = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonRow>
                    <IonCol>
                        <IonIcon
                            style={{ fontSize: "70px", color: "#0040ff" }}
                            icon={personCircle}
                        />
                    </IonCol>
                </IonRow>
            </IonContent>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating"> Email</IonLabel>
                            <IonInput
                                type="email"
                            >
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Password</IonLabel>
                            <IonInput
                                type="password"
                            >
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonContent>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <p style={{ fontSize: "small" }}>
                            By clicking LOGIN you agree to our <a href="#">Policy</a>
                        </p>
                        <IonButton expand="block" >
                        Login
                    </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;
