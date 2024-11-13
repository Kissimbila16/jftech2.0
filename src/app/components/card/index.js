import Btn_Contato_Nos_circle from "../contacto-circle";

export default function Card({ key, title, text, link, num }) {
  return (
    <>
      <div className="card col-2 transparent m-auto ">
        <div className="card-body py-5 mt-4">
          <h4 className="card-title  d-flex align-items-center text-s">{title} </h4>
          <p className="card-text fw-bolder">
           <Btn_Contato_Nos_circle name={'visualizar'} link="#" classe={'w-100'} />
          </p>
        </div>
      </div>
    </>
  );
}
