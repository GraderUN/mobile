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
import {useHistory} from "react-router";

const Login: React.FC = () => {

    const history = useHistory();
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
                            style={{ fontSize: "70px", color: "secondary" }}
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
                                //myemail.current?.value as string
                                //
                                firebaseApp.auth().signInWithEmailAndPassword(myemail.current?.value as string,
                                    mypass.current?.value as string).then(user => {
                                    firebase.auth().currentUser?.getIdTokenResult().then((idTokenResult) => {
                                        let Role = idTokenResult.claims.role
                                        let Token = idTokenResult.token;
                                        sessionStorage.setItem("role" , Role);
                                        sessionStorage.setItem("token" , Token);
                                        history.push("/page/inicio")
                                    }).catch(err => {
                                        console.log(err)
                                    })

                            }).catch(err => {
                                    console.log(err)
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
