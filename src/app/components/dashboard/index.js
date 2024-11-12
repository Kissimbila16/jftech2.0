import Image from "next/image";
import Btn_Contato_Nos_circle from "../contacto-circle";
import Cardmin from "../cardmin";
import Cardmax from "../cardmax";

var cardes = [
  {
    nome: "test",
    title: "text",
    text: "content",
    link: "#",
    id: 1,
  },
  {
    nome: "test",
    title: "text",
    text: "content",
    link: "#",
    id: 2,
  },
  {
    nome: "test",
    title: "text",
    text: "content",
    link: "#",
    id: 3,
  },
  {
    nome: "test",
    title: "text",
    text: "content",
    link: "#",
    id: 4,
  },
];

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
              <h3 className="text-left">Agencia Tucano</h3>
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
              <Cardmin
                title={"test"}
                num={1}
                text={"loorccccccccccccccc"}
                link={"#"}
              />
              <Cardmin
                title={"test"}
                num={1}
                text={"loorccccccccccccccc"}
                link={"#"}
              />
              <Cardmin
                title={"test"}
                num={1}
                text={"loorccccccccccccccc"}
                link={"#"}
              />
              <Cardmin
                title={"test"}
                num={1}
                text={"loorccccccccccccccc"}
                link={"#"}
              />
            </div>
          </section>
        </div>

        <div className="bg w-100 layout mt-5     ">
          <section className="d-flex justify-content-around border-simple">
            <div className="d-grid w-100 my-5 ">
              <h4 className="py-3 fs-3">
                <i className="bi bi-plus-circle-fill text-danger fs-5 "></i>{" "}
                Expertise
              </h4>
              <h1 className="fw-light text-s text-auto txt-t">Solucoes</h1>
              <br />

              <section className="tam-100 d-grid gap-4 mt-4">
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
      </div>
    </man>
  );
}
