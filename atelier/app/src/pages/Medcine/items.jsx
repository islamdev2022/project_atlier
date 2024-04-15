import { useState } from "react";
const Items = ({option,id,nom,ND,NU}) => {

const [SMessage,setSMessage]=useState(false)

function signalItem() {
    // Signal logic here
    setSMessage(true);
    console.log(id)
    // You might want to propagate this change up to the parent component
    // if it needs to be aware of the signal state.
}
    return ( 
    <div className="w-52 py-2 h-56 lg:h-72 bg-white rounded-xl text-center">
        <div className="flex flex-col  items-center w-full">
            <div className="py-2">
                <img src="assets/compte.png" alt="test" className="w-10 table mx-auto"/>
                <p>{nom}</p>
            </div>
            <hr className="text-slate-500 w-full "/>
        {option ==="p" && <>
        <div className="py-2 lg:py-6">
                <p>Disponible</p>
                <p>{ND}</p>
            </div>
            
            <hr className="text-slate-500 w-full "/>
            <div className="py-4">
                <p>Utilisee</p>
                <p>{NU}</p>
            </div>
        </>}
        {option ==="declarer" && 
        <>
        <div className="py-2 font-semibold">
                <p>Produit Utiliser <br /> par jour</p>
                <br />
                <input type="number" name="" id="" className="border w-36 text-center"/>
            </div>
        </>
        }
        {option ==="signaler" && !SMessage &&
        <>
        <div className="py-2 font-semibold">
           
                <p>Nombre Disponible</p>
                <p className=" text-2xl">{ND}</p>
            </div>
             <br />
           <button className=" bg-green-cyan text-white rounded-lg px-3 font-semibold" onClick ={signalItem}>Signaler</button>
        </>
        }
        {SMessage && 
        <div className="flex h-28 items-center">
            <p className="font-semibold">Commande envoyée !</p>        
        </div>
        }
        </div>
    </div> );
}
 
export default Items;
