import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color: string;
}

const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <>
      <div className="container d-flex justify-content-end">
        <button className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
