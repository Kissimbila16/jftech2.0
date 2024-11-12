export default function Cardmax({ key, title, text, link, num }) {
  return (
    <>
      <div className="card ">
        <div className="card-body bg-danger card-w d-flex justify-content-around w-100">
di
          <p className="card-text"> {text} </p>
         <div className="d-grid">
         <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
         </div>
        </div>
      </div>
    </>
  );
}
