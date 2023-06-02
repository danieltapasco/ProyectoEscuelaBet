import * as React from "react";

export const TextLine = (props) => {
  return (
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
};
