import Link from "next/link";

export default function Card({ key, title, text, link, num }) {
  return (
    <>
      <div className="card transparent m-auto transparent-bg  w-xxl"
       data-aos="fade-right"
       data-aos-offset="600"
       data-aos-easing="ease-in-sine">
        <div className="card-body py-5 mt-4 w-100 show">
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
