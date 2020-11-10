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
import React, {useRef} from 'react';
import {personCircle} from "ionicons/icons";
import firebase from "firebase";
import firebaseApp from "../firebase/firebaseInit";
import {log} from "util";

const Login: React.FC = () => {

    const myemail = useRef<HTMLIonInputElement>(null);
    const mypass = useRef<HTMLIonInputElement>(null);
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
                                ref={myemail}
                            >
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating"> Password</IonLabel>
                            <IonInput
                                type="password"
                                ref={mypass}
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
                        <IonButton expand="block" onClick={
                            ()=>{
                                firebaseApp.auth().signInWithEmailAndPassword(myemail.current?.value as string,
                                    mypass.current?.value as string).then(user=>{
                                    console.log(user)
                                    firebaseApp.auth().currentUser?.getIdTokenResult()
                                        .then((idTokenResult) => {
                                            // Confirm the user is an Admin.
                                            console.log(idTokenResult.claims)
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }).catch((error)=>{
                                    console.log(error)
                                })


                            }
                        }>
                        Login
                    </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;
