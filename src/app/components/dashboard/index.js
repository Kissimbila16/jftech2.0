import Image from "next/image";
import Btn_Contato_Nos_circle from "../contacto-circle";
import Cardmin from "../cardmin";

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

        <div className="bg w-100 layout ">
          <section className="d-flex justify-content-around border-simple">
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
          </section>
        </div>
      </div>
    </man>
  );
}
