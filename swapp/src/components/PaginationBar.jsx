
import React, { useEffect, useState } from "react";
import { fetchSWshıps } from "../redux/services";
import { Button,Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
function PaginationBar() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { ships, status, totalCount } = useSelector((state) => state.shıps);

  useEffect(() => {
    dispatch(fetchSWshıps({ page }));
  }, [page, dispatch]);
    // toplam sayfa sayısını alalım buna gore önceki ve sonraki sayfaya gıdecegız hata almamak ıcın bır sınır getırmelıyız.
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
  console.log({ status: status, data: ships,page:page });
  return (
    <div className="w-full  flex justify-center items-center container mx-auto">
    <div className="w-[500px]  sm:h-[3.5rem] sm:p-0 px-3 opacity-90  flex justify-between items-center bg-secondary  ">
      <Button variant="outlined" color="warning" onClick={decreasePage}>Previos Page</Button>
      <Pagination onChange={handleChangePage}  count={4} color="warning" page={page} />
      <Button variant="outlined" color="warning" onClick={ıncreasePage}>Next Page</Button>
    </div>
  </div>
  )
}

export default PaginationBar