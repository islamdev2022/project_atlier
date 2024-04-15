import { useState } from "react";
import GererPrelev from "../GererPrelev";
const Saisir = ({id}) => {

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
        <form className="flex p-4 h-[29rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] text-md 2lg:text-xl bg-white rounded-lg justify-around mt-10 text-lg">
          <div className="flex flex-col gap-10 w-1/2 py-6 ">
            <div className="flex justify-start">
              <p className=" text-green font-semibold  items-center flex w-28">ID patient</p>
              <p>{id}</p> {/*this is the id of the patient*/}
            </div>
            
            <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-28">Type 1 : </p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green"/>
            </div>

            <div className="flex justify-start">
              <p className="  text-green font-semibold items-center flex w-28">Type 2 : </p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green"/>
            </div>
            <div className="flex justify-start ">
              <p className="  text-green font-semibold  items-center flex w-28">Type 3</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green"/>
            </div>
            <div className="flex mt-8 gap-8 al:mt-12 lg:mt-48 2lg:mt-80 xl:mt-96">
                <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/4 hover:shadow-green">Ajouter</button> 
                <button type="reset" className=" p-2 bg-gray-light rounded-sm text-green font-bold w-1/4">Supprimer</button>
         
            </div>
             </div>

          <hr className="h-full w-[1px] bg-slate-400" />

          <div className="flex flex-col gap-10 w-1/2 py-6 pl-3 ">
          <div className="flex justify-start">
              <p className="  text-green font-semibold  items-center flex w-32">ID Prelevement</p>
              <p>{id}</p> {/*this is the id of the prelevement*/}
            </div>
          
            <div className="flex justify-start ">
              <p className="  text-green font-semibold  items-center flex w-44">Type 4</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green"/>
            </div>
            <div className="flex justify-start ">
              <p className="  text-green font-semibold  items-center flex w-44">Type 5</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green"/>
            </div>
            <div className="flex justify-start ">
              <p className="  text-green font-semibold  items-center flex w-44">Type 6</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green"/>
            </div>
            <div className="flex mt-8 gap-8 al:mt-12 lg:mt-48 2lg:mt-80 justify-end">
            <button
                className="p-2 bg-green rounded-sm text-white font-bold w-1/4 hover:shadow-green"
                onClick={retourBiologist}>
                Retour
            </button>
            </div>
            
          </div>
        </form>
    </> );
}
 
export default Saisir;<>

</>