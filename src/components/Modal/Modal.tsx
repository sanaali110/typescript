import { JSX } from "react";
import "./Modal.css";

type StringType = {
  text: string;
  color: string;
};

type NumberType = {
  text: string;
  color: string;
  value: number;
};

type AllType = StringType | NumberType;

interface ModalProps {
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Modal = ({ handleCancel, children }: ModalProps): JSX.Element => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h2 className="heading">Login</h2>
      </div>
      <div className="modal-body">
        {children}
        <button className="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default Modal;
