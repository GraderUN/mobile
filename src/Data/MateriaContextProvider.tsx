import React, {useState} from 'react';
import MateriasContext, { Materia, MateriaContextModel } from './MateriaContext';

const MateriaContextProvider: React.FC = (props) => {
    
    const initial = {id: 0, name: "", grade:0, content:""};
    const [materia, setMateria] = useState<Materia>(initial);
    
    const addMateria = (id: number, name:string, grade: number, content: string) => {
        const newMateria: Materia = {
            id,
            name,
            grade,
            content
        };        
        setMateria(newMateria);
        
    };  

    const materiaContext: MateriaContextModel ={
        materia,
        addMateria,
    };

    return (
        <MateriasContext.Provider value={materiaContext}>
            {props.children}
        </MateriasContext.Provider>
    );
}

export default MateriaContextProvider;
