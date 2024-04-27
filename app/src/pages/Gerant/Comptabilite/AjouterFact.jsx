import { useState } from "react";
import GereFacture from "./GereFacture";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AjouterFact = () => {
    const [retour, setRetour] = useState({ active: false });
    const returnGererS = () => {
        setRetour({ active: true });
    };
    if (retour.active) {
        return (<GereFacture />);
    }
    return ( 
        <div className="flex flex-col  ">
  
  
        <p className="text-2xl text-green font-bold p-3 text-center">Ajouter un Facture</p>
      
    <form className="flex mt-4 p-4  h-[25rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] bg-zinc-200 rounded-lg justify-around " >
      <div className="flex flex-col gap-10 w-1/3">
          <div>
              <label htmlFor="text" className="flex ">Detail</label>
          <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Nom" name="Nom" />
          </div>
          <div>
              <label htmlFor="" className="flex">Prix (DZD)</label>
          <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Profession" name="spec" />
          </div>
              <div className="flex gap-10 mt-28 al:mt-56 lg:mt-80 2lg:mt-96">
                   <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 hover:shadow-green">Ajouter</button> 
  
              </div>
              
  
      </div>
      
      <div className="flex flex-col justify-between w-1/3">
          
      <div>
          <label htmlFor="text" className="flex">Payer</label>
          <select name="" id="" className=" p-2 px-4 rounded-sm cursor-pointer">
        <option value="oui">Oui</option>
        <option value="no">No</option>
    </select>
      </div>
      <div className="">
      <button className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 hover:shadow-green" onClick={returnGererS}>Retour</button>
  </div>
      </div>
      
    </form>
    <ToastContainer position="Bottom-right"/>
          </div> );
}
 
export default AjouterFact;