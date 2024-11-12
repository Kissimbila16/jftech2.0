import Dashboard from "@/app/components/dashboard";
import Footer from "../Footer";
import Header from "../Header";

export default function Default() {
  return (
    <main className="w-100 h-100 row-11">
      <Header />
      <div className="container row w-100 m-3">
        <Dashboard />
        <Footer />
      </div>
    </main>
  );
}
