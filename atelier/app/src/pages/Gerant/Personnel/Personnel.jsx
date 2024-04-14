import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Afficher from '../Afficher';
import AM from '../AM';

import Header from '../../Header';
import { IoArrowBackSharp } from "react-icons/io5";
const Personnel = () => {


  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };
    
    const [activeItem, setActiveItem] = useState('item1');

  // Add state to track the selected row and its ID
const [selectedRowId, setSelectedRowId] = useState(null);
const [selectedRowCount, setSelectedRowCount] = useState(0)

// Define a callback function to update the selected row ID
const handleRowSelection = (id ,count) => {
  setSelectedRowId(id);
  setSelectedRowCount(count);
};

  const renderComponent = () => {
    switch (activeItem) {
      case 'item1':
        return <Afficher onRowSelect={handleRowSelection} choice="Personnel"/>
      case 'item2':
        return <AM option="Ajouter" choice="Personnel"/>;
      default:
        return <Afficher></Afficher>;
    }
  };
    return ( 
    <div className="flex bg-gray-light w-fit">
        <div className="w-1/5 bg-gradient-to-t from-green-cyan1 to-green-dark1 h-screen rounded-e-2xl">
       <Link to='/home'> <IoArrowBackSharp className="text-white text-3xl m-2 absolute"/></Link>
             <div className="h-screen">
            <div className=" h-1/4  flex justify-center ">
            <div className="mt-6">
            <img src="assets/compte.png" alt="profile" className="w-28 h-28 "/>
            <h1 className="font-bold text-white text-center">GERANT</h1>
            
            </div>
            </div>
            
       <div className=" h-2/4  flex-col justify-center">
        <hr className='bg-white h-1'/>
        <h1 className='text-2xl font-bold text-white underline pt-3 text-center'>Personnel</h1>
        <ul className="pt-5">
             <li className={`flex items-center w-60 px-3 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
             ${activeItem === 'item1' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item1')}>
            <img src="assets/lanalyse-des-donnees copy.png" alt="afficher" className="w-10"/>
            <h1 className="font-bold text-white text-xl">AFFICHER</h1>
        </li>
        <li className={`flex items-center w-60 px-3 float-right gap-5 py-1 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
        ${activeItem === 'item2' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item2')}>            
        <img src="assets/ajouter-un-utilisateur copy.png" alt="ajouter" className="w-10"/>
            <h1 className="font-bold text-white text-xl">AJOUTER</h1>
        </li>
        
          
        </ul>
       
       </div>
       <hr className='bg-white h-1 w-1/5 absolute'/>
       <div className=" h-1/4 flex justify-center rounded-ee-2xl items-center ">
        <div className=" py-3">
            <img src="assets/logo logiciel.png" alt="logo"  className="w-16 -rotate-45 ml-2 mb-2"/>
            <p className="text-white font-bold">Version 1.0</p>
        </div>
        
       </div>
        </div> 
        </div> 
        <div className="w-2 h-screen ml-2 bg-green-dark1"></div>
        <div className="table h-screen mx-auto">
            <Header choice="personnel" user="gerant"></Header>
            <div className="w-full px-4 pt-4 ">
        {/* Render the active component */}
        {renderComponent()}
      </div>

        </div>
       
       
      
 </div> );
}
 
export default Personnel;