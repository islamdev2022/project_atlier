import { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { CgDetailsMore } from "react-icons/cg";
import { MdLocalPrintshop } from "react-icons/md";
import AlertModal from "./AlertModal";
import PrelevDetails from "./PrelevDetails";
import Saisir from "./Biologist/Saisir";
const GererPrelev = ({ user }) => {
  const rowData = [
    {
      N: 1,
      idPer: "Nom1",
      idprel: "Pre1",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
    {
      N: 2,
      idPer: "Nom2",
      idprel: "Pre2",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
    {
      N: 3,
      idPer: "Nom3",
      idprel: "Pre3",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
    {
      N: 4,
      idPer: "Nom4",
      idprel: "Pre4",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
    {
      N: 5,
      idPer: "Nom5",
      idprel: "Pre5",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
    {
      N: 6,
      idPer: "Nom6",
      idprel: "Pre6",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
    {
      N: 7,
      idPer: "Nom7",
      idprel: "Pre7",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
    {
      N: 8,
      idPer: "Nom8",
      idprel: "Pre8",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
    {
      N: 9,
      idPer: "Nom9",
      idprel: "Pre9",
      Etat: "Valide",
      TypeAnalyse: "sang",
    },
  ];
  const [isHoveredV, setIsHoveredV] = useState(null);
  const [isHoveredImp, setIsHoveredImp] = useState(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [deleteMode, setdeleteMode] = useState({ active: false, rowId: null });
  const [write, setWrite] = useState({ active: false, rowId: null });
  const [detailsMode, setdetailsMode] = useState({active: false,rowId: null,});

 

  const deleteDetails = (id) => {
    setdeleteMode({ active: true, rowId: id });
  };
  const cancelDelete = () => {
    setdeleteMode({ active: false, rowId: null });
  };

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handleDelete = (id) => {};

  const seeDetails = (id) => {
    setdetailsMode({ active: true, rowId: id });
  };
  const seeDetailsB = (id) => {
    setdetailsMode({ active: true, rowId: id });
  }
  const writeRE=(id)=>{
    setWrite({active:true,rowId:id})}
  
  if(write.active){
    return (
    <Saisir id={write.rowId} 
    exitwriteRE={()=>setWrite({active:false,rowId:null})}
    />
  )
}

  if (detailsMode.active) {
    return (
      <PrelevDetails
        user="biologist"
        id={detailsMode.rowId}
        exitdetailsMode={() => setdetailsMode({ active: false, rowId: null })}
      />
    );
  }

  if (detailsMode.active) {
    return (
      <PrelevDetails
        user="agent"
        id={detailsMode.rowId}
        exitdetailsMode={() => setdetailsMode({ active: false, rowId: null })}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl text-green font-bold relative top-3 ">
        List des Prelevements
      </p>
      <div className="w-full flex mt-10">
        <div className="scrollbar-thumb-rounded-full bg-white h-[25rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full">
          <table className="text-xl bg-gradient-to-t text-slate-600 font-semibold rounded-tl-lg w-full text-center">
            <thead>
              <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg">
                <th className="w-1/12 rounded-tl-lg">#</th>
                <th className="w-1/12">ID Patient</th>
                <th className="w-1/12">ID Prelevement</th>

                <th className="w-2/12">Etat</th>
                <th className="w-2/12">Action</th>
              </tr>
            </thead>
            {user == "agent" && (
              <tbody>
                {rowData.map((row, index) => (
                  <tr
                    key={index}
                    className="h-16 cursor-pointer hover:bg-slate-200 border-y"
                  >
                    <td>
                      <p className="table mx-auto">{row.N}</p>
                    </td>
                    <td>{row.idPer}</td>
                    <td>{row.idprel}</td>

                    <td>{row.Etat}</td>
                    <td>
                      <label
                        htmlFor=""
                        className="flex justify-evenly items-center h-full w-full"
                      >
                        <div>
                          <CgDetailsMore
                            className="cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl "
                            onClick={() => seeDetails(row.N)}
                            onMouseEnter={() => {
                              setIsHoveredV(index);
                            }}
                            onMouseLeave={() => setIsHoveredV(null)}
                            onMouseMove={handleMouseMove}
                          />
                          {isHoveredV === index && (
                            <p
                              className="text-sm p-1 rounded bg-slate-100 absolute mt-5 "
                              style={{
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                              }}
                            >
                              Details
                            </p>
                          )}
                        </div>

                        <div>
                          <MdLocalPrintshop
                            className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl"
                            onMouseEnter={() => {
                              setIsHoveredImp(index);
                            }}
                            onMouseLeave={() => setIsHoveredImp(null)}
                            onMouseMove={handleMouseMove}
                          />
                          {isHoveredImp === index && (
                            <p
                              className="text-sm p-1 rounded bg-slate-100 absolute mt-5 "
                              style={{
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                              }}
                            >
                              Imprimer
                            </p>
                          )}
                        </div>
                      </label>
                    </td>
                  </tr>
                ))}
                {deleteMode.active && (
                  <AlertModal
                    option={"Voulez-vous Suprimer cette Prelevement ?"}
                    onContinue={handleDelete(deleteMode.rowId)}
                    onClose={cancelDelete}
                    exitAddMode={() =>
                      setdeleteMode({ active: false, rowId: null })
                    }
                  />
                )}
              </tbody>
            )}
            {user === "biologist" && (
              <tbody>
                {rowData.map((row, index) => (
                  <tr
                    key={index}
                    className="h-16 cursor-pointer hover:bg-slate-200 border-y"
                  >
                    <td>
                      <p className="table mx-auto">{row.N}</p>
                    </td>
                    <td>{row.idPer}</td>
                    <td>{row.idprel}</td>
                    <td>{row.Etat}</td>
                    <td>
                      <label
                        htmlFor=""
                        className="flex justify-evenly items-center h-full w-full"
                      >
                        <div>
                          <CgDetailsMore
                            className="cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl "
                            onClick={() => seeDetailsB(row.N)}
                            onMouseEnter={() => {
                              setIsHoveredV(index);
                            }}
                            onMouseLeave={() => setIsHoveredV(null)}
                            onMouseMove={handleMouseMove}
                          />
                          {isHoveredV === index && (
                            <p
                              className="text-sm p-1 rounded bg-slate-100 absolute mt-5 "
                              style={{
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                              }}
                            >
                              Details
                            </p>
                          )}
                        </div>

                        <div className="rounded-xl hover:bg-slate-300">
                        <TfiWrite 
                            className=" cursor-pointer  size-8 p-1 "
                            onMouseEnter={() => {
                              setIsHoveredImp(index);
                            }}
                            onClick={() => writeRE(row.N)}
                            onMouseLeave={() => setIsHoveredImp(null)}
                            onMouseMove={handleMouseMove}
                          />
                          {isHoveredImp === index && (
                            <p
                              className="text-sm p-1 rounded bg-slate-100 absolute mt-5 "
                              style={{
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                              }}
                            >
                              saisir
                            </p>
                          )}
                        </div>
                      </label>
                    </td>
                  </tr>
                ))}
                {deleteMode.active && (
                  <AlertModal
                    option={"Voulez-vous Suprimer cette Prelevement ?"}
                    onContinue={handleDelete(deleteMode.rowId)}
                    onClose={cancelDelete}
                    exitAddMode={() =>
                      setdeleteMode({ active: false, rowId: null })
                    }
                  />
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
export default GererPrelev;
