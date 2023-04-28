import React from 'react'
import PaginationBar from '../components/PaginationBar';




function Shıps() {
  

  
  return (
    //parent div e h-screen dedik (height ekran kadar olacak) taşma yapmaması ıcın asagıdakı divleri header'ın yukseklıgı kadar azalttık.
    <div className="w-full h-[calc(100%-88px)]">
      {/* page buttons start */}
      <PaginationBar/>
      {/* page buttons end */}
      {/* Shıps Listing... */}
    </div>
  );
}

export default Shıps;
