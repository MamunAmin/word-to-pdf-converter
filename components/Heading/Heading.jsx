const Heading = () => {
    
    return (
        <div className="flex flex-row items-end justify-center mt-6 ">
            <img src="/word.png" className="h-[90px] w-[75px]"/>
            <h1 className="text-6xl font-radley px-4 pb-1"><span className="text-[#295497]">WORD</span> To <span className="text-[#DD3537]" >PDF</span></h1>
            <img src="/pdf.png" className="h-[85px] w-[75px]"/>
        </div>
    );
};

export default Heading;
