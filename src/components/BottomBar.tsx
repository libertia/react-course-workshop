import { useNavigate } from "react-router-dom";

interface props {
  current: string;
}

function BottomBar({ current }: props) {
  const navigate = useNavigate();
  const onNavHandler = (endpoint: string) => {
    navigate(endpoint);
  };

  const navList = [
    { label: "Home", endPoint: "/home",  ref: "home" },
    { label: "Second", endPoint: "/second", ref: "second" },
  ];

  return (
    <div className="bottom-bar">
      {navList?.map((item: any, index: number) => {
        return (
          <button
            key={"bottom-nav-item-" + index}
            onClick={() => onNavHandler(item.endPoint)}
            className={
              current == item.ref ? "btn-bottom-nav-active" : "btn-bottom-nav"
            }
            type="button"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default BottomBar;
