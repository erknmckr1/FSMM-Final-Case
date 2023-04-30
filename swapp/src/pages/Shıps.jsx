import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { fetchSWshıps } from "../redux/services";
import Loading from "../ui/Loading";
import imageData from "../image.json";
import Search from "../ui/Search";
import { useDispatch } from "react-redux";

function Shıps() {
  const dispatch = useDispatch();
  const { ships, searchValue, status, totalCount } = useSelector(
    (state) => state.shıps
  );
 
  //  ilgili geminin görselini almak için getImage ısımlı bır fonksıyon olusturduk ve olusturdugumuz ımage json dosyası içinde fonksıyona gemının ısmını yollayıp dosya içinde arama yaptık eşleşen elemanın ımage'ini aldık.
  const getImage = (name) => {
    const filteredImage = imageData.find((img) => img.name === name);
    return filteredImage.img;
  };
  const [page, setPage] = useState(1);
  console.log({page:page,totalCount:totalCount,ships:ships})

  // max sayfa sayısını alalım 
  let totalPages = Math.ceil(totalCount / 10);
  
  // load More butonu  ıcın gereklı fonksıyon
  const loadMore = () => {
    if (totalPages > page) {
      setPage((prev) => prev + 1);
      dispatch(fetchSWshıps({ page: page + 1 }));
    }
  };

  // sayfa acılısında eger gemileri tuttugumuz dızı bos ise page i 1 olarak yollayacak.
  useEffect(() => {
    if(!ships.length > 0) {
      dispatch(fetchSWshıps({ page: 1 }));
    }
  }, [dispatch, page, ships.length]);

  // datayı ınputa gırdıgımız karakterlere göre filtrelelim.
  const filteredShıp = ships.filter((ship) =>
    ship.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="w-full  h-full  overflow-y-scroll">
      {/* page paginatıon sstart */}
      <Search />
      {/* page paginatıon end */}

      {/* Shıps Listing... */}

      <div className="container mx-auto  flex justify-center items-center flex-col  ">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3   ">
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
            <div>
              <Loading />
            </div>
          )}
          {/*ship cards end */}
        </div>
        {/* load more btn */}
        {status=== "succeeded" ?  <div className="w-full flex justify-center items-center mt-3  ">
          <button
            onClick={loadMore}
            className="h-[40px] w-[200px] rounded-3xl bg-secondary text-black"
          >
            Load More...
          </button>
        </div> : "null"}
      </div>
    </div>
  );
}

export default Shıps;
