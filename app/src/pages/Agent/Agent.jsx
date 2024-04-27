import { useState } from "react";
import Header from "../Header";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbTestPipe } from "react-icons/tb";
import GererPatient from "./GererPatient";
import PatientDetails from "./PatientDetails";
import GererPrelev from "../GererPrelev";
import FileAttent from "./FileAttent";

const Agent = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };

  const [activeItem, setActiveItem] = useState("item1");

  // Add state to track the selected row and its ID
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [selectedRowCount, setSelectedRowCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(false);

  // Define a callback function to update the selected row ID
  const handleRowSelection = (id, count) => {
    setSelectedRowId(id);
    setSelectedRowCount(count);
  };

  const renderComponent = () => {
    switch (activeItem) {
      case "item1":
        return <GererPatient />;
      case "item2":
        return <FileAttent/>
      case "item3":
        return <PatientDetails option="ajouter" />;
      case "item4":
        return <GererPrelev user="agent" />;
      default:
        return <GererPatient />;
    }
  };
  return (
    <div className="flex bg-gray-light w-full">
      <div className="w-[120px] sl:w-1/4 bg-gradient-to-t from-green-cyan1 to-green-dark1 h-screen rounded-e-2xl">
        <div className="h-screen">
          <div className=" h-1/4  flex justify-center ">
            <div className="flex flex-col justify-center">
              <img
                src="/assets/compte.png"
                alt="profile"
                className="w-28 h-28 "
              />
              <h1 className="font-bold sl:text-xl text-white text-center">Agent</h1>
            </div>
          </div>

          <div className=" h-2/4  flex-col justify-center">
            <hr className="bg-white h-1" />
            <h1 className="text-md sl:text-xl al:text-2xl text-2xl font-bold text-white underline pt-3 text-center">
              Gestion Reseptionist
            </h1>
            <ul className="text-md text-white font-bold sl:text-xl pt-8 flex flex-col float-right w-full al:w-64 2lg:w-full justify-center ">
              <li
                className={`flex items-center 2lg:justify-center px-1 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
             ${activeItem === "item1" ? "bg-green-cyan" : ""}`}
                onClick={() => setActiveItem("item1")}
              >
                <MdOutlinePeopleAlt className="text-white w-10 size-10" />
                <h1>Gerer Patients</h1>
              </li>
              <li
                className={`flex items-center 2lg:justify-center px-1 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
             ${activeItem === "item2" ? "bg-green-cyan" : ""}`}
                onClick={() => setActiveItem("item2")}
              >
                <FaPeopleGroup className="text-white w-10 size-10" />
                <h1>File D'attente</h1>
              </li>
              <li
                className={`flex items-center 2lg:justify-center float-right gap-5 py-1 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
        ${activeItem === "item3" ? "bg-green-cyan" : ""}`}
                onClick={() => setActiveItem("item3")}
              >
                <BsPersonFillAdd className="text-white w-11 size-10" />
                <h1>Ajouter Patient</h1>
              </li>

              <li
                className={`flex items-center 2lg:justify-center px-1  float-right gap-5 py-1 mb-2 hover:bg-green-cyan rounded-s-lg 
           ${activeItem === "item4" ? " bg-green-cyan" : ""} cursor-pointer`}
                onClick={() => {
                  setActiveItem("item4");
                }}
              >
                <TbTestPipe className="text-white w-10 size-11" />
                <h1>Gerer Prelevements</h1>
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
        <Header user="agent"></Header>
        <div className="w-full pt-4 ">
          {/* Render the active component */}
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Agent;
