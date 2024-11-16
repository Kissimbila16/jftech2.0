import Image from "next/image";

export default function CardContent({ key, title, text, link, num }) {
  return (
    <>
      <div className="card col-3 mx-3 m-auto shadow border border-light  ">
        <div className="card-body transparent">
          <h5 className="card-title mx-1 left">
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
          </h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card d-flex " style={{ height: "70px" }}>
          <div className="row g-0">
            <div className="col-md-4 my-2 fs-1">
              <i className="bi bi-circle-fill text-danger pt-5 fs-1"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body ">
                <h6 className="card-title">{title} </h6>
                <p className="card-text">
                  <small
                    className="text-body-secondary mb-1 mar-t"
                  >
                    {num}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
