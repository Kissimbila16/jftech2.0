export default function Cardmax({ key, title, text, link, num }) {
  return (
    <>
      <div className="card card-w transparent shadow ">
        <div className="card-body transparent align-items-center d-flex justify-content-around w-100">
          <h4 className="card-title">{title} </h4>
          <div className="text-left d-grid">
         <h4 href="#" className="txt-left card-link">
         Social Media <br/>
         Gestão de Redes Sociais, Estratégia, Criação de Artes, Planejamento de Conteúdo e Legendas.
          </h4>
         </div>
          <p className="card-text ico-card-max"> <i className="bi bi-github fs-1"></i> </p>
          <p className="card-text" ></p>
         <div className="d-grid">
         <a href="#" className="card-link">
         <i className="bi bi-arrow-up-right fs-1"></i>
          </a>
         </div>
        </div>
      </div>
    </>
  );
}
