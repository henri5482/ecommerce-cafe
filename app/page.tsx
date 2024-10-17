import Comida from "@/components/comida";
import HomeBanner from "@/components/home";
import ImageCarousel from "@/components/ImageSlider";
import Menu from "@/components/menu";



export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Comida />
      <Menu />
     <ImageCarousel />
      {/* <CarouselTextBanner/> */}
      {/* <FeacturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct /> */}
    </main>
  );
}
