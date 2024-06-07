import TopBar from "./../components/TopBar";
import ListView from "./../components/ListView";
import axios from "axios";
import { useEffect, useState } from "react";
import { LongdoMap, map, longdo } from "./../libs/LongdoMap/LongdoMap";

const mapKey = "7ec9ff65800bbe92497f19924f235e5c";

function Map() {
  const [location, setLocation] = useState<any>(undefined);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        let loc = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setLocation(loc);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  };

  const initMap = () => {
    map?.Layers.setBase(longdo.Layers.GRAY);

    //Register Event Listenner
    //https://map.longdo.com/docs/javascript/events/mapevents

    map?.Event.bind("drop", async function () {
      var location = map.location();
      console.log(location);
    });

    map?.Event.bind("overlayClick", function (overlay: any) {
      console.log(overlay);
    });
  };

  return (
    <div>
      <TopBar title={"Map"} isCanBack={true} isCanNoti={false} />
      <div className="page-container">
        <div className="page-content full-height">
          <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
        </div>
      </div>
    </div>
  );
}

export default Map;
