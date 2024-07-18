import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { IoHomeOutline } from "react-icons/io5";

export function AuthView() {
  const [isLogin, setIsLogin] = useState(true);
  const [currentForm, setCurrentForm] = useState("login");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => {
      setCurrentForm(isLogin ? "login" : "signup");
      setFade(true);
    }, 200); // Tiene que coincidir con el duration-300 de la animación
    return () => clearTimeout(timer);
  }, [isLogin]);

  return (
    <article className="flex min-h-screen bg-gray-100/20">
      <section className="w-1/2 hidden lg:block bg-cover xl:shadow-[5px_0_40px_20px_rgba(0,0,0,0.2)] bg-center bg-[url('https://images.unsplash.com/photo-1502301103665-0b95cc738daf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="flex flex-col justify-center h-full p-8 text-white bg-black bg-opacity-55">
          <h2 className="text-sm">Platos increíbles de distintos países.</h2>
          <h1 className="mt-2 text-5xl font-bold">SABORES ÚNICOS</h1>
          <p className="mt-4">
            Pasa por nuestro restaurante y disfruta de los mejores platos internacionales a el mejor precio.
          </p>
        </div>
      </section>
      <section className="relative flex items-center justify-center w-full lg:w-1/2 px-4 md:p-8">
        <a className="absolute top-0 right-0 mr-5 xs:mr-10 mt-5 xs:mt-10 text-3xl hover:text-main-orange/70 transition-all" href="/">
          <IoHomeOutline />
        </a>
        <div className={`w-full max-w-md transition-all duration-300 ${isLogin ? "mt-0" : "mb-10"}`}>
          <div className="flex flex-col items-center mb-10 gap-4">
            <img
              src="https://freesvg.org/img/chef-restaurant-logo-publicdomainvectors.png"
              alt="Logo"
              className="w-16 sm:w-20 h-16 sm:h-20"
            />
            <h2 className="sm:mt-4 text-lg sm:text-2xl font-bold">Edén de sabores</h2>
            <div className="sm:hidden text-center">
              {isLogin ? 
                <h3>¿No tienes una cuenta?<button onClick={() => setIsLogin(false)} className="px-2 underline decoration-main-orange/70 underline-offset-2">Registrate</button></h3> 
                : 
                <h3>¿Ya tienes una cuenta?<button onClick={() => setIsLogin(true)} className="px-2 underline decoration-main-orange/70 underline-offset-2">Inicia sesión</button></h3>
              }
              <span></span>
            </div>
            <div className="hidden sm:flex flex-wrap justify-center sm:justify-start pr-3 mt-4 gap-5 relative bg-gray-200/70 rounded-md px-2 py-1">
              <div
                className={`absolute hidden sm:block bg-main-orange/70 z-10 w-[45%] h-10 pointer-events-auto rounded-md transition-all duration-300 ${
                  isLogin 
                  ? "transform translate-x-0" 
                  : "transform translate-x-[112%]"
                 }`}
              ></div>
              <button
                onClick={() => setIsLogin(true)}
                className="w-[155px] py-2 z-10 px-3 ms-1 rounded-md self-center font-semibold transition-all"
              >
                INICIAR SESIÓN
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className="w-[155px] py-2 z-10 px-3 ms-1 rounded-md self-center font-semibold transition-all"
              >
                REGISTRARSE
              </button>
            </div>
          </div>
          <div className={`transition-opacity h-[315px] duration-200 ${fade ? "opacity-100" : "opacity-0"}`}>
            {currentForm === "login" ? (
              <LoginForm />
            ) : (
              <SignUpForm />
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
