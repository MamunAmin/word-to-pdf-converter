import { useState } from 'react'

const Download = () => {
  const [src1, setSrc1] = useState("btnPDF.svg");
  const [src2, setSrc2] = useState("btnFile.svg");
    
    return (
        <div className="flex flex-col justify-center mt-8">
          <hr className="w-9/12 mx-auto border-black opacity-20"/>
          
          <p className="font-amethysta text-center my-3.5 text-[20px] text-[#0040A4] font-medium">Your <span className="text-[#DD3537]">PDF</span> is ready to download</p>
          <hr className="w-9/12 mx-auto border-black opacity-20"/>
            <button 
              onMouseOver={() => setSrc1("btnPDFHover.svg")}
              onMouseOut={() => setSrc1("btnPDF.svg")}
              className="flex flex-row mx-auto mt-20 bg-[#D33033] hover:bg-black w-[370px] rounded-3xl  shadow-md hover:shadow-boxShadow">
            <img src = {src1} className="h-12 w-14 my-[5px] ml-14"/>
            <p className="font-K2D text-3xl font-bold mt-3 ml-8 text-[#fff]">Download PDF</p>
            </button>

            <button 
              onMouseOver={() => setSrc2("btnFileHover.svg")}
              onMouseOut={() => setSrc2("btnFile.svg")}
              className="flex flex-row mx-auto mt-8 bg-[#295497] hover:bg-black w-[370px] rounded-3xl shadow-md hover:shadow-boxShadow">
            <img src = {src2} className="h-12 w-14 my-[5px] ml-14"/>
            <p className="font-K2D text-3xl font-bold mt-3 ml-8 text-[#fff]">Convert Again</p>
            </button>
        </div>
    );
};

export default Download;