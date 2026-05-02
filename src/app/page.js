import Banner from "@/components/Banner";
import FeaturedBook from "@/components/FeaturedBook";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <FeaturedBook></FeaturedBook>
       <ToastContainer />
    </div>
  );
}
