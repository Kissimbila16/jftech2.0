import Icon from "@/app/components/Icon";
import Nav_text from "@/app/components/link";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-5">
        <section className="d-flex w-100 justify-content-around border-simple layout-auto">
          <div className="d-grid w-100 my-5 ">
            <h4 className="py-3 fs-3">
              <Icon />
            </h4>
            <section className="tam-100 d-flex mx-5">
              <ol className="list-footer txt-left mx-5 w-100">
                <li>
                  <h5 className="fs-6 w-100">Política de Privacidade</h5>{" "}
                  <h5 className="fs-6 w-100">Termos de Uso</h5>{" "}
                </li>
              </ol>
            </section>
          </div>
          <div className="d-grid w-100 my-5 ">
            <h4 className="py-3 fs-4">
              <i className="bi bi-circle-fill text-danger fs-6"></i>{" "}
              Institucional
            </h4>
            <section className="tam-100 d-flex mx-5">
              <ol className="list-footer mx-5 txt-left">
                <Link href="#home" className="mx-5">Home </Link>
                <Link href="#home" className="mx-5">Jftech </Link>
                <Link href="#home" className="mx-5"> Solucoes</Link>
                <Link href="#home" className="mx-5">Portfolio </Link>
                <Link href="#home" className="mx-5">Equipe </Link>
                <Link href="#home" className="mx-5"> Blog</Link>
                <Link href="#home" className="mx-5">Contacto </Link>
              </ol>
            </section>
          </div>{" "}
          <div className="d-grid w-100 my-5 ">
            <h4 className="py-3 fs-4">
              <i className="bi bi-circle-fill text-danger fs-6"></i> Horários
            </h4>
            <section className="tam-100 d-flex mx-5">
              <ol className="list-footer mx-5 mt-0">
                <li>
                  <h5>teste</h5>{" "}
                </li>
                <li>
                  <h5>teste</h5>{" "}
                </li>
              </ol>
            </section>
          </div>{" "}
          <div className="d-grid w-100 my-5 ">
            <h4 className="py-3 fs-4">
              <i className="bi bi-circle-fill text-danger fs-6"></i> Siga-nos
            </h4>
            <section className="tam-100 d-flex mx-5">
              <ol className="list-footer mx-5">
                <li className="mx-5">
                <Link href={'#'}><i class="bi bi-instagram fs-4 mx-1"></i></Link>
                <Link href={'#'}><i class="bi bi-linkedin fs-4 mx-1"></i></Link>
                <Link href={'#'}><i class="bi bi-facebook fs-4 mx-1"></i></Link>
                </li>
              </ol>
            </section>
          </div>
        </section>
      </footer>
    </>
  );
}
