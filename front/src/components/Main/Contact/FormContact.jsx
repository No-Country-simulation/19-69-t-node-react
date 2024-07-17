export default function FormContact() {
  return (
    <form
      action="#"
      method="POST"
      className=" pt-10 text-white w-full md:w-3/4 max-w-full flex flex-col justify-between items-center gap-5 m-0 md:mx-auto"
    >
      <div className="none md:flex flex-row justify-between gap-5 max-w-full w-full">
        <input
          className="bg-transparent border border-amber-800 p-4 w-full placeholder-gray-300"
          type="text"
          name="name"
          id="name"
          placeholder="Ingrese su nombre"
          required
        />

        <input
          className="bg-transparent border border-amber-800 p-4 w-full placeholder-gray-300 mt-5 md:mt-0"
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su email"
          required
        />
      </div>

      <input
        className="bg-transparent border border-amber-800 p-4 w-full placeholder-gray-300"
        type="text"
        name="subject"
        id="subject"
        placeholder="Asunto"
        required
      />

      <textarea
        className="bg-transparent border border-amber-800 p-4 w-full placeholder-gray-300"
        name="message"
        id="message"
        placeholder="Mensaje"
        rows="5"
        cols="40"
        required
      />
      <button
        type="submit"
        className="border border-amber-800 py-2 px-10 rounded-full bg-amber-500 hover:bg-transparent transition duration-200 ease-in-out font"
      >
        Enviar
      </button>
    </form>
  );
}
