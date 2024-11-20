export default function Cardmax({ key, title, text, link, num }) {
  return (
    <>
      <div
        className="card card-w transparent shadow mb-2 "
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration={num}
      >
        <div className="card-body transparent  align-items-center justify-content-around w-100"  id="flex-grid">
          <h4 className="card-title">{title} </h4>
          <div className="text-left width-auto" >
            <h4 href="#" className="txt-left card-link fs-6">
              Social Media <br />
            
            </h4>
          </div>
         <div className="d-flex">
         <p className="card-text ico-card-max">
            <i className="bi bi-github fs-1"></i>{" "}
          </p>
          <p className="card-text"></p>
          <div className="d-grid" id="flex-grid">
            <a href="#" className="card-link">
              <i className="bi bi-arrow-up-right fs-1"></i>
            </a>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
