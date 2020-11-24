import React, {useState} from 'react';

import StudentContexto ,{Student, StudentContextModel} from "./StudentContexto";

const StudentContextoProvider: React.FC = (props) => {

    const initial = {id: 0};
    const [student, setStudent] = useState<Student>(initial);

    const changeStudent=(id: number) => {
        const newStudent: Student = {
            id
        };
        setStudent(newStudent);
    };

    const studentContexto: StudentContextModel ={
        student,
        changeStudent,
    };

    return (
        <StudentContexto.Provider value={studentContexto}>
            {props.children}
        </StudentContexto.Provider>
    );
}

export default StudentContextoProvider;
