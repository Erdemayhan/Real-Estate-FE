import React from "react";

function InputField({
  type,
  label,
  id,
  changeFunction,
  classname,
  placeholder,
}) {
  return (
    <div className={`${classname} form-floating`}>
      <input
        type={type}
        className="form-control"
        id={id}
        onChange={(e) => {
          changeFunction(e);
        }}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputField;
