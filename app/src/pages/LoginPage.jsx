import React, { useState,useEffect } from "react";
import {loginus} from "../js/loginus";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
//import { useNavigate } from "react-router-dom";
//import soio from "../server/socket.io";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    loginus();
  }, []);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (

              <div className="flex min-h-screen bg-gradient-to-t from-green-cyan1 to-green-dark1  bg-gray">
                <div className="flex flex-col w-full md:flex-row ">
                  <img
                    src="assets/logo logiciel.png"
                    alt=""
                    className="absolute w-10 -rotate-45 m-3"
                  />
                  <div className=" w-1/3"></div>
                  <h1 className="text-white text-5xl absolute top-28 left-32">
                    Bienvenue !
                  </h1>
                  <img
                    src="assets/logo.svg"
                    alt=""
                    width={600}
                    className="absolute mt-24 ml-32 "
                  />
                  <div className="flex items-center justify-center  w-4/5 bg-white rounded-s-2xl text-center p-8">
                  <ToastContainer position="top-right" />
                    <div className="max-w-md w-full">
                      <h1 className="text-4xl relative bottom-28">
                        Connectez-vous
                      </h1>
                      <form

                        id="loginForm"

                        className=" flex-col space-y-4 font-semibold"
                      >
                        <div className="mb-4">
                          <label
                            htmlFor="input"
                            className="text-sm text-green  relative top-2 left-7 float-left bg-white px-1"
                          >
                            Identifiant
                          </label>
                          <input
                          id="usn"

                            type="text"
                            placeholder="Write here..."

                            className="p-4 text-sm  border border-green rounded-sm bg-gray-200 focus:outline-none w-11/12 "

                          />
                        </div>
                        <div className="mb-20 relative left-1">
                          <label
                            className="text-sm text-green float-left relative top-2 left-7 bg-white px-1"
                            htmlFor="password"
                          >
                            Mot de passe
                          </label>
                          <div className="flex w-full justify-end">

                          
                          <input
                  id="password"
                  type={passwordShown ? "text" : "password"}
                  placeholder="******************"
                  className="p-4 text-sm border border-green rounded-sm bg-gray-200 focus:outline-none w-11/12"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="relative right-8"
                >
                  {passwordShown ? <IoEyeOffOutline className="size-6 text-green" /> : <IoEyeOutline className="size-6 text-green" />}
                </button></div>
                        </div>
                        <div className="flex items-center justify-center relative top-10">
                        {/* <Link to="/Home"> */}
                            <button
                              className=" bg-green hover:shadow-green text-lg text-white font-bold py-3 rounded-lg w-44 "
                              type="submit"
                            >
                              Se connecter
                            </button>
                          {/* </Link> */}

                        </div>
                      </form>
                      <div className="flex items-center justify-center relative top-10" id="loginError" style={{ color: 'red', display: 'none' }}>Login failed. Please try again.</div>

                    </div>
                  </div>
                </div>
              </div>


  );
};

export default Login;
