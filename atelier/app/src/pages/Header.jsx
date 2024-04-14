import { useState } from "react";
import AlertModal from "./AlertModal";
import { IoIosSearch } from "react-icons/io";

const Header = ({user ,choice}) => {//possible an attribute to define where the header is used for search option
    const [searchTerm, setSearchTerm] = useState('');
    const [isHovered, setIsHovered] = useState(false);

        const handleSearchP = (e) => {
    e.preventDefault();
    // Handle the search logic for personnel here (personel data base table)
    console.log("this is for the 'personnel' search ",searchTerm);
  };
     
    const handleSearchS = (e) => {
        e.preventDefault();
        // Handle the search logic for personnel here (personel data base table)
        console.log("this is for the 'stock' search",searchTerm);
      };

      const handleSearchC = (e) => {
        e.preventDefault();
        // Handle the search logic for personnel here (personel data base table)
        console.log("this is for the comptabilite search : ",searchTerm);
      };

      const handleSearchMedcin = (e) => {
        e.preventDefault();
        console.log("this is for the doctor search", searchTerm)
      }

      const handleSearchAgent = (e) => {
        e.preventDefault();
        console.log("this is for the agent search", searchTerm)
      }
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleContinue = () => {
    // Add logic to proceed with the action
    
  };


    return (  <div className={`flex h-fit mt-10 ml-4 items-center  ${choice==="stock" || choice==="comptabilite"? 'gap-[225px]' : 'gap-[112px]'} w-fit`}>
    <h1 className="text-3xl font-bold text-white bg-green-dark1 p-1 h-fit rounded-sm px-3 ">Laboratoire</h1>
    <form className="h-10 flex gap-1">
      {choice === "personnel" && <> <select required className="rounded-s-md font-semibold text-green outline-none">
        <option value="biologist">Biologist</option>
        <option value="infermier">Infermier</option>
        <option value="recepcionist">Respetionist</option>

        </select></>}
    <label htmlFor="username " className={`text-green-dark1 font-bold p-2 bg-white ${choice==="stock" || choice==="comptabilite" ? 'rounded-s-sm' : ''}`}>Rechercher  </label>
    <input required type="text" placeholder="id, nom ... " className="p-4 font-bold rounded-e-md w-96 outline-none" value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}/>
    { choice==="personnel" &&  <IoIosSearch type="submit" className="w-8 h-10 bg-transparent relative right-10 cursor-pointer text-green" onClick={handleSearchP}/>}
    { choice==="stock" && <IoIosSearch type="submit" className="w-8 h-10 bg-transparent relative right-10 cursor-pointer text-green" onClick={handleSearchS}/>}
    { choice==="comptabilite" &&  <IoIosSearch type="submit" className="w-8 h-10 bg-transparent relative right-10 cursor-pointer text-green" onClick={handleSearchC}/>}
    { user==="medcin" &&  <IoIosSearch type="submit" className="w-8 h-10 bg-transparent relative right-10 cursor-pointer text-green" onClick={handleSearchMedcin}/>}
    { user==="agent" &&  <IoIosSearch type="submit" className="w-8 h-10 bg-transparent relative right-10 cursor-pointer text-green" onClick={handleSearchAgent}/>}

    <img src="assets/notification copy (1).png" alt="notification" className='size-8 mt-1 ml-[30px]' />
    <span className="text-xs relative right-4 bg-red-600 text-white font-semibold h-4 w-3 justify-center items-center flex rounded-2xl">1</span>
    <div className="relative">
      <img
        src="assets/parametres-gear copy.png"
        alt="parameter"
        className="ml-2 mt-1 hover:cursor-pointer size-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
       {isHovered && (
        <button
          className="absolute right-0 top-9 bg-green-dark1 text-white px-4 py-2 rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowAlert(true)}
        >
          Deconexion
        </button>
        
      )} {showAlert && <AlertModal option="Voulez-vous Deconnecter ?" onClose={handleClose} onContinue={handleContinue} />}
    </div>

    </form>
    
    </div>  );
}
 
export default Header;

