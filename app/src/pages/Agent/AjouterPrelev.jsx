import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import GererPatient from "./GererPatient";
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
const styles = {
  fadeIn: {
    transition: 'all 0.3s ease-out',
    maxHeight: '500px', // Adjust based on content or set to 'none'
    opacity: 1,
    overflow: 'hidden'
  },
  fadeOut: {
    transition: 'all 0.3s ease-out',
    maxHeight: '0px',
    opacity: 0,
    overflow: 'hidden'
  }
};

const AjouterPrelev = () => {
  const categories = [
    { name: "Blood Tests", types: ["CBC", "Lipid Profile", "Liver Function Test"] },
    { name: "Urine Tests", types: ["Urinalysis", "Urine Protein", "Microalbuminuria"] },
    { name: "Imaging", types: ["X-Ray", "MRI", "CT Scan"] },
    { name: "Urine Tests", types: ["Urinalysis", "Urine Protein", "Microalbuminuria"] },
  ];
  const [openCategory, setOpenCategory] = useState(null);
  const [retour, setRetour] = useState({ active: false });
  const returnGererP = () => {
      setRetour({ active: true });
  };
  if (retour.active) {
      return (<GererPatient />);
  }
  const toggleCategory = index => {
    if (openCategory === index) {
      setOpenCategory(null);  // Collapse if the same category is clicked again
    } else {
      setOpenCategory(index);  // Expand the new category
    }
  };

  return (
    <>
      <p className="text-2xl text-green font-bold relative top-3 text-center">
        Ajouter un Prelevement
      </p>
      <div className="w-full flex flex-col mt-10">
        <div className="bg-white h-[25rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] rounded-l-lg overflow-y-scroll w-full"> 
          <form action="" className="flex flex-col justify-end">
            <div className="flex flex-wrap justify-between py-8">
                
            
            {categories.map((category, index) => (
              <div key={index} className="w-full md:w-1/4 p-2 cursor-pointer">
                <h1 onClick={() => toggleCategory(index)} className="w-full text-center text-xl p-2 text-green font-bold flex items-center justify-around">
                  {category.name}
                  {openCategory === index ? <FiChevronUp /> : <FiChevronDown />}
                </h1>
                <div style={openCategory === index ? styles.fadeIn : styles.fadeOut}>
                  {category.types.map((type, idx) => (
                    <div key={idx} className="pl-12 w-fit">
                      <input type="checkbox" id={type} name={type} className=" cursor-pointer" />
                      <label htmlFor={type} className="ml-2 text-lg cursor-pointer">{type}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
            <div className="pl-4">
          <button className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white">Ajouter Prelevement</button>
        </div>
          </form> 
        </div>
        
        <ToastContainer position="bottom-right"/>
      </div>
      <div className="mt-4">
      <button className=" p-2 bg-green rounded-sm text-white font-bold px-6 hover:shadow-green" onClick={returnGererP}>Retour</button>
  </div>
    </>
  );
};

export default AjouterPrelev;
