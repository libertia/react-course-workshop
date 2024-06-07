import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";

interface props {
  title: string;
  isCanBack: string | boolean;
  isCanNoti: boolean;
}

function TopBar({ title, isCanBack, isCanNoti }: props) {
  const navigate = useNavigate();
  const onNavHandler = (endpoint: string | boolean) => {
    if (endpoint == true) {
      navigate("/");
    } else if (endpoint != false) {
      navigate(endpoint);
    }
  };

  return (
    <div className="top-bar">
      {isCanBack && (
        <button
          onClick={() => onNavHandler(isCanBack)}
          className="btn-back"
          type="button"
        >
          <FaAngleLeft />
        </button>
      )}
      {title}
      {isCanNoti && (
        <button
          onClick={() => onNavHandler("/news")}
          className="btn-news"
          type="button"
        >
          <FaBell />
        </button>
      )}
    </div>
  );
}

export default TopBar;
