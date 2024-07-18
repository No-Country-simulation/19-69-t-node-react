import { InputForm } from "./InputForm";
import { LuAtSign } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";


export const LoginForm = () => {
  return (
    <form className="space-y-7">
      <InputForm type="email"><LuAtSign /></InputForm>
      <InputForm type="password"><RiLockPasswordLine /></InputForm>
      <div className="flex flex-col w-full gap-5 !mt-5">
        <button className="sm:w-1/2 mt-8 py-2 px-4 rounded-md self-center font-semibold border-b-2 border-main-orange/70 bg-gray-200/60 hover:bg-main-orange/30 transition-all">
          INICIAR SESIÓN
        </button>
      </div>
    </form>
  );
};
