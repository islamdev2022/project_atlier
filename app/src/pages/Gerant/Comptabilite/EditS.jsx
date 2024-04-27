import { useState } from "react";
import GererS from "./GererS";
import { ToastContainer, toast } from 'react-toastify';
const EditS = ({id}) => {
  

const initialState={}
const [formData,setFormData]=useState({
  Nom:'',
  prenom:'',
  id:'',
  mdb:'',
  spec:'',
})
const handleReset = () => {
  setFormData(initialState);
};
// Function to update state on input change
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};
// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  
    console.log('Form data modified:', formData); 
  
  // Log the form data to the console
  // You can also handle form data submission to a server here
};

  // Add state to track the selected row and its ID
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedDetails,setSelectedDetails]= useState(null)
  const [selectedRowCount, setSelectedRowCount] = useState(0)
  
  // Define a callback function to update the selected row ID
  const handleRowSelection = (id ,count) => {
    setSelectedRowId(id);
    setSelectedRowCount(count);
  };

const [retour,setRetour] = useState({active : false})
const retourGP =() =>{
  setRetour({active:true})
} 
if (retour.active){
  return (
  <GererS onRowSelect={handleRowSelection} exitretour={() => setRetour({ active: false })}></GererS>
)
}
    return (
    <div className="flex flex-col  ">
  
  
      <p className="text-2xl text-green font-bold p-3 text-center">Modification de Salaire</p>
    
  <form className="flex mt-4 p-4  h-[25rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] bg-zinc-200 rounded-lg justify-around " onSubmit={handleSubmit} onReset={handleReset}>
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="text" className="flex ">Nom</label>
        <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Nom" name="Nom" value={formData.Nom} onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor="text" className="flex">Id</label>
         <div className="flex">
                <input className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" value={id} disabled/>
                <p className="hidden">{formData.id=id}</p>
            </div>
       </div>
            <div className="flex gap-10 mt-28 al:mt-56 lg:mt-80 2lg:mt-96">
                 <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 hover:shadow-green">Modifier</button> 

            </div>
            

    </div>
    
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="" className="flex">Profession</label>
        <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Profession" name="spec" value={formData.spec} onChange={handleChange}/>
        </div>
    <div>
        <label htmlFor="text" className="flex">Salaire</label>
    <input className="border p-2 mr-2 rounded-md flex justify-start w-4/5" type="number" placeholder="$" name="mdb" value={formData.mdb} onChange={handleChange} />
    </div>
    <div className="flex gap-10 mt-28 al:mt-56 lg:mt-80 2lg:mt-96">
    <button className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 " onClick={retourGP}>Retour</button>
</div>
    </div>
    
  </form>
  <ToastContainer position="Bottom-right"/>
        </div>
);}

export default EditS;