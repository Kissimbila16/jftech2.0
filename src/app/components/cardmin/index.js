export default function Cardmin({ key, title, text, link, num }) {
  return (
    <>
      <div className="card card-b ">
        <div className="card-body py-5 mt-4">
          <h4 className="card-title  d-flex align-items-center text-s">{title} <i className="bi bi-plus-circle-fill fs-5 p-1 py-2 text-danger"></i> </h4>
          <p className="card-text fw-bolder">
            <i className="bi bi-circle-fill text-danger"></i> {text}{" "}
          </p>
        </div>
      </div>
    </>
  );
}
