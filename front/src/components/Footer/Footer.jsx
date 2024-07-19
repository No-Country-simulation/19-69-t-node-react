import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="relative z-50 w-full text-xs">
      <div className="mx-auto lg:text-xs tw-full max-w-full px-8 bg-secondary-color rounded-sm opacity-90 sm:px-8 text-white">
        <div className="flex lg:text-xs flex-col sm:flex-row lg:flex-row justify-between items-center sm:gap-4">
          <div className="text-left lg:text-xs text-xs mb-2">
            <Typography className="lg:text-xs mb-2 mt-2 lg:ml-0 md:text-xs sm:text-xs xl:text-xs 2xl:text-xs text-xs text-center md:whitespace-nowrap">
              Horarios
              <br />Lunes - Viernes:  10:00 am - 20:00 pm
              <br />Sabado - Domingo:  11:40 am - 19:00 pm
            </Typography>
          </div>
          <div className="flex-col lg:flex-col justify-center items-center flex text-center lg:gap-2">
            <h1 className="pb-2 text-xs xl:text-xs 2xl:text-xs">Redes Sociales</h1>
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <Typography as="a" href="/" target="_blank" className=" opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <svg className="h-5 w-5 md:h-5 md:w-5 sm:h-7 sm:w-7" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <svg className="h-5 w-5  sm:h-7 sm:w-7" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <svg className="h-5 w-5 md:h-5 md:w-5 sm:h-7 sm:w-7 bi bi-twitter-x" xmlns="http://www.w3.org/2000/svg" width="32" height="36" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Typography>
              <Typography as="a" href="/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <svg className="h-5 w-5 md:h-5 md:w-5 sm:h-7 sm:w-7 bi bi-tiktok" xmlns="http://www.w3.org/2000/svg" width="32" height="36" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                </svg>
              </Typography>
            </div>
          </div>
          <div className="flex-col justify-center items-center flex text-center sm:text-sm mt-2 sm:mt-0">
            <h1 className="mb-2 mt-2 xl:text-xs 2xl:text-xs" >Delivery</h1>
            <div className="flex justify-center items-center pb-2 gap-4">
              <Typography as="a" href="/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <img src="/imgs/ubereats.png" alt="" className="w-6 h-6 lg:w-10 lg:h-10" /> {/* Ajusta aquí */}
              </Typography>
              <Typography as="a" href="/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <img src="imgs/didi.png" alt="" className="rounded-xl w-6 h-6 lg:w-10 lg:h-10" /> {/* Ajusta aquí */}
              </Typography>
              <Typography as="a" href="/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <img src="/imgs/rappi.png" alt="" className="rounded-xl w-6 h-6 lg:w-10 lg:h-10" /> {/* Ajusta aquí */}
              </Typography>
              <Typography as="a" href="/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <img src="/imgs/juseat.png" alt="" className="rounded-xlw-6 h-6 lg:w-10 lg:h-10" /> {/* Ajusta aquí */}
              </Typography>
              <Typography as="a" href="/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100 transform hover:scale-125">
                <img src="/imgs/glovo.png" alt="" className="rounded-xl w-6 h-6 lg:w-10 lg:h-10" /> {/* Ajusta aquí */}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
