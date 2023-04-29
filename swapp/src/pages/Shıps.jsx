import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
function Shıps() {
  const { ships } = useSelector((state) => state.shıps);

  console.log(ships);

  return (
    //parent div e h-screen dedik (height ekran kadar olacak) taşma yapmaması ıcın asagıdakı divleri header'ın yukseklıgı kadar azalttık. header'a 150 px vermıstık.
    <div className="w-full overflow-y-scroll   text-white" style={{height: "calc(100vh - 150px)"}}>
      {/* Shıps Listing... */}
      <div className="container mx-auto  flex justify-center items-center ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3   ">
          {/* shıps cards start  */}
          {ships &&
            ships.map((ship, index) => (
              <div
                key={index}
                className="w-[300px] h-[400px] bg-secondary  mt-5 rounded-3xl"
              >
                {/* img */}
                <div className="flex justify-center">
                  <img
                    className="w-[250px] h-[200px] mt-3 rounded-3xl"
                    src="/logo.png"
                    alt="asds"
                  />
                </div>
                {/* img */}
                {/* card body */}
                <div className="text-black flex items-center flex-col h-[170px] justify-evenly ">
                  <p className="font-bold text-[20px] text-[#A1C6D8]">{ship.name}</p>
                  <div className="w-full flex justify-between px-3">
                    <span className="w-[60px] font-bold text-[#DECDCE]">Model:</span>
                    <span className="w-[240px]">{ship.model}</span>
                  </div>
                  <div className="flex justify-start w-full px-3">
                    <span className="font-bold text-[#DECDCE]">Hyperdrive Rating: </span>
                    <span>{ship.hyperdrive_rating}</span>
                  </div>
                  <Button className="py-3" variant="outlined">Detail</Button>
                </div>
                {/* card body */}
              </div>
            ))}
            {/*ship cards end */}
        </div>
      </div>
    </div>
  );
}

export default Shıps;
