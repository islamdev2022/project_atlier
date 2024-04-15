import { useState } from "react";
import GererPrelev from "./GererPrelev";
import Resultats from "./Medcine/Resultats";
import Biologist from "./Biologist/Biologist";
const PrelevDetails = ({ id, user }) => {
  //here a function from backend using sql query to find the person with the id then put the details in constants to show his details or edit them or delete
  const [retour, setRetour] = useState({ active: false });
  const retourGP = () => {
    setRetour({ active: true });
  };
  const retourBiologist = () => {
    setRetour({ active: true });
  }
  if (retour.active && user === "biologist") {
    return <GererPrelev user="biologist" exitretour={() => setRetour({ active: false })}></GererPrelev>;
  }

  const retourRE = () => {
    setRetour({ active: true });
  };

  if (retour.active && user === "agent") {
    return (
      <GererPrelev
        exitretour={() => setRetour({ active: false })}
      ></GererPrelev>
    );
  } else if (retour.active && user === "medcine") {
    return (
      <Resultats exitretour={() => setRetour({ active: false })}></Resultats>
    );
  }
  return (
    <>
      <p className="text-2xl text-green font-bold relative top-3 text-center">
        Details de Prelevement
      </p>
      <div className="flex p-4 bg-white h-[29rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] rounded-lg justify-around mt-10 ">
        <div className="flex flex-col gap-4 sl:gap-10 al:gap-12 lg:gap-20 2lg:gap-24 w-1/3 p-6 ">
          <div className="flex flex-col justify-start">
            <p className="  text-slate-500 text-xl items-start">
              ID Prelevement
            </p>
            <p className="font-bold text-xl pt-4">{id} nom</p>
          </div>
          <div>
            <p className="  text-slate-500 text-xl">Date De Test</p>
            <p className="font-bold text-xl pt-4">{id.nom} nom</p>
          </div>  
          <div>
            <p className="  text-slate-500 text-xl">Type</p>
            <p className="font-bold text-xl pt-4">{id} nom</p>
          </div>

          <div>
            <p className="  text-slate-500 text-xl">Type</p>
            <p className="font-bold text-xl pt-4">{id} nom</p>
          </div>
        </div>
        <hr className="h-full w-[1px] bg-slate-400" />

        <div className="flex flex-col gap-4 sl:gap-10 al:gap-12 lg:gap-20 2lg:gap-24 w-1/3 p-6 ">
        <div>
            <p className="  text-slate-500 text-xl">ID Patient</p>
            <p className="font-bold text-xl pt-4">{id} nom</p>
          </div>
          
          <div>
            <p className="  text-slate-500 text-xl">Type</p>
            <p className="font-bold text-xl pt-4">{id.nom} nom</p>
          </div>
          <div>
            <p className="  text-slate-500 text-xl">Type</p>
            <p className="font-bold text-xl pt-4">{id} nom</p>
          </div>
          <div>
            <p className="  text-slate-500 text-xl">Type</p>
            <p className="font-bold text-xl pt-4">{id.nom} nom</p>
            <button className="float-right absolute right-20 sl:right-40 text-sm hover:cursor-pointer font-semibold text-green">
              Voire Comme PDF
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        {user === "agent" && (
          <button
            className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white"
            onClick={retourGP}
          >
            Retour
          </button>
        )}
        {user === "biologist" && (
          <button
            className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white"
            onClick={retourBiologist}
          >
            Retour
          </button>
        )}
        {user === "medcine" && (
          <>
            <button
              className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white"
              onClick={retourRE}
            >
              Retour
            </button>
            <button className="p-2 px-6 font-semibold mt-4 rounded-lg bg-green-cyan1 text-white">
              Valider
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default PrelevDetails;
