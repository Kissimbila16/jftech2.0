import Dashboard from "@/app/components/dashboard";
import Footer from "../Footer";
import Header from "../Header";
import Link from "next/link";

export default function Default() {
  return (
    <main className="w-100 h-100 row-xl-12">
      <div className="my-xl-3">
        <Header />
        <Link
          style={{
            position: "fixed",
            width: "100%",
            marginTop: "80vh",
            marginLeft: "90vw",
            zIndex:2
          }}
          href={"#hide"}
          className="up-fixe"
        >
          <i className=" text-warning pt-5 fs-2 bi bi-arrow-up"></i>
        </Link>
      </div>
      <div className="container row w-100 mx-xl-4">
        <Dashboard />
        <Footer />
      </div>
    </main>
  );
}
