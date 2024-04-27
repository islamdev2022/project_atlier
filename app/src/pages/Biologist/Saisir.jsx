import { useState } from "react";
import GererPrelev from "../GererPrelev";
const Saisir = ({id}) => {
  const types = [
    "Complete Blood Count (CBC)",
    "Lipid Profile",
    "Liver Function Tests (LFT)",
    "Thyroid Function Test (TFT)",
    "Blood Glucose Level",
    "Electrolytes Test"
  ];
    const [retour, setRetour] = useState({ active: false });
    const retourBiologist = () => {
        setRetour({ active: true });
      }
      if (retour.active) {
        return <GererPrelev user="biologist" exitretour={() => setRetour({ active: false })}></GererPrelev>;
      }
    return ( <>
    <p className="text-2xl text-green font-bold relative top-3 text-center">
            Saisir Resultat
        </p>
        <form className="flex px-4 h-[29rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] text-md 2lg:text-xl bg-white rounded-lg justify-around mt-10 text-lg">
          <div className="flex flex-col justify-between w-1/2 py-6 ">
            <div className="flex flex-col gap-10">
               <div className="flex justify-start">
              <p className=" text-green font-semibold  items-center flex w-44">ID patient :</p>
              <p>{id}</p> {/*this is the id of the patient*/}
            </div>
            <div className="flex justify-start">
              <p className="  text-green font-semibold  items-center flex w-44">ID Prelevement :</p>
              <p>{id}</p> {/*this is the id of the prelevement*/}
            </div> 
            </div>
            <div className="flex justify-around">
                <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/4 hover:shadow-green">Ajouter</button> 
                <button
                className="p-2 bg-green rounded-sm text-white font-bold w-1/4 hover:shadow-green"
                onClick={retourBiologist}>
                Retour
            </button>
            </div>
           
           
            
             </div>

          <hr className="h-full w-[1px] bg-slate-400" />

          <div className="flex flex-col gap-10 w-1/2 py-6 pl-3 scrollbar-thumb-rounded-full bg-white h-[25rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll ">
          {types.map((type, index) => (
          <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-44">{` (${type})`} </p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green"/>
            </div>

          ))}
            
          </div>
        </form>
    </> );
}
 
export default Saisir;<>

</>