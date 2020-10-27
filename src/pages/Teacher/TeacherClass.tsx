import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonHeader, IonItem, IonLabel,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import '../Startup/Page.css';
import {gql, useQuery} from "@apollo/client";


const COURSE = gql`
    query($id: String!){
        courseById(id : $id){
        grade,
        letter,
        id_students
        }
    }     
`;

let curso = "5f8f875e306ee1e29983bef4";

function TraerEncabezado() {
    const { loading, error, data } = useQuery(COURSE, {variables: {id: curso}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <IonItem color="secondary">
            <IonLabel>
                {data.courseById.grade}{data.courseById.letter}
            </IonLabel>
        </IonItem>
    )
}
function Traerdatos() {
    const { loading, error, data } = useQuery(COURSE , {variables: {id: curso}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.courseById.id_students.map((id_students) => (
        <IonCard>
                <IonCardHeader>{id_students}</IonCardHeader>
            <IonCardContent>
                <IonButton href="/page/TeacherGrades">
                    ver notas
                </IonButton>

                <IonButton href="/page/Agregarnota">
                    Agregar Nota
                </IonButton>
            </IonCardContent>
        </IonCard>

    ));
}


const TeacherClass: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Estudiantes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <TraerEncabezado/>
                <Traerdatos/>
            </IonContent>

        </IonPage>
    );
};

export default TeacherClass;
