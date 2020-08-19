import React from "react";

const input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  active_label,
  placeholder,
}) => {
  return (
    <div className="row">
      {active_label || placeholder ? (
        <div className="input-field col s12">
          <input
            id={id}
            type={type}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder ? placeholder : ""}
            className="validate"
          />
        </div>
      ) : (
        <div className="input-field col s12">
          <input
            type={type}
            name={id}
            value={value}
            onChange={onChange}
            className="validate"
          />
        </div>
      )}
      <label htmlFor={id} className={`${active_label && "active"} left`}>
        {label}
      </label>

      {error && <span className="helper-text text-danger">{error}</span>}
    </div>
  );
};
input.defaultProps = {
  type: "text",
  active_label: false,
  error: null,
  placeholder: null,
};
export default input;
