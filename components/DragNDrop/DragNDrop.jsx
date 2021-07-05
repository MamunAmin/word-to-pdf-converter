const DragNDrop = () => {

  return (
    <div className="flex justify-center mt-8">
      <div className="h-[300px] w-7/12 shadow-boxShadow">
        <div className="flex h-[300px] bg-white">
          <div className=" h-[280px] w-11/12 m-auto bg-white 
          border-dashed border-3 border-light-blue-500">
            <img src="/file.svg" className="mx-auto mt-3 bg-white"/>
            <p className="text-center font-K2D">drop WORD file here <br/>or</p>
            <button className="flex flex-row mx-auto mt-3 bg-indigo-800 px-4">
              <img src="btnFile.svg"/>
              <p className="font-K2D">CHOOSE FILE</p>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DragNDrop;