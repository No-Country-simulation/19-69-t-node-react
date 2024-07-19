import { InputForm } from "./InputForm";
import { FiUser } from "react-icons/fi";
import { LuAtSign } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";

export const SignUpForm = () => {
  return (
    <form className="space-y-7">
      <InputForm type="name"><FiUser /></InputForm>
      {/* <h2 className="w-full text-sm !mt-0 text-[#b63e3e]">Error de registro</h2> */}
      <InputForm type="email"><LuAtSign /></InputForm>
      <InputForm type="password"><RiLockPasswordLine /></InputForm>
      <div className="flex flex-col w-full gap-5 !mt-5">
        <button className="w-1/2 mt-8 py-2 rounded-md self-center font-semibold border-b-2 border-main-orange/70 bg-gray-200/60 hover:bg-main-orange/30 transition-all">
          REGISTRARSE
        </button>
      </div>
    </form>
  );
};
