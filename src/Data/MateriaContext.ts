import React from 'react';

export interface Materia{
    id: number;
    name: string;
    grade: number;
    content: string;
}

export interface MateriaContextModel {
    materia: Materia;
    addMateria: (id: number, name:string, grade: number, content: string) => void;
}

const MateriasContext = React.createContext<MateriaContextModel>({
    materia: {id: 0, name:"", grade:0, content:"Sin contenido"},
    addMateria: () => {},
});

export default MateriasContext;