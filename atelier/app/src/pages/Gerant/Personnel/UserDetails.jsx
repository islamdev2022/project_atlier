import Afficher from "../Afficher"
import { useState } from "react"
const UserDetails = ({id}) => {
   const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedRowCount, setSelectedRowCount] = useState(0)
  const [retour,setRetour] = useState({active : false})

  // Add state to track the selected row and its ID
 

  

  
  // Define a callback function to update the selected row ID
  const handleRowSelection = (id ,count) => {
    setSelectedRowId(id);
    setSelectedRowCount(count);
  };
const retourGP =() =>{
    setRetour({active:true})
} 
if (retour.active){
    return (
    <Afficher choice="Personnel" onRowSelect={handleRowSelection} exitretour={() => setRetour({ active: false })}></Afficher>
)
}
  //here a function from backend using sql query to find the person with the id then put the details in constants

    return (
      <>
        <p className="text-2xl text-green font-bold relative top-3 text-center">
          Information Personnel
        </p>
        <div className="text-slate-500 font-bold flex p-4 h-[26rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] text-md sl:text-xl bg-white rounded-lg justify-around mt-10 ">
          <div className="flex flex-col gap-4 sl:gap-10 al:gap-12 lg:gap-20 2lg:gap-24 w-1/3 p-6 ">
            <div className="flex flex-col justify-start">
              <p className="items-start">Nom</p>
              <p className=" pt-4">{id} nom</p>
            </div>

            <div>
              <p>ID</p>
              <p className=" pt-4">{id.nom} nom</p>
            </div>

            <div>
              <p >Specialite</p>
              <p className=" pt-4">{id.nom} nom</p>
            </div>
          </div>
          <hr className="h-full w-[1px] bg-slate-400" />

          <div className="flex flex-col gap-20 w-1/3 p-6 ">
          <div>
              <p>Prenom</p>
              <p className=" pt-4">{id.nom} nom</p>
            </div>
            <div>
              <p>Mot De Pass</p>
              <p className="pt-4">{id.nom} nom</p>
            </div>
          </div>
        </div>
        <button className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white" onClick={retourGP}>Retour</button>

      </>
    );
}
 
export default UserDetails;
