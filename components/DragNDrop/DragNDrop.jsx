import { useState } from 'react'

const DragNDrop = () => {

  const [src, setSrc] = useState("btnFile.svg");

  function hello(evnt) {
    let File = evnt.target.files[0];
    const file = new FormData()
    file.append('file', File);
    //const URL = "https://v2.convertapi.com/convert/docx/to/pdf?Secret=5YhXCnqpE2XVFGjR&StoreFile=true"
    //const URL = "http://ec2-18-189-185-84.us-east-2.compute.amazonaws.com:8080/api/pdfConvert"
    const URL = "http://ec2-18-117-168-5.us-east-2.compute.amazonaws.com:8080/api/pdfConvert"
    fetch(URL, {
      method: 'POST',
      body: file
    }).then(
      response => response.formData()
    ).then(
      success => console.log(success, "hiii")
    ).catch(
      error => console.log(error, "jjjjjj")
    );
    /*
 
//fetch('http://ec2-18-189-185-84.us-east-2.compute.amazonaws.com:8080/api/test')
fetch('http://ec2-18-117-168-5.us-east-2.compute.amazonaws.com:8080/api/test')
.then(response => response.json())
.then(
success => console.log(success, "hiii")
).catch(
  error => console.log(error)
  );
  */

  };



  return (
    <div className="flex justify-center mt-9">
      <div className="h-[310px] w-[830px] shadow-boxShadow">
        <div className="flex h-[310px] bg-white">
          <div className=" h-[280px] w-[800px] m-auto bg-white 
            border-dashed border-2 border-[#85A0FF]">
            <img src="/file.svg" className="mx-auto mt-3 bg-white h-24" />
            <p className="font-bold text-center font-K2D mt-4">
              <span className="text-[18px]">drop WORD file here</span><br />or
            </p>
            {/**/}
            <form>
              <label>
                <input type="file" id="myFile" name="filename" onChange={(evnt) => hello(evnt)} className="hidden" />
                <div
                  onMouseOver={() => setSrc("btnFileHover.svg")}
                  onMouseOut={() => setSrc("btnFile.svg")}

                  className="flex flex-row mx-auto mt-4 bg-[#295497] hover:bg-black w-[370px] rounded-full shadow-md hover:shadow-boxShadow cursor-pointer">
                  <img src={src} className="h-12 my-[5px] ml-14" />
                  <p id="aaa" className="font-K2D text-3xl font-bold mt-3 ml-8 text-[#fff]">CHOOSE FILE</p>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragNDrop;