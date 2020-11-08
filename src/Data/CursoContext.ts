import React from 'react';

export interface Curso{
    id: string;
}

export interface CursoContextModel {
    curso: Curso;
    changeCurso: (id: string) => void;
}

const CursoContext = React.createContext<CursoContextModel>({
    curso: {id:""},
    changeCurso: () => {},
});

export default CursoContext;