//Imports...
import * as React from 'react';

interface ITextLineProps {
    description?: string;
    id: string;
    name: string;
    value: string;
    type: string;
}

export const TextLine = (props: ITextLineProps): React.ReactElement => {
    return(
        <>
        <label>
    {props?.description}
    <input 
    type={props.type} 
    name={props.name}
    id={props.id}
    value={props.value}
    />
  </label>
        </>
    );
}