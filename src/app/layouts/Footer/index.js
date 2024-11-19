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
                <li className="top-footer">
                  <h5 className="fs-6 w-100">Política de Privacidade</h5>
                  <h5 className="fs-6 w-100">Termos de Uso</h5>
                </li>
              </ol>
            </section>
          </div>
          <div className="d-grid w-100 my-5 ">
            <h4 className="py-3 fs-4">
              
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
          </div>
          <div className="d-grid w-100 my-5 ">
            <h4 className="py-3 fs-4">
               Horários
            </h4>
            <section className="tam-100 d-flex mx-5">
              <ol className="list-footer mx-5 top-footer" >
                <li className="mt-5">
                  <h5 className="mt-3">teste</h5>
                </li>
                <li className="" style={{marginTop:'-27%'}}>
                  <h5>teste</h5>
                </li>
              </ol>
            </section>
          </div>
          <div className="d-grid w-100 my-5 ">
            <h4 className="py-3 fs-4 px-4">
               Siga-nos
            </h4>
            <section className="tam-100 d-flex mx-5">
              <ol className="list-footer mx-5" style={{marginTop:'-30%'}}>
                <li className="mx-5 d-flex">
                <Link href={'#'}><i className="bi bi-instagram fs-4 mx-2"></i></Link>
                <Link href={'#'}><i className="bi bi-linkedin fs-4 mx-2"></i></Link>
                <Link href={'#'}><i className="bi bi-facebook fs-4 mx-2"></i></Link>
                </li>
              </ol>
          <Link href={'#'} className="up-fixe"><i className=" bi bi-arrow-up-right"></i></Link>

            </section>
          </div>

        </section>

        
      </footer>
    </>
  );
}
