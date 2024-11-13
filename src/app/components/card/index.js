import Link from "next/link";

export default function Card({ key, title, text, link, num }) {
  return (
    <>
      <div className="card col-2 transparent m-auto transparent-bg  ">
        <div className="card-body py-5 mt-4 ">
          <section className="card-text fw-bolder show">
          <button className="btn-circle-g fw-bolder">
        {" "}
        <Link href={link} >{num}</Link>{" "}
      </button>
            <br />
            <button className="btn-circle-g fw-bolder">
        {" "}
        <Link href={link} >{num}</Link>{" "}
      </button>
          </section>
        </div>
      </div>
    </>
  );
}
