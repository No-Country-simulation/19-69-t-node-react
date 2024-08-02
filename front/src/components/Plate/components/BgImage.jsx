/* eslint-disable react/prop-types */
const BgImage = ({ bgUrl }) => {
  return (
    <div
      className={`absolute inset-0 bg-black ${bgUrl} bg-cover bg-center bg-no-repeat brightness-[0.4]`}
    />
  );
};

export default BgImage;
