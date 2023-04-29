
import React, { useEffect, useState } from "react";
import { fetchSWshıps } from "../redux/services";
import { Button,Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
function PaginationBar() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {totalCount } = useSelector((state) => state.shıps);
  
  useEffect(() => {
    dispatch(fetchSWshıps({ page }));
  }, [page, dispatch]);
    // toplam gemi sayısını her sayfada olacak gemı sayısına bolup gelecek ondalıklı sayıyı math.ceil()fonksıyonu ile üst tam sayıya yuvarlayıp toplam sayfa sayısını bulalım.
  let totalPages = Math.ceil(totalCount / 10);
  // next page
  const ıncreasePage = () => {
    if (totalPages > page) {
      setPage((prev) => prev + 1);
    }
  };
  // previous page
  const decreasePage = () => {
    if (page > 1) {
      setPage((prev) => prev + -1);
    }
  };
  // pagination barda tıkaldıgımız degerı yakalayıp page state'ine verdik.
  const handleChangePage = (e,value) =>{
    setPage(value)
  }
  return (
    <div className="w-full  flex justify-center items-center container mx-auto bg-secondary opacity-90 ">
    <div className="w-[500px]  sm:h-[3.5rem] sm:p-0 px-3  flex justify-between items-center   ">
      <Button variant="outlined" color="warning" onClick={decreasePage}>Previos Page</Button>
      <Pagination onChange={handleChangePage}  count={4} color="warning" page={page} />
      <Button variant="outlined" color="warning" onClick={ıncreasePage}>Next Page</Button>
    </div>
  </div>
  )
}

export default PaginationBar