import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CalculerR = () => {
  return (
    <div className=" flex flex-col justify-center text-center">
      <p className="text-2xl text-green font-bold p-3 text-center">
        Calculer le Revenu
      </p>
      <form action="" className="flex-col flex gap-10" >
      <table className="rounded-2xl bg-white w-full  h-[25rem] al:h-[32rem] lg:h-[40rem] 2lg:h-[50rem] xl:h-[60rem] border-slate-400">
        <tr className="roundde-2xl">
          <td className="text-2xl text-green font-bold p-5 text-center w-1/3 border-r rounded-2xl">
            La Boit de Paiment
          </td>
          <td className="text-2xl text-green font-bold p-5 text-center w-1/3 border-b">
            Paiment
          </td>
          <td className="text-2xl text-green font-bold p-5 text-center w-1/3 border-l">
            Time Frame
          </td>
        </tr>
        <tr className="">
          <td className=" border-t">
            <div className="flex flex-col items-center gap-10">
              <p className="text-2xl text-green font-semibold p-3">
                Montant Initial
              </p>
              <input
                type="number"
                className="p-3 rounded-xl outline-slate-300 text-center outline"
                placeholder="Saisir le montant initial"
              />
              <br />
              <button className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 hover:shadow-green">
                Valide
              </button>
            </div>
          </td>
          <td className="border-x">
            <div className="flex flex-col items-center gap-6">
              <div className=" ">
                <p className="text-2xl text-green font-semibold p-3">
                  Nombre des tests
                </p>
                <span className=" p-2 px-5 bg-green rounded-sm text-white font-bold w-1/3 ">
                  12
                </span>
              </div>
              <div className="">
                <p className="text-2xl text-green font-semibold p-3">
                  Montant total
                </p>
                <span className=" p-2 px-5 bg-green rounded-sm text-white font-bold w-1/3  ">
                  12
                </span>
              </div>
              <div className="">
                <p className="text-2xl text-green font-semibold p-3">Revenu</p>
                <span className="text-xl ">200</span>
              </div>
            </div>
          </td>

          <td className="border-t  ">
            <div className="flex flex-col items-center gap-10">
              <select
                name=""
                id=""
                className=" bg-slate-200 p-2 px-4 rounded-sm cursor-pointer"
              >
                <option value="">Ajourd'hui</option>
                <option value="">7 jour</option>
                <option value="">14 jour</option>
                <option value="">1 mois</option>
                <option value="">6 mois</option>
                <option value="">1 ans</option>
              </select>

              <div className="">
                {" "}
                <p className="text-2xl text-green font-semibold p-3">
                  Nombre des tests
                </p>
                <span className="   p-2 px-5 bg-green rounded-sm text-white font-bold w-1/3 ">
                  12
                </span>
              </div>
              <div className="">
                <p className="text-2xl text-green font-semibold p-3">
                  Montant total
                </p>
                <span className="text-xl ">
                  12
                </span>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <div className="w-fit  bottom-6">
        <button className="  p-2 px-9 bg-green rounded-sm text-white font-bold hover:shadow-green">
          Calculer
        </button>
      </div>
      <ToastContainer position="bottom-right" />
      </form>
    </div>
  );
};

export default CalculerR;
