import type { ReactNode } from "react";

interface Message {
  children: ReactNode;
}

const Alert = ({ children }: Message) => {
  return (
    <div
      className="alert alert-primary alert-dismissable fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
