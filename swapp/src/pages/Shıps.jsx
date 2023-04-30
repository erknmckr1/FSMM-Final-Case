import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import Loading from "../ui/Loading";
import imageData from "../image.json";

function Shıps() {
  const { ships, searchValue, status } = useSelector((state) => state.shıps);

 
  const getImage = (name) =>{
    const filteredImage = imageData.find((img)=>img.name === name)
    return filteredImage.img
  }

  // datayı ınputa gırdıgımız karakterlere göre filtrelelim.
  const filteredShıp = ships.filter((ship) =>
    ship.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  return (
    <div className="w-full  h-full  overflow-y-scroll">
      {/* page paginatıon sstart */}
      <PaginationBar />
      {/* page paginatıon end */}

      {/* Shıps Listing... */}

      <div className="container mx-auto  flex justify-center items-center  ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3   ">
          {/* shıps cards start  */}
          {status === "succeeded" ? (
            filteredShıp.map((ship, index) => (
              <div
                key={index}
                className="w-[300px] h-[400px] bg-secondary  mt-5 rounded-3xl"
              >
                {/* img */}
                <div className="flex justify-center">
                  <img
                    className="w-[250px] h-[200px] mt-3 rounded-3xl"
                    src={getImage(ship.name)}
                    alt="asds"
                  />
                </div>
                {/* img */}
                {/* card body */}
                <div className="text-black flex items-center flex-col h-[170px] justify-evenly ">
                  <p className="font-bold text-[20px] text-[#A1C6D8]">
                    {ship.name}
                  </p>
                  <div className="w-full flex justify-between px-3">
                    <span className="w-[60px] font-bold text-[#DECDCE]">
                      Model:
                    </span>
                    <span className="w-[240px]">{ship.model}</span>
                  </div>
                  <div className="flex justify-start w-full px-3">
                    <span className="font-bold text-[#DECDCE]">
                      Hyperdrive Rating:{" "}
                    </span>
                    <span>{ship.hyperdrive_rating}</span>
                  </div>
                  <NavLink to={`/ship/${ship.name}`}>
                    <Button className="py-3" variant="outlined">
                      Detail
                    </Button>
                  </NavLink>
                </div>
                {/* card body */}
              </div>
            ))
          ) : (
            <Loading />
          )}
          {/*ship cards end */}
        </div>
      </div>
    </div>
  );
}

export default Shıps;
