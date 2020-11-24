import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonHeader, IonItem, IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, {useContext} from 'react';
import '../Startup/Page.css';
import {gql, useQuery} from "@apollo/client";
import CursoContext from "../../Data/Courses/CursoContext";
import {useHistory} from "react-router";
import StudentContexto from "../../Data/Students/StudentContexto";


const COURSE = gql`
    query($id: String!){
        courseById(id : $id){
        grade,
        letter,
        id_students
        }
    }     
`;

//let curso = "5f8f875e306ee1e29983bef4";



const TeacherClass: React.FC = () => {

    const history = useHistory();
    const cursoCtxt = useContext(CursoContext);

    function TraerEncabezado() {
        const { loading, error, data } = useQuery(COURSE, {variables: cursoCtxt.curso});

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

        const studentCtx = useContext(StudentContexto);
        const { loading, error, data } = useQuery(COURSE , {variables: cursoCtxt.curso});

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.courseById.id_students.map((id_students) => (
            <IonCard>
                <IonCardHeader>{id_students}</IonCardHeader>
                <IonCardContent>
                    <IonButton onClick={() => {
                        studentCtx.changeStudent(id_students)
                        history.push("/page/TeacherGrades");
                    }}>
                        ver notas
                    </IonButton>

                    <IonButton onClick={() => {
                        studentCtx.changeStudent(id_students)
                        history.push("/page/Agregarnota")}}>
                        Agregar Nota
                    </IonButton>
                </IonCardContent>
            </IonCard>

        ));
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/page/ClasesProfesor" />
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
