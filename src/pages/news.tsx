import TopBar from "./../components/TopBar";
import ListView from "./../components/ListView";
import axios from "axios";
import { useEffect, useState } from "react";

function News() {
  let mockData: any = [
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "1",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "2",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "3",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "4",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "5",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "1",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "1",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "2",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "3",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "4",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "5",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "1",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "1",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "2",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "3",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "4",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "5",
    },
    {
      createdAt: "2024-05-28T01:57:40.654Z",
      title: "El Monte",
      content: "similique alias dignissimos",
      createBy: "Darrel Schuster",
      Latitude: "56.6051",
      Longitude: "131.3769",
      image: "https://loremflickr.com/640/480/city",
      id: "1",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get(
        `https://665519643c1d3b6029383abe.mockapi.io/api/react/workshop/news`
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      })
  };

  return (
    <div>
      <TopBar title={"News"} isCanBack={true} isCanNoti={false} />
      <div className="page-container">
        <div className="page-content">
          <div className="text-lg pb-sm">
            <ListView items={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
