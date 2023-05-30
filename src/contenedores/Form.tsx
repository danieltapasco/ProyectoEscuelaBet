import * as React from 'react';
import { TextLine } from '../componentes/TexLine';

const Form = (pros: any): React.ReactElement => {
    return (
        <>
        <TextLine type='text' description='Usuario' id='user' value='variableUsuario' name='nombre de usuario'/>
        <TextLine type='password' description='Contraseña' id='pass' value='variable' name='password'/>
        </>
    );
};

export default Form;