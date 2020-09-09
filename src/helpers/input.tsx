import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  error?: string;
  active_label: boolean;
  label: string;
};
const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  error,
  active_label,
  className = "validate",
  id,
  ...props
}) => {
  return (
    <div className="row">
      {active_label || placeholder ? (
        <div className="input-field col s12">
          <input {...props} />
        </div>
      ) : (
        <div className="input-field col s12">
          <input {...props} />
        </div>
      )}
      <label htmlFor={id} className={`${active_label && "active"} left`}>
        {label}
      </label>

      {error && <span className="helper-text text-danger">{error}</span>}
    </div>
  );
};

export default Input;
