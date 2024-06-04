import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";

interface props {
  title: string;
  isCanBack: boolean;
  isCanNoti: boolean;
}

function TopBar({ title, isCanBack, isCanNoti }: props) {
  const navigate = useNavigate();
  const onNavHandler = (endpoint: string) => {
    navigate(endpoint);
  };

  return (
    <div className="top-bar">
      {isCanBack && (
        <button
          onClick={() => onNavHandler("/")}
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
