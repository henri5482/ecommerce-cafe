import Menupromo from "./components/menupromo";
import Promo from "./components/promo";

export default function Page() {
  return (
    <>
      <div
        className="mt-4 pt-20 bg-no-repeat w-full bg-cover bg-center xl:h-[300px] 2xl:h-[420px] lg:py-20 2xl:py-36 relative text-center items-center inset-0"
        style={{ backgroundImage: "url('/abouthome.jpg')" }}
      >
        <div className="flex justify-center py-5 items-center flex-col md:pt-10 2xl:pt-0">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bebas-neue-regular">
            Menu
          </h1>
          <p className="schibsted-grotesk text-orange-600 text-[14px] md:text-[18px] font-semibold">
            - Luremy Restaurant -
          </p>
        </div>
      </div>
      <Promo />
      <Menupromo />
    </>
  );
}
