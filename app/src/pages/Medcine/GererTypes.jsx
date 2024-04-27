import { ToastContainer } from "react-toastify";
const GererTypes = () => {
    return ( 
    <>
    <p className="text-2xl text-green font-bold relative top-3 text-center">
        Ajouter Nouveau Type | Category
        </p>
        <div className="p-4 h-[29rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] xl:h-[60rem] text-md 2lg:text-xl bg-white rounded-lg justify-around mt-10 text-lg">

        
        <div className="flex justify-around">
          <form className="flex flex-col gap-16 w-1/2 py-6 ">
            <div className="flex justify-around">
              <p className=" text-green font-semibold  items-center flex w-28">Nom de Type</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green" placeholder="TCF.."/>
            </div>
            <div className="flex justify-around">
              <p className="  text-green font-semibold  items-center flex w-28">Parametre </p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green" placeholder=""/>
            </div>
            
            <div className="flex justify-around">
              <p className="  text-green font-semibold items-center flex w-28">Prix (DZD)</p>
              <input required type="number" name="" id="" className="rounded-sm bg-slate-100 p-2 outline-green" />
            </div>
            <div className="flex justify-around mt-8 gap-8 al:mt-12 lg:mt-48 2lg:mt-80">
                <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/4 hover:shadow-green">Ajouter Type</button> 
                <button type="reset" className=" p-2 bg-gray-light rounded-sm text-green font-bold w-1/4 hover:shadow-custom-black">Supprimer</button>
         
            </div>
             </form>

          <hr className="h-[27rem] al:h-[30rem] lg:h-[38rem] 2lg:h-[48rem] xl:h-[58rem] w-[1px]  bg-slate-400" />

          <form action="" className="flex flex-col w-1/2 gap-10 py-6">
        <div className="flex justify-evenly">
              <p className=" text-green font-semibold  items-center flex w-28">Categorie</p>
              <input required type="text" className=" rounded-sm bg-slate-100 p-2 outline-green" placeholder="bioch....."/>
            </div>
            <div className="flex justify-around mt-8 gap-8 al:mt-12 lg:mt-48 2lg:mt-80">
            <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 hover:shadow-green">Ajouter Categorie</button> 
            </div>
            
        </form>
          </div>
        </div>
        <toastContainer position="bottom-right" />
        
    </> );
}
 
export default GererTypes;