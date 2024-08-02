/* eslint-disable react/prop-types */
const Card = ({ imgUrl, imgAlt, plateName, platePrice, plateDesc }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[70%] lg:w-[35%] bg-black gap-6 p-7 border-white/60 border rounded-lg transition-all duration-300 hover:border-b-red-500 bg-opacity-70 text-pretty">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="h-auto w-full object-cover md:h-[300px] lg:h-[400px]"
      />
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-bold underline">{plateName}</h3>
        <p className="text-2xl underline decoration-red-400 decoration-1 underline-offset-4 font-medium">
          {platePrice}
        </p>
      </div>
      <p className="h-[50px]">{plateDesc}</p>
    </div>
  );
};

export default Card;
