import PlateArgentina from "../../components/Plate/PlateArgentina";
import PlateColombia from "../../components/Plate/PlateColombia";
import PlateElSalvador from "../../components/Plate/PlateElSalvador";
import PlateEspaña from "../../components/Plate/PlateEspaña";
import PlateMexico from "../../components/Plate/PlateMexico";

const AllCountries = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <PlateArgentina />
      <PlateColombia />
      <PlateElSalvador />
      <PlateEspaña />
      <PlateMexico />
    </div>
  );
};

export default AllCountries;
