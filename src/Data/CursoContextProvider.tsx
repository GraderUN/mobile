import React, {useState} from 'react';
import CursoContext , { Curso, CursoContextModel } from './CursoContext';

const CursoContextProvider: React.FC = (props) => {

    const initial = {id: "121231231231231231321"};
    const [curso, setCurso] = useState<Curso>(initial);

    const changeCurso= (id: string) => {
        const newCurso: Curso = {
            id
        };
        setCurso(newCurso);
    };

    const cursoContext: CursoContextModel ={
        curso,
        changeCurso,
    };

    return (
        <CursoContext.Provider value={cursoContext}>
            {props.children}
        </CursoContext.Provider>
    );
}

export default CursoContextProvider;
