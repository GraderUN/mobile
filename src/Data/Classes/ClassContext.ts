import React from 'react';

export interface Clase{
    id: string;
}

export interface ClassContextModel {
    clase: Clase;
    changeClass: (id: string) => void;
}

const ClassContext = React.createContext<ClassContextModel>({
    clase: {id:""},
    changeClass: () => {},
});

export default ClassContext;