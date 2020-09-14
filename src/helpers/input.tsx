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
    <div className="mx-2">
      <label htmlFor={id}>{label}</label>
      <div className="border border-blue-700 mb-2 w-full">
        <input {...props} />
      </div>
    </div>
  );
};

export default Input;
