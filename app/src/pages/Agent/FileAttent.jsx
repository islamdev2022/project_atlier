import { useState } from "react";
import AlertModal from "../AlertModal";
import PrelevDetails from "../PrelevDetails";
import { CgDetailsMore } from "react-icons/cg";
import { MdLocalPrintshop } from "react-icons/md";
const FileAttent = () => {
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
  
    
    
    
      
    return ( <>
    <div className="flex flex-col items-center">
      <p className="text-2xl text-green font-bold relative top-3 ">
        File Attente
      </p>
      <div className="w-full flex flex-col mt-10">
        <div className="scrollbar-thumb-rounded-full bg-white h-[25rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full">
          <table className="text-xl bg-gradient-to-t text-slate-600 font-semibold rounded-tl-lg w-full text-center">
            <thead>
              <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg">
                <th className="w-1/12 rounded-tl-lg">Order</th>
                <th className="w-1/12">ID Patient</th>
                <th className="w-1/12">ID Prelevement</th>
                <th className="w-1/12">Nom</th>
                <th className="w-1/12">Prenom</th>
                <th className="w-1/12">Etat</th>
              </tr>
            </thead>
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
                     <td>
                     ju
                    </td>
                    <td>jh</td>
                    <td>{row.Etat}</td>
                    
                  </tr>
                ))}
               
              </tbody>
       </table>

                </div>
                <div>
                    <button className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white">Suivant</button>
                </div>
                
            </div>
        </div>
    </> );
}
 
export default FileAttent;