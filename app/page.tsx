import Footer from "./components/Footer/page";
import HomePage from "./components/Home/page";
import Navbar from "./components/Nav/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <div className="h-40"></div> */}
      <HomePage />
      <Footer />
    </div>
  );
}
