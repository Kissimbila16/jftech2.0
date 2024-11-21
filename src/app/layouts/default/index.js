import Dashboard from "@/app/components/dashboard";
import Footer from "../Footer";
import Header from "../Header";
import Link from "next/link";

export default function Default() {
  return (
    <main className="w-100 h-100 row-xl-12">
     <div style={{position:'fixed',width:'100%'}}>
     <Header />
     </div>
      <div className="container row w-100 mx-xl-4">
        <Dashboard />
        <Footer />
      </div>
      <Link style={{position:'fixed',width:'100%'}} href={'#'} className="up-"><i className="text-danger bi bi-arrow-up-right"></i></Link>
    </main>
  );
}
