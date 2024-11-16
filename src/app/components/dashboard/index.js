import Image from "next/image";
import Btn_Contato_Nos_circle from "../contacto-circle";
import Cardmin from "../cardmin";
import Cardmax from "../cardmax";
import Btn_Contato_Nos from "../contacto";
import Card from "../card";
import Nav_text from "../link";
import Authes from "../cardAuths";
import CardContent from "../cardcontent";
import Link from "next/link";

export default function Dashboard() {
  return (
    <man>
      <div className="container row-100 w-100">
        <div className={"d-flex alig-items-center fundoPrincipal"}>
          <h1 className="text-center main-txt">Agencia Tucano</h1>
        </div>

        <div
          className={"d-flex justify-content-around-around my-5 mx-5  layout  "}
        >
          <div className="row-6 w-50 col-sm-12 col-md-12 col-xxl-6 img-main text-l">
            <Image src={"/logo.png"} alt="foto" width={"700"} height={"500"} />
          </div>
          <div className="row-6 w-50 col-sm-12 col-md-12 col-xxl-6 text-l d-grid ">
            <section className="zone-txt">
              <h3 className="text-left">
                <i className="bi bi-circle-fill text-danger fs-6"></i> Agencia
                Tucano
              </h3>
              <h1 className="text-left fs-1 fw-bolder">
                Experts em colocar o seu projeto para voar
              </h1>
              <h5>
                criamos, planejamos, desenvolvemos e executamos projectos que
                realmente funcionam e apresentam resultados. <br /> <br />
                Nao temos medo de voar: para que pes se a agencia tucano tem
                asas?E ai, vamos voar juntos?
              </h5>
              <br />
              <Btn_Contato_Nos_circle
                name={" Fale conosco"}
                classe="btn-lg"
                link="#whatshapp"
              />
            </section>
          </div>
        </div>

        <div className=" w-100 layout-auto mb-5 mt-5 ">
          <section className="d-flex justify-content-around border-simple my-5 ">
            <div className="d-flex gap-5 ">
              <Cardmin title={"567"} num={1} text={"projectos"} link={"#"} />
              <Cardmin title={"567"} num={1} text={"projectos"} link={"#"} />
              <Cardmin title={"567"} num={1} text={"projectos"} link={"#"} />
              <Cardmin title={"567"} num={1} text={"projectos"} link={"#"} />
            </div>
          </section>
        </div>
        <br />

        <div className="bg w-100  layout-auto mt-5     ">
          <section className="d-flex justify-content-around border-simple">
            <div className="d-grid w-100 my-5 ">
              <h4 className="py-3 fs-3">
                <i className="bi bi-circle-fill text-danger fs-6"></i> Expertise
              </h4>
              <h1 className="fw-bolder text-s text-auto txt-t">Solucoes</h1>
              <br />

              <section className="tam-100 d-grid gap-4 mt-5">
                <Cardmax
                  title={"01"}
                  num={1}
                  text={"loorccccccccccccccc"}
                  link={"#"}
                />
                <Cardmax
                  title={"02"}
                  num={1}
                  text={"loorccccccccccccccc"}
                  link={"#"}
                />{" "}
                <Cardmax
                  title={"03"}
                  num={1}
                  text={"loorccccccccccccccc"}
                  link={"#"}
                />{" "}
                <Cardmax
                  title={"04"}
                  num={1}
                  text={"loorccccccccccccccc"}
                  link={"#"}
                />
              </section>
            </div>
          </section>
        </div>

        <div className=" slide-t row-12 d-flex justify-content-around align-items-center ">
          <Image
            decoding="async"
            width="250"
            height="250"
            src={"/logo.png"}
            className="attachment-full"
            alt=""
          />{" "}
          <Image
            decoding="async"
            width="250"
            height="250"
            src={"/logo.png"}
            className="attachment-full"
            alt=""
          />{" "}
          <Image
            decoding="async"
            width="250"
            height="250"
            src={"/logo.png"}
            className="attachment-full"
            alt=""
          />{" "}
          <Image
            decoding="async"
            width="250"
            height="250"
            src={"/logo.png"}
            className="attachment-full"
            alt=""
          />{" "}
          <Image
            decoding="async"
            width="250"
            height="250"
            src={"/logo.png"}
            className="attachment-full"
            alt=""
          />
        </div>
        <div className="slide-w center d-grid  justify-content-around align-items-center ">
          <h6 className="mb-5 pb-5 mt-4">
            <i className="bi bi-circle-fill text-danger fs-6"></i> CONVERSA COM
            A GENTE
          </h6>
          <div className="text-t">
            <h3 className="w-75 mb-3 mt-5 text-s mx-auto">
              O seu projeto merece voar com a Tucano
            </h3>
          </div>
          <br />

          <div className="mx-5 text-t">
            <Btn_Contato_Nos name={"Conversar agora"} />
          </div>
        </div>

        <div className="bg w-100  layout-auto mt-5     ">
          <section className="d-flex justify-content-center border-simple">
            <div className="d-grid w-100 my-4 ">
              <h4 className="py-3 fs-3">
                <i className="bi bi-circle-fill text-danger fs-6"></i> Jobs
              </h4>
              <h1 className="fw-bolder text-s text-auto txt-t">Portfólio</h1>
              <br />
              <div className="d-flex justify-content-around w-100">
                <ol className=" w-50 d-flex justify-content-around">
                  <Nav_text name={"Todos"} way="#" />
                  <Nav_text name={"Site"} way="#" />
                  <Nav_text name={"Landing Page"} way="#" />
                  <Nav_text name={"E-commerce"} way="#" />
                  <Nav_text name={"Social Media"} way="#" />
                  <Nav_text name={"Identidade Visual"} way="#" />
                </ol>
              </div>
              <br />

              <section className="w-100 d-flex justify-content-center  gap-3 mt-5">
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
              </section>

              <section className="w-100 d-flex justify-content-around  gap-3 mt-5">
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
              </section>

              <section className="w-100 d-flex justify-content-around  gap-3 mt-5">
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
              </section>

              <section className="w-100 d-flex justify-content-around  gap-3 mt-5">
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
              </section>

              <div className="d-flex justify-content-center align-items-center mt-5">
                <Btn_Contato_Nos
                  name={"Ver mais  "}
                  link="#"
                  icon="bi bi-arrow-up-right fs-6"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="bg w-100  layout-auto mt-5">
          <section className="d-flex border-simple">
            <div className="d-grid w-100 my-5 ">
              <section className=" mx-5 left">
                <h4 className="py-3 fs-3">
                  <i className="bi bi-circle-fill text-danger fs-6"></i> Nos
                </h4>
                <h1 className="fw-bolder text-s text-auto txt-t">
                  Team Tucano
                </h1>
                <h6 className="fw-bolder text-secondary w-50 fs-6 text-auto pt-4 ">
                  {" "}
                  Conheça a galera que vai fazer o seu projeto voar, no padrão
                  Tucano.{" "}
                </h6>
              </section>
              <br />

              <section className="tam-100 d-flex justify-content-around gap-4 mt-5">
                <Authes
                  name={"domingos J.kissimbila "}
                  foto={"/logo.png"}
                  func={"desenvolvedor web"}
                />
                <Authes
                  name={"domingos J.kissimbila "}
                  foto={"/logo.png"}
                  func={"desenvolvedor web"}
                />
                <Authes
                  name={"domingos J.kissimbila "}
                  foto={"/logo.png"}
                  func={"desenvolvedor web"}
                />
                <Authes
                  name={"domingos J.kissimbila "}
                  foto={"/logo.png"}
                  func={"desenvolvedor web"}
                />
              </section>
            </div>
          </section>
        </div>

        <div className="bg w-100  layout-auto mt-5     ">
          <section className="d-flex justify-content-around border-simple">
            <div className="d-grid w-100 my-5 ">
              <h4 className="py-3 fs-3">
                <i className="bi bi-circle-fill text-danger fs-6"></i>{" "}
                Depoimentos
              </h4>
              <h1 className="fw-bolder text-s text-auto txt-t">
                O que falam da Tucano
              </h1>
              <br />

              <section className="tam-100 d-flex gap-3 mx-5 justify-content-center mt-5">
                <CardContent
                  text={
                    "Some quick example text to build on the card title and make up the bulk of the card content. Some quick example text to build on the card title and make up the bulk of the card content., Some quick example text to build on the card title and make up the bulk of the card content.Some quick example text to build on the card title and make up the bulk of the card content."
                  }
                  title={"domingos J.kissimbila "}
                  num={"criado em 2024"}
                  link={"#"}
                />
                <CardContent
                  text={
                    " Some quick example text to build on the card title and make up the bulk of the card content., Some quick example text to build on the card title and make up the bulk of the card content.Some quick example text to build on the card title and make up the bulk of the card content."
                  }
                  title={"domingos J.kissimbila "}
                  num={"criado em 2024"}
                  link={"#"}
                />
                <CardContent
                  text={
                    "Some quick example text to build on the card title and make up the bulk of the card content. Some quick example text to build on the card title and make up the bulk of the card content., Some quick example text to build on the card title and make up the bulk of the card content.Some quick example text to build on the card title and make up the bulk of the card content."
                  }
                  title={"domingos J.kissimbila "}
                  num={"criado em 2024"}
                  link={"#"}
                />
              </section>
              <div className="w-100">
                <ul className="pagination pagination-sm flex-center mt-5">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link border-simple bg-black">
                      <i className="bi bi-circle-fill"></i>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link border-simple bg-black" href="#">
                      <i className="bi bi-circle-fill"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link border-simple bg-black" href="#">
                      <i className="bi bi-circle-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="bg w-100  layout-auto mt-5     ">
          <section className="d-flex justify-content-around border-simple">
            <div className="d-grid w-100 my-5 ">
              <h4 className="py-3 fs-3">
                <i className="bi bi-circle-fill text-danger fs-6"></i> Blog
              </h4>
              <h1 className="fw-bolder text-s text-auto txt-t">
                Conteúdos de valor
              </h1>
              <br />

              <section className="tam-100 d-flex gap-4 mt-5">
                <div className="card">
                  <Image
                    width={"200"}
                    height={"300"}
                    src={"/logo.png"}
                    className="card-img-top"
                    alt="loogo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <Link
                      href="#"
                      className="card-text touched-link"
                      style={{ color: "black" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <Image
                    width={"200"}
                    height={"300"}
                    src={"/logo.png"}
                    className="card-img-top"
                    alt="loogo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <Link
                      href="#"
                      className="card-text touched-link"
                      style={{ color: "black" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <Image
                    width={"200"}
                    height={"300"}
                    src={"/logo.png"}
                    className="card-img-top"
                    alt="loogo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <Link
                      href="#"
                      className="card-text touched-link"
                      style={{ color: "black" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <Image
                    width={"200"}
                    height={"300"}
                    src={"/logo.png"}
                    className="card-img-top"
                    alt="loogo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <Link
                      href="#"
                      className="card-text touched-link"
                      style={{ color: "black" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Link>
                  </div>
                </div>
              </section>
              <div className="w-100">
                <ul className="pagination pagination-sm flex-center mt-5">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link border-simple bg-black">
                      <i className="bi bi-circle-fill"></i>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link border-simple bg-black" href="#">
                      <i className="bi bi-circle-fill"></i>
                    </a>
                  </li>
                  <li className="page-item ">
                    <a className="page-link border-simple bg-black" href="#">
                      <i className="bi bi-circle-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="my-3 w-100">
                <Btn_Contato_Nos name={"ver mais"} link="#" />
              </div>
            </div>
          </section>
        </div>

        <div className="bg w-100  layout-auto mt-5">
          <section className="d-flex border-simple">
            <div className="d-grid w-100 my-5 ">
              <section className=" mx-5 left">
                <h4 className=" fs-3">
                  <i className="bi bi-circle-fill text-danger fs-6"></i> Contato
                </h4>
                <h1 className="fw-bolder  text-auto txt-t">
                  Fale com a Tucano
                </h1>
              </section>
              <br />
              <section className="tam-100 d-flex justify-content-around gap-4 mt-5">
                <div className="col-7 col-sm-12 col-md-8 h-100">
                  <div className="field d-flex ">
                    <div className="form-group w-75 ">
                      <div className="form__group field">
                        <br />
                        <input
                          type="input"
                          className="form__field"
                          placeholder="Name"
                          required=""
                        />
                        <label className="form__label">Name</label>
                      </div>
                    </div>{" "}
                    <div className="form-group w-75 ">
                      <div className="form__group">
                        <br />
                        <input
                          type="input"
                          className="form__field"
                          placeholder="Name"
                          required=""
                        />
                        <label className="form__label">Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="form-group w-75 ">
                      <div className="form__group ">
                        <br />
                        <input
                          type="input"
                          className="form__field"
                          placeholder="Name"
                          required=""
                        />
                        <label className="form__label">Name</label>
                      </div>
                    </div>{" "}
                    <div className="form-group w-75  ">
                      <div className="form__group ">
                        <br />
                        <input
                          type="input"
                          className="form__field"
                          placeholder="Name"
                          required=""
                        />
                        <label className="form__label">Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="field w-100 d-flex">
                    <div className="form-group w-100  mt-4   ">
                      <label className="txt-left px-4 mb-4">Mensagem</label>
                      <div className="w-100" style={{ marginLeft: "-8%" }}>
                        <textarea
                          className="area transparent "
                          placeholder="e.g. Hello world"
                          style={{ height: "200px", width: "85.5%" }}
                        ></textarea>
                      </div>
                    </div>{" "}
                  </div>

                  <div className="form-group">
                    <div className="d-flex justify-content-left mt-2 mx-2">
                      <Btn_Contato_Nos name={"Enviar Mensagem"} />

                    </div>
                  </div>
                </div>
                <div
                  className="col-4 col-sm-12 col-md-4 h-100 bg-danger rounded transparent-bg"
                  style={{ marginLeft: "-20%" , height:'450px',width:'25%'}}
                >
                  <div className="center d-grid mt-5  justify-content-around align-items-center ">
                  <br />
                  <br />
                
                    <div className="mt-5">
                      <h3 className="w-75 mb-3 mt-5 fs-1 mx-auto">
Nos chame direto no WhatsApp!
                      </h3>
                    </div>
                    <br />
                    <br />

                    <div className="mx-5 mt-2 ">
                      <Btn_Contato_Nos name={"Conversar agora"} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </man>
  );
}
