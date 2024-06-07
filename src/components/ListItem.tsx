import { useNavigate } from "react-router-dom";
import { dateFormat } from "./../helper/helper";

interface props {
  data: any;
}

function ListView({ data }: props) {
  const navigate = useNavigate();
  const onClickHandler = (id: string | number) => {
    navigate("/news/" + id);
  };

  return (
    <div onClick={()=>onClickHandler(data?.id)} className="list-item mb-md">
      <div className="row">
        <div className="col-3">
          <img src={data?.image} className="list-img" />
        </div>
        <div className="col-7">
          <div className="text-lg mb-sm">{data?.title}</div>
          <div className="text-md mb-sm">{data?.content}</div>
          <div className="text-sm">{dateFormat(data?.createdAt)}</div>
        </div>
      </div>
    </div>
  );
}

export default ListView;
