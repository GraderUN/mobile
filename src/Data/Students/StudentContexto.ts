import React from 'react';

export interface Student{
    id: number;
}

export interface StudentContextModel {
    student: Student;
    changeStudent: (id: number) => void;
}

const StudentContexto = React.createContext<StudentContextModel>({
    student: {id:0},
    changeStudent: () => {},
});
export default StudentContexto;