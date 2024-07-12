export const InputForm = ({ type, children }) => {
  return (
    <div className="relative flex flex-col">
      <label className="text-black/60" htmlFor={type}>
        {type === "email"
          ? "Email"
          : type === "name"
          ? "Nombre completo"
          : type === "password"
          ? "Contraseña"
          : ""}
      </label>
      <input
        id={type}
        type="text"
        placeholder={`Ingrese su ${
          type === "email"
            ? "correo electrónico"
            : type === "name"
            ? "nombre"
            : type === "password"
            ? "contraseña"
            : ""
        }`}
        className="w-full rounded-md border-gray-300 focus-visible:border-b-red-400 outline-none border px-5 py-2 shadow-sm sm:text-sm"
      />
      <span className="pointer-events-none opacity-60 absolute p-[10px] right-0 bottom-0 border-gray-300">
        {children}
      </span>
    </div>
  );
};
