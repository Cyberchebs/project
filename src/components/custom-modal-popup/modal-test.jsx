import Modal from "./modal";
import { useState } from "react";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}> open modal popups</button>
      {showModalPopup && (
        <Modal onClose={onClose} body={<div>customized body</div>} />
      )}
    </div>
  );
}
