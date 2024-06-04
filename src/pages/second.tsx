import TopBar from "./../components/TopBar";
import BottomBar from "./../components/BottomBar";

function Second() {
  return (
    <div>
      <TopBar title={"My Second Page"} isCanBack={false} isCanNoti={false} />
      <div className="page-container">
        <div className="page-content">
          <div></div>
        </div>
      </div>
      <BottomBar current={"second"} />
    </div>
  );
}

export default Second;
