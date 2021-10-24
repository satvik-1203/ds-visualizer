import React from "react";

interface Props {
  content: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(
  ({ content, type, onChange }, ref) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-full">{content}</div>
        <input
          onChange={onChange}
          ref={ref}
          type={type || "number"}
          name=""
          id=""
          className="h-9 w-full rounded outline-none px-2 focus:border-primary border-2"
        />
      </div>
    );
  }
);

export default Input;
