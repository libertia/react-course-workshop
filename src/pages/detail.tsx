import TopBar from "./../components/TopBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dateFormat } from "./../helper/helper";

function Detail() {
  const params = useParams();
  const [data, setData] = useState<any>(undefined);

  useEffect(() => {
    if (params && params?.id) {
      getData(params?.id);
    }
  }, []);

  const getData = async (id: string | number) => {
    axios
      .get(
        `https://665519643c1d3b6029383abe.mockapi.io/api/react/workshop/news/${id}`
      )
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <TopBar title={"Detail"} isCanBack={"/news"} isCanNoti={false} />
      <div className="page-container">
        <div className="page-content">
          {data && (
            <>
              <img src={data?.image} alt="" className="full-width" />
              <div className="text-lg">{data?.title}</div>
              <div className="text-sm pb-md">
                {data?.createBy} at {dateFormat(data?.createdAt)}
              </div>
              <div className="text-lg pb-md">{data?.content}</div>

              <div>
                <div className="text-md">Location</div>
                <div className="text-sm pb-sm">
                  Latitude : {data?.Latitude}, Longitude : {data?.Longitude}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
