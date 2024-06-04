import TopBar from "./../components/TopBar";
import BottomBar from "./../components/BottomBar";

function Home() {
  const onShowPopup = () => {
    alert("Pop up");
  };

  return (
    <div>
      <TopBar title={"Home"} isCanBack={false} isCanNoti={true} />
      <div className="page-container">
        <div className="page-content">
          <div className="text-lg pb-sm">Hello Home.</div>
          <div>
            <button
              onClick={() => onShowPopup()}
              className="btn-show-pop-up"
              type="button"
            >
              Show Pop-up
            </button>
          </div>
        </div>
      </div>
      <BottomBar current={"home"} />
    </div>
  );
}

export default Home;
