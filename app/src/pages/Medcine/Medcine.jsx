import React, { useState } from 'react';
import Resultats from './Resultats';
import Produit from './Produit';
import { GrNotes } from "react-icons/gr";
import { BsMegaphone } from "react-icons/bs";
import { FaDropbox } from "react-icons/fa";
import { GrDocumentTest } from "react-icons/gr";
import Header from '../Header';
import GererTypes from './GererTypes';
const Medcine = () => {


  const [showAlert, setShowAlert] = useState(false);

  // const handleClose = () => {
  //   setShowAlert(false);
  // };
    
    const [activeItem, setActiveItem] = useState('item1');

  // Add state to track the selected row and its ID
// const [selectedRowId, setSelectedRowId] = useState(null);
// const [selectedRowCount, setSelectedRowCount] = useState(0)
const [selectedOption,setSelectedOption] = useState(false)

// Define a callback function to update the selected row ID
// const handleRowSelection = (id ,count) => {
//   setSelectedRowId(id);
//   setSelectedRowCount(count);
// };

  const renderComponent = () => {
    switch (activeItem) {
      case 'item1':
        return <Resultats></Resultats>
      case 'item2':
        return <GererTypes/>
      case 'item3':
        return <Produit option="p"></Produit>
      case 'item4':
        return <Produit option="declarer"/>
      case 'item5':
        return <Produit option="signaler"/>
      default:
        return <Resultats></Resultats>
    }
  };
    return ( 
    <div className="flex bg-gray-light w-full">
        <div className="w-1/4 bg-gradient-to-t from-green-cyan1 to-green-dark1 h-screen rounded-e-2xl">
             <div className="h-screen">
            <div className=" h-1/4  flex justify-center ">
            <div className="flex flex-col justify-center">
            <img src="/assets/compte.png" alt="profile" className="w-28 h-28 "/>
            <h1 className="font-bold text-white text-center">Medcine</h1>
            
            </div>
            </div>
            
       <div className=" h-2/4  flex-col justify-center">
        <hr className='bg-white h-1'/>
        <ul className="pt-8 flex flex-col float-right w-full al:w-64 2lg:w-full justify-center ">
             <li className={`flex items-center 2lg:justify-center px-1 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
             ${activeItem === 'item1' ? 'bg-green-cyan' : ''}`} onClick={() => {setActiveItem('item1') ; setSelectedOption(false)}}>
            <GrNotes className='w-10 text-white size-10' />
            <h1 className="font-bold text-white text-xl">Resultats</h1>
        </li>
        <li className={`flex items-center 2lg:justify-center px-1 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
             ${activeItem === 'item2' ? 'bg-green-cyan' : ''}`} onClick={() => {setActiveItem('item2') ; setSelectedOption(false)}}>
            <GrDocumentTest className='w-10 text-white size-10' />
            <h1 className="font-bold text-white text-xl">Gere Types</h1>
        </li>
        <li className={`flex items-center 2lg:justify-center float-right gap-5 py-1 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
        ${activeItem === 'item3' || activeItem==="item4" || activeItem==="item5" ? 'bg-green-cyan' : ''}`} 
        onClick={() => {setActiveItem("item3"); setSelectedOption(true)} }>            
        <FaDropbox className='w-10 text-white size-10'/>
            <h1 className="font-bold text-white text-xl">Produits</h1>
        </li>
        {
          selectedOption===true && <>
          <li className={`flex items-center al:w-44 2lg:justify-center gap-5 py-1 mb-2 hover:bg-slate-400 hover:cursor-pointer rounded-lg 
        ${activeItem === 'item4' ? 'bg-slate-400' : ''}`} onClick={() => {setActiveItem('item4')}}>            
        <GrNotes className='w-10 text-white size-10'/>
            <h1 className="font-bold text-white text-xl">Declarer</h1>
        </li>
        <li className={`flex items-center al:w-44 2lg:justify-center gap-5 py-1 mb-2 hover:bg-slate-400 hover:cursor-pointer rounded-lg 
        ${activeItem === 'item5' ? 'bg-slate-400' : ''}`} onClick={() => {setActiveItem('item5')}}>                   
        <BsMegaphone className='w-10 text-white size-10'/>
            <h1 className="font-bold text-white text-xl">Signaler</h1>
        </li>
        </>
        }
        
           </ul>
       
       </div>
       
       <div className=" h-1/4 flex flex-col justify-center rounded-ee-2xl items-center ">
       <hr className='bg-white h-1 w-full relative bottom-8 '/>
        <div className=" py-3">
            <img src="/assets/logo logiciel.png" alt="logo"  className="w-16 -rotate-45 ml-2 mb-2"/>
            <p className="text-white font-bold">Version 1.0</p>
        </div>
        
       </div>
        </div> 
        </div> 
        <div className="w-2 h-screen ml-2 bg-green-dark1"></div>
        <div className="table h-screen mx-auto w-full px-12">
            <Header user="medcin"></Header>
        <div className="w-full  pt-4 ">
        {/* Render the active component */}
        {renderComponent()}
      </div>

        </div>
       
       
      
 </div> );
}
 
export default Medcine;
