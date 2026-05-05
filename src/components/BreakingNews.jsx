import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <Marquee speed={50} gradient={false} className="bg-slate-200 text-black py-2">
      🆕 New Arrivals: Harry Potter &nbsp; | &nbsp; Special Discount on Memberships &nbsp; | &nbsp; Free Delivery on Orders over $50 &nbsp; | &nbsp;
    </Marquee>
  );
};

export default BreakingNews;