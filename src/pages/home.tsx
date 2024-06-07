import TopBar from "./../components/TopBar";
import BottomBar from "./../components/BottomBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "./../components/Modal";

function Home() {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };

  const onShowPopup = () => {
    setOpenModal(true);
  };

  const onNavHandler = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <TopBar title={"Home"} isCanBack={false} isCanNoti={true} />
      <Modal message="Hello Pop-up" isOpen={openModal} onClose={onClose} />
      <div className="page-container">
        <div className="page-content">
          <div className="text-lg pb-sm">Hello Home.</div>
          <div className="mb-md">
            <button
              onClick={() => onShowPopup()}
              className="btn-show-pop-up"
              type="button"
            >
              Show Pop-up
            </button>
          </div>
          <div>
            <button
              onClick={() => onNavHandler("/map")}
              className="btn-show-pop-up"
              type="button"
            >
              Show Map
            </button>
          </div>
        </div>
      </div>
      <BottomBar current={"home"} />
    </div>
  );
}

export default Home;
