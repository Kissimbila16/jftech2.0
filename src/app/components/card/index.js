import Link from "next/link";

export default function Card({ key, title, text, link, num }) {
  return (
    <>
      <div className="card col-2 transparent m-auto transparent-bg  ">
        <div className="card-body py-5 mt-4 show">
          <section className="card-text fw-bolder ">
          <button className="btn-circle-g fw-bolder">
        {" "}
        <Link href={link} >{title}</Link>{" "}
      </button>
            <br />
            <button className="btn-circle-g fw-bolder mt-4">
        {" "}
        <Link href={link} >{text}</Link>{" "}
      </button>
          </section>
        </div>
      </div>
    </>
  );
}
