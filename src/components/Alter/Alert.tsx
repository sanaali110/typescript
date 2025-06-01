import { JSX } from "react";

interface AlterProps {
  text: string;
}

const Alert = (props: AlterProps): JSX.Element => {
  return <p>{props.text}</p>;
};

export default Alert;
