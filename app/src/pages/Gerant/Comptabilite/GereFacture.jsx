import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditF from "./EditF";
import AlertModal from "../../AlertModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AjouterF from "./AjouterFact";

const GereFacture = () => {
  const rowData = [
    { N: 1, nom: "Nom1", QRCode: "Pre1", Quantite: "Bio" },
    //Ndd more objects foQRCodeachQuantite
    { N: 2, nom: "Nom2", QRCode: "Pre2", Quantite: "bio" },
    { N: 3, nom: "Nom3", QRCode: "Pre3", Quantite: "med" },
    { N: 4, nom: "Nom4", QRCode: "Pre4", Quantite: "resp" },
    { N: 5, nom: "Nom5", QRCode: "Pre5", Quantite: "inferm" },
    { N: 6, nom: "Nom6", QRCode: "Pre6", Quantite: "bio" },
    { N: 7, nom: "Nom7", QRCode: "Pre7", Quantite: "sdfs" },
    { N: 8, nom: "Nom8", QRCode: "Pre8", Quantite: "xwcw" },
    { N: 9, nom: "Nom9", QRCode: "Pre9", Quantite: "xwcw" },
  ];
  const [isHoveredM,setIsHoveredM] = useState(null)
  const [isHoveredD,setIsHoveredD] = useState(null)
  const [deleteMode, setdeleteMode] = useState({ active: false, rowId: null });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [addMode, setAddMode] = useState(false);

  

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  const handleDelete = (id) => {};

  const deleteDetails = (id)=> {
    setdeleteMode({active:true , rowId:id})
 }
 const cancelDelete=()=>{
  setdeleteMode({active:false, rowId:null})
 }

  const handleEdit = (id) => {
    setEditMode({ active: true, rowId: id });
  };
  const [editMode, setEditMode] = useState({ active: false, rowId: null });
  if (editMode.active) {
    return (
      <EditF
        id={editMode.rowId}
        exitEditMode={() => setEditMode({ active: false, rowId: null })}
      />
    );
  }
  const addfacture = () => {
    setAddMode(true);
  }
  if (addMode){
    return (<AjouterF exitAddMode={() => setAddMode(false)} />)
  }
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl text-green font-bold relative top-3 ">
        List des Factures
      </p>
      <div className="w-full flex flex-col mt-10 gap-6">
        <div className="scrollbar-thumb-rounded-full bg-white  h-[25rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] xl:h-[60rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full ">
          <table className="text-xl bg-gradient-to-t text-slate-600 font-semibold rounded-tl-lg w-full text-center">
            <tbody>
            <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg">
              
            
            <th className=" w-1/12 ">#</th>
                <th className="w-1/5">Details</th>
              <th className="w-1/5">Prix</th>
                <th className="w-1/5">Paye</th>
                <th className="w-1/5">Action</th>
              </tr>

              {rowData.map((row,index) => (
                <tr
                  key={row.id}
                  className="h-16 cursor-pointer hover:bg-slate-200 border-y" 
                 
                >
                 
                  <th>{row.N}</th>
                  <td>{row.nom}</td>
                  <td >{row.QRCode}</td>
                  <td>{row.Quantite}</td>
                  <td>
                    <label className="flex justify-center gap-6 items-center h-full w-full">
                      <FaEdit
                        className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-xl hover:text-blue-600" 
                        onClick={() => handleEdit(row.N)} onMouseEnter={() =>{setIsHoveredM(index)}} 
                        onMouseLeave={() =>setIsHoveredM(null)}
                        onMouseMove={handleMouseMove}/>
                        {isHoveredM===index && (
                    <p
                      className="text-sm p-1 rounded bg-blue-200 text-blue-600 absolute mt-5 " 
                      style={{
                        left: `${mousePosition.x}px`, 
                        top: `${mousePosition.y}px`
                      }}
                    >
                      Modifier
                    </p>
                  )}
                      <MdDelete
                        className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-2xl hover:text-red-600" 
                      onClick={() => deleteDetails(row.N)}
                      onMouseEnter={() =>{setIsHoveredD(index)}} 
                      onMouseLeave={() =>setIsHoveredD(null)}
                      onMouseMove={handleMouseMove}/>
                    {isHoveredD===index && (
                <p
                  className="text-sm p-1 rounded bg-red-200 text-red-600 absolute mt-5 " 
                  style={{
                    left: `${mousePosition.x}px`, 
                    top: `${mousePosition.y}px`
                  }}
                >
                  Suprimer
                </p>
              )} 

                    </label>
                    
                  </td>
                </tr>
              ))}
        {deleteMode.active && ( 
        <AlertModal option={"Voulez-vous Suprimer cette Salaire de employee ?" } 
        onContinue={handleDelete(deleteMode.rowId)} 
        onClose={cancelDelete}  
        exitAddMode={() => setdeleteMode({ active: false, rowId: null })}/>
      )}
              {/* Other table rows */}
            </tbody>
          </table>
         
        </div>
        <div>
        <button className="p-2  bg-green rounded-sm text-white font-bold hover:shadow-green"
        onClick={addfacture}>
            Ajouter un Facture
          </button>
          <ToastContainer position="bottom-right" />
        </div>
         
      </div>
    </div>
  );
};

export default GereFacture;
