import React, {useState} from 'react';
import ClassContext ,{Clase, ClassContextModel} from "./ClassContext";

const ClassContextProvider: React.FC = (props) => {

    const initial = {id: ""};
    const [clase, setClase] = useState<Clase>(initial);

    const changeClass= (id: string) => {
        const newClase: Clase = {
            id
        };
        setClase(newClase);
    };

    const classContext: ClassContextModel ={
        clase,
        changeClass,
    };

    return (
        <ClassContext.Provider value={classContext}>
            {props.children}
        </ClassContext.Provider>
    );
}

export default ClassContextProvider;
