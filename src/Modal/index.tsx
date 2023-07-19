import { ReactElement } from "react";
import "./styles.css";

type ModalProps = {
  title: string;
  body: string;
  image?: string;
  onConfirm: () => void;
  buttonTitle: string;
};
export default function Modal(props: ModalProps): ReactElement {
  const { title, body, image, onConfirm, buttonTitle } = props;
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="body">
          <p>{body}</p>
          {image && <img className="modalImage" src={image} />}
        </div>
        <div className="footer">
          <button onClick={onConfirm}>{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
}
