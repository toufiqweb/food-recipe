import Banner from "@/components/Banner";
import Foods from "@/components/Foods";

export default function Home() {
  return (
    <div className=" font-sans ">
      <Banner/>
      <main className="">
        <Foods/>
      </main>
    </div>
  );
}
