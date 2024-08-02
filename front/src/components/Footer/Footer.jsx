import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-100/95 text-center sm:text-left flex-col sm:flex-row py-2 sm:py-6 h-fit sm:h-28 md:py-8 px-2 md:px-14 w-full flex items-center justify-between gap-4 sm:gap-8 text-sm">
      <div className="hidden sm:flex items-center sm:items-start flex-col gap-2">
        <h3 className="font-semibold underline underline-offset-4 decoration-red-500/80">INFORMACIÓN</h3>
        <h4>123 Main St, Anytown USA 12345</h4>
        <h4>+54 (234) 567-890</h4>
      </div>
      <div className="flex flex-col pb-2 gap-4 sm:gap-7 text-center justify-between">
        <h3 className="font-semibold underline underline-offset-4 decoration-red-500/80">SEGUINOS</h3>
        <div className="flex gap-3 text-lg sm:text-2xl">
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank" className="hover:text-blue-700 transition-all">
            <SlSocialFacebook />
          </a>
          <a href="https://www.instagram.com" rel="noreferrer" target="_blank" className="hover:text-purple-500 transition-all">
            <SlSocialInstagram />
          </a>
          <a href="https://x.com" rel="noreferrer" target="_blank" className="hover:text-blue-300 transition-all">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center sm:items-end">
        <h3 className="font-semibold underline underline-offset-4 decoration-red-500/80">HORARIOS</h3>
        <div>Lunes - Viernes: 10:00 am - 20:00 pm</div>
        <div>Sábado - Domingo: 11:40 am - 19:00 pm</div>
      </div>
    </footer>
  );
}
