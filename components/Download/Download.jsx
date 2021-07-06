const Download = () => {
    
    return (
        <div className="flex flex-col justify-center mt-5">
            <button className="flex flex-row mx-auto mt-3 bg-indigo-800 px-4">
              <img src="btnPDF.svg"/>
              <p className="font-K2D">Download PDF</p>
            </button>
            <button className="flex flex-row mx-auto mt-3 bg-indigo-800 px-4">
              <img src="btnFile.svg"/>
              <p className="font-K2D">Convert Again</p>
            </button>
        </div>
    );
};

export default Download;