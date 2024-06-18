export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>this is some real shit</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>footer</h2>}</div>
      </div>
    </div>
  );
}
