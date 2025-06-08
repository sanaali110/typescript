import { JSX } from "react";

interface AlterProps {
  text: string;
}

const Alert = (props: AlterProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    console.log("handle", (e.target as HTMLInputElement).value);
  };

  return (
    <>
      <p>{props.text}</p>
      <button value={"click me"} onClick={handleClick}>
        Click me
      </button>
    </>
  );
};

export default Alert;
