import { useState } from "react";
import Header from "../Header";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { TbTestPipe } from "react-icons/tb";
import GererPrelev from "../GererPrelev";
const Biologist = () => {
  const [showAlert, setShowAlert] = useState(false);
  

  const handleClose = () => {
    setShowAlert(false);
  };

  const [activeItem, setActiveItem] = useState("item1");

  // Add state to track the selected row and its ID
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedRowCount, setSelectedRowCount] = useState(0);

  // Define a callback function to update the selected row ID
  const handleRowSelection = (id, count) => {
    setSelectedRowId(id);
    setSelectedRowCount(count);
  };

  const renderComponent = () => {
    switch (activeItem) {
      case "item1":
        return <GererPrelev user="biologist" />;

      default:
        return <GererPrelev user="biologist" />;
    }
  };
  return (
    <div className="flex bg-gray-light w-full">
      <div className="w-[120px] sl:w-1/4 bg-gradient-to-t from-green-cyan1 to-green-dark1 h-screen rounded-e-2xl">
        <div className="h-screen">
          <div className=" h-1/4  flex justify-center ">
            <div className="flex flex-col justify-center">
              <img
                src="assets/compte.png"
                alt="profile"
                className="w-28 h-28 "
              />
              <h1 className="font-bold text-white text-center">Biologist</h1>
            </div>
          </div>

          <div className=" h-2/4  flex-col justify-center">
            <hr className="bg-white h-1" />
            <h1 className="text-md sl:text-xl al:text-2xl text-2xl font-bold text-white underline pt-3 text-center">
              Gestion Prelevement
            </h1>
            <ul className="text-md sl:text-xl pt-8 flex flex-col float-right w-full al:w-64 2lg:w-full justify-center ">
              <li
                className={`flex items-center 2lg:justify-center px-1 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
             ${activeItem === "item1" ? "bg-green-cyan" : ""}`}
                onClick={() => setActiveItem("item1")}
              >
                <TbTestPipe className="text-white w-10 size-10" />
                <h1 className="font-bold text-white ">Gere Prelevement</h1>
              </li>
            </ul>
          </div>

          <div className=" h-1/4 flex flex-col justify-center rounded-ee-2xl items-center ">
            <hr className="bg-white h-1 w-full relative bottom-8 " />
            <div className=" py-3">
              <img
                src="/assets/logo logiciel.png"
                alt="logo"
                className="w-16 -rotate-45 ml-2 mb-2"
              />
              <p className="text-white font-bold">Version 1.0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2 h-screen ml-2 bg-green-dark1"></div>
      <div className="table h-screen mx-auto w-full px-12">
        <Header user="biologist"></Header>
        <div className="w-full pt-4 ">
          {/* Render the active component */}
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Biologist;
