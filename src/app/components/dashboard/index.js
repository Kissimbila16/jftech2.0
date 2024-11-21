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
import Typed_text from "../typed";
import MyCarousel from "../carousel";

export default function Dashboard() {
  return (
    <main>
      <div className="w-100">
        <div className={"d-flex alig-items-center fundoPrincipal btn-shine "}>
          {/* <div className=""> */}
            <Typed_text text={"Jftech"} clas={"w-100 text-danger"} />{" "}
          {/* </div> */}
        </div>
        <div className="left-icons w-100 gap-4" id="hide">
          <Link href={"#"}>
            <i className="bi bi-instagram fs-3 mx-1"></i>
          </Link>
          <Link href={"#"}>
            <i className="bi bi-linkedin fs-3 mx-1"></i>
          </Link>
          <Link href={"#"}>
            <i className="bi bi-facebook fs-3 mx-1"></i>
          </Link>
        </div>

        <div
          className={"justify-content-around-around my-xl-5 mx-5  layout  "}
          id="flex-grid"
          data-aos="fade-right"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
        >
          <div className="row-6 w-50 col-sm-12 col-md-12 col-xxl-6 img-main text-l">
            <Image src={"/logo.png"} alt="foto" width={"700"} height={"500"} />
          </div>
          <div className="row-6 w-50 col-sm-12 col-md-12 col-xxl-6 text-l d-grid ">
            <section className="zone-txt">
              <h3 className="text-left">
                <i className="bi bi-circle-fill text-danger fs-6"></i> Agencia
                JFTech
              </h3>
              <h1 className="text-left fs-1 fw-bolder">
                Experts em colocar o seu projeto para voar
              </h1>
              <h5>
                A JF-Tech Angola é uma empresa inovadora especializada no
                desenvolvimento de soluções web e desktop. Com uma equipe
                altamente qualificada e experiente, nos dedicamos a oferecer
                serviços personalizados que atendem às necessidades específicas
                de nossos clientes. Nossa missão é transformar desafios em
                oportunidades através da tecnologia.Fale conosco
              </h5>
              
               <Btn_Contato_Nos_circle
                  name={" Fale conosco"}
                  classe="fs-5 center contact"
                  link="#whatshapp"
                />
            </section>
          </div>
        </div>
        <br id="hide-br" className="mb-5" />
        <div className=" w-100 layout-auto mb-xl-5 mt-xl-5 ">
              
          <section className=" justify-content-around border-simple my-xl-5 " id="datalist"   data-aos="fade-up"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine">
            <div className="mar-top justify-content-xl-center gap-5" id="flex-grid">
              <Cardmin title={"567"} num={1} text={"projectos"} link={"#"} />
              <Cardmin title={"567"} num={1} text={"projectos"} link={"#"} />
              <Cardmin title={"567"} num={1} text={"projectos"} link={"#"} />
              <Cardmin title={"567"} num={1} text={"projectos"} link={"#"} />
            </div>
          </section>
        </div>
        <br />

        <div className="bg w-100  layout-auto mt-5" id="Solucoes">
          <section className="d-flex justify-content-around border-simple">
            <div
              className="d-grid w-100 my-xl-5 "
           
            >
              <h4 className="py-3 fs-3">
                <i className="bi bi-circle-fill text-danger fs-6"></i> Expertise
              </h4>
              <h1 className="fw-bolder text-s text-auto txt-t">Solucoes</h1>
              <br />

              <section
                className="tam-100 d-grid gap-4 mt-5"
                
                data-aos="fade-left"
                data-aos-offset="600"
                data-aos-duration="500"
              >
                <Cardmax
                  title={"01"}
                  num={500}
                  text={"loorccccccccccccccc"}
                  link={"#"}
                />
                <Cardmax
                  title={"02"}
                  num={600}
                  text={"loorccccccccccccccc"}
                  link={"#"}
                />{" "}
                <Cardmax
                  title={"03"}
                  num={700}
                  text={"loorccccccccccccccc"}
                  link={"#"}
                />{" "}
                <Cardmax
                  title={"04"}
                  num={800}
                  text={"loorccccccccccccccc"}
                  link={"#"}
                />
              </section>
            </div>
          </section>
        </div>

        <div className=" slide-t row-12 d-flex justify-content-around align-items-center">
          <div className="card-slide">
            <div className="emojis d-flex" id="font-auto">
              <button className="d-flex align-items-center">Segurança Eletrônica <i className="bi bi-circle-fill text-danger fs-6 mt-3 mx-2"></i>   </button>
              <button className="d-flex align-items-center">Redes de Computadores<i className="bi bi-circle-fill text-danger fs-6 mt-3 mx-2"></i>   </button>
              <button className="d-flex align-items-center">Consultoria<i className="bi bi-circle-fill text-danger fs-6 mt-3 mx-2"></i>   </button>
              <button className="d-flex align-items-center">Desenvolvimento Mobile<i className="bi bi-circle-fill text-danger fs-6 mt-3 mx-2"></i>   </button>
              <button className="d-flex align-items-center">Desenvolvimento Web<i className="bi bi-circle-fill text-danger fs-6 mt-3 mx-2"></i>   </button>
              <button className="d-flex align-items-center">Design UI/UX<i className="bi bi-circle-fill text-danger fs-6 mt-3 mx-2"></i>   </button>
              <button className="d-flex align-items-center">Gestão de Conteúdo Digital<i className="bi bi-circle-fill text-danger fs-6 mt-3 mx-2"></i>   </button>
            </div>
            
          </div>
        </div>
        <div className="slide-w center d-grid  justify-content-around align-items-center ">
          <h6 className="mb-5 pb-5 mt-4">
            <i className="bi bi-circle-fill text-danger fs-6"></i> CONVERSA COM
            A GENTE
          </h6>
          <div className="text-t">
            <h3 className="w-75 mb-3 mt-5 text-s mx-auto" id="font-auto">
              O seu projeto merece voar com a JFTech
            </h3>
          </div>
          <br />

          <div className="mx-5 text-t">
            <Btn_Contato_Nos name={"Conversar agora"} />
          </div>
        </div>

        <div className="w-100  layout-auto mt-5">
          <section
            className="d-flex justify-content-center border-simple"
            id="Portfolio"
          >
            <div className="d-grid w-100 my-4 ">
              <h4 className="py-3 fs-3 mx-1 text-center">
                <i className="bi bi-circle-fill text-danger fs-6" ></i> Jobs
              </h4>
              <h1 className="fw-bolder text-s text-auto txt-t text-center " id="font-auto">Portfólio</h1>
              <br />
              <div className="d-flex justify-content-around w-100 ">
                <ol className=" w-xl-50 d-block justify-content-around text-center" >
                  <Nav_text name={"Todos"} way="#" />
                  <Nav_text name={"Site"} way="#" />
                  <Nav_text name={"Landing Page"} way="#" />
                  <Nav_text name={"E-commerce"} way="#" />
                  <Nav_text name={"Social Media"} way="#" />
                  <Nav_text name={"Identidade Visual"} way="#" />
                </ol>
              </div>
              <br />

              <section
                className="w-100 d-flex justify-content-center  gap-3 mt-5"
                data-aos="fade-left"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                id="hide"
              >
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
              </section>

              <section
                className="w-100 d-flex justify-content-around  gap-3 mt-5"
                data-aos="fade-right"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                id="hide"
              >
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
              </section>

              <section
                className="w-100 d-flex justify-content-around  gap-3 mt-5"
                data-aos="fade-left"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                id="hide"
              >
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
              </section>

              <section
                className="w-100 justify-content-around  gap-3 mt-5"
                data-aos="fade-right"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                id="flex-grid"
              >
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
                <Card title={"567"} num={1} text={"projectos"} link={"#"} />
              </section>

              <div
                className="d-flex justify-content-center align-items-center mt-5"
                data-aos="fade-right"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
              >
                <Btn_Contato_Nos
                  name={"Ver mais  "}
                  link="#"
                  icon="bi bi-arrow-up-right fs-6"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="bg w-100  layout-auto mt-5" id="Equipe">
          <section className="d-flex border-simple">
            <div className="d-grid w-100 my-5">
              <section className=" mx-5 left">
                <h4 className="py-3 fs-3">
                  <i className="bi bi-circle-fill text-danger fs-6"></i> Nos
                </h4>
                <h1 className="fw-bolder text-s text-auto txt-t" id="font-auto">
                  Team JFTech
                </h1>
                <h6 className="fw-bolder text-secondary width-auto  fs-6 text-auto pt-4 ">
                  {" "}
                  Conheça a galera que vai fazer o seu projeto voar, no padrão
                  JFTech.{" "}
                </h6>
              </section>
              <br />

              <section
                className="tam-100 justify-content-around mx-xl-5 mt-5"
              //  style={{width:'100vw'}}
              >
{/* <div className="mx-xl-5" id="flex-grid "> */}
<MyCarousel/>
{/* </div> */}
              </section>
            </div>
          </section>
        </div>

        <div className="bg w-100  layout-auto mt-5">
          <section className="d-flex justify-content-around border-simple">
            <div className="d-grid w-100 my-5 ">
              <h4 className="py-3 fs-3">
                <i className="bi bi-circle-fill text-danger fs-6"></i>{" "}
                Depoimentos
              </h4>
              <h1 className="fw-bolder text-s text-auto txt-t" id="font-auto">
                O que falam da JFTech
              </h1>
              <br />

              <section
                className="tam-100 gap-3 mx-5 justify-content-center mt-5"
                data-aos="fade-up"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                id="flex-grid"
              >
                <CardContent
                  text={
                    "'A JF-Tech Angola transformou nossa visão em realidade com um software que realmente atende nossas necessidades.'— Maria dos Santos, Cliente"}
                  title={"domingos J.kissimbila "}
                  num={"criado em 2024"}
                  link={"#"}
                />
                <CardContent
                  text={'"O suporte da equipe foi excepcional durante todo o processo. Recomendo!"— João Ferreira, Cliente'}
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

        <div className="bg w-100  layout-auto mt-5" id="Blog">
          <section className="d-flex justify-content-around border-simple">
            <div className="d-grid w-100 my-5 ">
              <h4 className="py-3 fs-3">
                <i className="bi bi-circle-fill text-danger fs-6"></i> Blog
              </h4>
              <h1 className="fw-bolder text-s text-auto txt-t" id="font-auto">
                Conteúdos de valor
              </h1>
              <br />

              <section
                className="tam-100 gap-4 mt-5"
                data-aos="fade-left"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
                id="flex-grid"  
              >
                <div className="card" data-aos="fade-left"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine">
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
                <div className="card"  data-aos="fade-left"
                data-aos-offset="700"
                data-aos-easing="ease-in-sine">
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
                <div className="card"  data-aos="fade-left"
                data-aos-offset="800"
                data-aos-easing="ease-in-sine">
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
                <div className="card mb-3"  data-aos="fade-left"
                data-aos-offset="900"
                data-aos-easing="ease-in-sine">
                  <Image
                    width={"200"}
                    height={"300"}
                    src={"/logo.png"}
                    className="card-img-top"
                    alt="loogo"
                  />
                  <div className="card-body ">
                    <h5 className="card-title">Card title</h5>
                    <Link
                      href="#"
                      className="card-text touched-link "
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

        <div className="bg w-100  layout-auto mt-5" id="Contacto">
          <section className="d-flex border-simple">
            <div className="d-grid w-100 my-5 ">
              <section className=" mx-5 left">
                <h4 className=" fs-3">
                  <i className="bi bi-circle-fill text-danger fs-6"></i> Contato
                </h4>
                <h1 className="fw-bolder  text-auto txt-t">
                  Fale com a JFTech
                </h1>
              </section>
              <br />
              <section
                className="tam-100 d-flex justify-content-around gap-4 mt-5"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                
              >
                <div className="col-7 col-sm-12 col-md-8" id="grid">
                  <div className="field" id="flex-grid">
                    <div className="form-group w-xl-75 ">
                      <div className="form__group field">
                        {/* <br /> */}
                        <input
                          type="input"
                          className="form__field"
                          placeholder="Name"
                          required=""
                        />
                        <label className="form__label">Seu Nome</label>
                      </div>
                    </div>{" "}
                    <div className="form-group w-xl-75 ">
                      <div className="form__group">
                        <br />
                        <input
                          type="input"
                          className="form__field"
                          placeholder="Name"
                          required=""
                        />
                        <label className="form__label">Seu E-mail</label>
                      </div>
                    </div>
                  </div>
                  <div id="flex-grid">
                    <div className="form-group w-xl-75 ">
                      <div className="form__group ">
                        <br />
                        <input
                          type="input"
                          className="form__field"
                          placeholder="Name"
                          required=""
                        />
                        <label className="form__label">Seu Telefone</label>
                      </div>
                    </div>{" "}
                    <div className="form-group w-xl-75  ">
                      <div className="form__group ">
                        <br />
                        <input
                          type="input"
                          className="form__field"
                          placeholder="Name"
                          required=""
                        />
                        <label className="form__label">Assunto</label>
                      </div>
                    </div>
                  </div>
                  <div className="field w-100" id="flex-grid">
                    <div className="form-group w-100 mb-5  mt-4   ">
                      <label className="txt-left px-4 mb-4">Mensagem</label>
                      <div className="w-100" style={{ marginLeft: "-8%" }}>
                        <textarea
                          className="area transparent mb-5 "
                          placeholder="e.g. Hello world"
                          style={{ height: "200px", width: "85.5%" }}
                        ></textarea>
                      </div>
                      <br/>

                    </div>{" "}
                  </div>

                  <div className="form-group">
                    <div className="d-flex justify-content-left mx-2"  id="send">
                      <Btn_Contato_Nos name={"Enviar Mensagem"} />
                    </div>
                  </div>
                </div>
                <div
                  className="col-4 col-sm-12 col-md-4 h-100 bg-danger rounded transparent-bg"
                  style={{ marginLeft: "-20%", height: "450px", width: "25%" }}
                  id="hide"
                >
                  <div className="center d-grid mt-5  justify-content-around align-items-center ">
                    <br />
                    <br />

                    <div className="">
                      <h3 className="w-75 mb-3 mt-3 fs-1 mx-auto">
                        Nos chame direto no WhatsApp!
                      </h3>
                    </div>
                    <br />
                    <br />

                    <div className="mx-5 " style={{marginTop:'-45%'}}>
                      <Btn_Contato_Nos name={"Conversar agora"} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
