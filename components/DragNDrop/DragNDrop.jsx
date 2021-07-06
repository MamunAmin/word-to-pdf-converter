import { useState } from 'react'

const DragNDrop = () => {
  
  const [src, setSrc] = useState("btnFile.svg");
  
  return (
    <div className="flex justify-center mt-9">
      <div className="h-[310px] w-[900px] shadow-boxShadow">
        <div className="flex h-[310px] bg-white">
          <div className=" h-[280px] w-[870px] m-auto bg-white 
          border-dashed border-2 border- border-[#85A0FF]">
            <img src="/file.svg" className="mx-auto mt-3 bg-white h-24"/>
            <p className="font-bold text-center font-K2D mt-4">
              <span className="text-[22px]">drop WORD file here</span><br/>or
            </p>
            <button 
              onMouseOver={() => setSrc("btnFileHover.svg")}
              onMouseOut={() => setSrc("btnFile.svg")}
              className="flex flex-row mx-auto mt-4 bg-[#295497] hover:bg-black w-[370px] rounded-full shadow-md hover:shadow-boxShadow">
            <img src = {src} className="h-12 my-[5px] ml-14"/>
            <p className="font-K2D text-3xl font-bold mt-3 ml-8 text-[#fff]">CHOOSE FILE</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragNDrop;