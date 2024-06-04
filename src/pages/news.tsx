import TopBar from "./../components/TopBar";

function News() {
  return (
    <div>
      <TopBar title={"News"} isCanBack={true} isCanNoti={false} />
      <div className="page-container">
        <div className="page-content">
          <div className="text-lg pb-sm">Hello News.</div>
        </div>
      </div>
    </div>
  );
}

export default News;
