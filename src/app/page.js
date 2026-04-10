import About from "@/components/About";
import Banner from "@/components/Banner";
import Foods from "@/components/Foods";
import News from "@/components/News";
import PopularCuisines from "@/components/PopularCuisines";

export default function Home() {
  return (
    <div className=" font-sans ">
      <Banner/>
      <main className="">
        <Foods/>
        <About/>
        <PopularCuisines/>
        <News/>
      </main>
    </div>
  );
}
