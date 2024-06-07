import { useEffect } from "react";

interface Props {
  message: string;
  isOpen: boolean;
  onClose: any;
}

export function Modal({
  message = "",
  isOpen = false,
  onClose = undefined,
}: Props) {
  useEffect(() => {
    if (isOpen) {
      open();
    }
  }, [isOpen]);

  const open = async () => {
    let modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "block";
    }
  };

  const close = async () => {
    let modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span onClick={close} className="close">
          &times;
        </span>
        <div>
          <div className="text-lg text-center p-50">{message}</div>
        </div>

        <div className="grid-2">
          <div className="grid-item">
            <button
              className="btn-close full-width"
              onClick={close}
              type="button"
            >
              Close
            </button>
          </div>
          <div className="grid-item">
            <button
              className="btn-nice full-width"
              onClick={close}
              type="button"
            >
              Nice!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
