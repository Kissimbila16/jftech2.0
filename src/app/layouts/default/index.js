import Dashboard from "@/app/components/dashboard";
import Footer from "../Footer";
import Header from "../Header";

export default function Default() {
  return (
    <main className="w-100 h-100 row-xl-12">
      <Header />
      <div className="container row w-100 mx-xl-4">
        <Dashboard />
        <Footer />
      </div>
    </main>
  );
}
