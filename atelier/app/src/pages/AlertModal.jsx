import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AlertModal = ({ onClose, onContinue, option }) => {
  const [isClosing, setIsClosing] = useState(false);

  // Handler to initiate close animation
  const startClosing = () => {
    setIsClosing(true);
  };

  // Effect to handle the end of the closing animation
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose(); 
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-60 flex justify-center items-center text-center">
      <div className={`shadow-custom-black bg-white p-6 rounded-lg w-96 ${isClosing ? 'close-animation' : 'modal-animation'}`}>
        <h2 className="text-lg font-bold mb-8 text-center">{option}</h2>
        <div className="flex justify-evenly">
          {option === "Voulez-vous Deconnecter ?" && (
            <Link to="/">
              <button className="bg-green-dark1 px-8 h-8 text-white rounded-lg font-bold">
                Oui
              </button>
            </Link>
          )}
          {option !== "Voulez-vous Deconnecter ?" && (
            <button
              className="bg-green-dark1 px-8 h-8 text-white rounded-lg font-bold"
              onClick={onContinue}
            >
              Oui
            </button>
          )}

          <button
            onClick={startClosing}
            className="bg-gray rounded-lg h-8 px-6 font-bold text-white"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
