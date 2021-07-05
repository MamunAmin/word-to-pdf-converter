const Heading = () => {
    
    return (
        <div className="flex flex-row items-end justify-center mt-8 ">
            <img src="/word.png" className="h-16 w-14"/>
            <h1 className="text-5xl font-radley px-1"><span className="text-[#295497]">WORD</span> To <span className="text-[#DD3537]" >PDF</span></h1>
            <img src="/pdf.png" className="h-16 w-14"/>
        </div>
    );
};

export default Heading;
