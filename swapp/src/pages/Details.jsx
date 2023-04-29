import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
function Details() {
  const navigate = useNavigate();
  const { ships } = useSelector((state) => state.shıps);
  const { shipname } = useParams();
  const detailShip = ships.find((ship) => ship.name === shipname);
  console.log(detailShip);

  // back functıon 
  // bir önceki sayafaya gitmek ıcın navigate'e -1 parametresi veriyoruz. 
  const handleBack = () =>{
    navigate(-1)
  }
  return (
    <div className="w-full h-full    flex justify-center items-center  sm:mt-0   ">
      <div className="sm:w-3/5 w-[90%]   sm:h-[80%] bg-secondary rounded-3xl opacity-90  border-4 border-white">
        {/* detail header */}
        <div className="flex w-full justify-evenly  items-center pb-3">
          {detailShip && (
            <span className="font-bold underline sm:underline-offset-8 underline-offset-4  sm:text-[30px] font-open">
              Details for {detailShip.name}{" "}
            </span>
          )}
          <div className="flex items-center ">
            <button className="sm:text-[30px] hover:text-[#F2E4E7]" onClick={handleBack}>{<GrLinkPrevious />}</button>
            <span className="text-[10px] ">back</span>
          </div>
        </div>
        {/* detail header end */}

        {/* Shıp Property Start */}
        {detailShip ? (
          <div className="  w-full  flex justify-items flex-col sm:flex-row ">
            <div className="sm:w-1/2 h-full py-6  flex sm:flex-col items-center justify-evenly">
              {/* img */}
              <img
                className="sm:w-[90%] sm:h-1/2 h-[200px] w-[250px] "
                src="/loadingSW.gif"
                alt="img"
              />
            </div>
            {/* img end */}
            <div className="w-full sm:w-1/2 h-full flex-col  py-6 px-3 flex justify-start">
              {/* name */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA] ">Name:</span>
                <span> {detailShip.name}</span>
              </div>
              {/* model */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA] ">Model:</span>
                <span> {detailShip.model}</span>
              </div>
              {/* length */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA]  ">Length:</span>
                <span> {detailShip.length}</span>
              </div>
              {/* starship class */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA]">
                  Starship Class:
                </span>
                <span> {detailShip.starship_class}</span>
              </div>
              {/* crew */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA]">Crew:</span>
                <span> {detailShip.crew}</span>
              </div>
              {/* cargo capacity */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA]">
                  Cargo Capacity:
                </span>
                <span> {detailShip.cargo_capacity}</span>
              </div>
              {/* max speed */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA]">
                  Max Speed:
                </span>
                <span> {detailShip.max_atmosphering_speed} km/h</span>
              </div>
              {/* created */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA]">Created:</span>
                <span> {detailShip.created}</span>
              </div>
              {/* cost */}
              <div className=" w-full flex justify-between items-center ">
                <span className="sm:text-[25px] text-[#08AAAA]">Cost:</span>
                <span> {detailShip.cost_in_credits}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center text-[40px] p-5 text-red-500">No page to display Click here to go to Ships page.</div>
        )}
      </div>
    </div>
  );
}

export default Details;
