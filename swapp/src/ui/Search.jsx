import React, { useEffect, useState } from "react";

import { getInputValue } from "../redux/shıpSlice";
import { useDispatch } from "react-redux";

function Search() {
    const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  // change ınput functıon
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  //ınput value degıstıkce store tuttugumuz deger guncellenecek.
  useEffect(() => {
    dispatch(getInputValue(inputValue));
  }, [dispatch, inputValue]);
  return (
    <div className="w-full h-[40px]  flex sm:flex-row flex-col justify-center items-center container mx-auto bg-secondary opacity-90 ">
      <div className="w-full sm:w-0 flex justify-center">
        <input
          value={inputValue}
          onChange={handleChangeInput}
          placeholder="search..."
          className="bg-transparent border-b-4 border-[#D14901] px-4 outline-none text-black"
          type="text"
        />
      </div>
    </div>
  )
}

export default Search