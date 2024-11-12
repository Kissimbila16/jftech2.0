export default function Cardmin({ key, title, text, link, num }) {
  return (
    <>
      <div className="card card-b">
        <div className="card-body py-5">
          <h4 className="card-title fs-1">{title} </h4>
          <p className="card-text fw-bolder">
            <i className="bi bi-circle-fill text-danger"></i> {text}{" "}
          </p>
        </div>
      </div>
    </>
  );
}
