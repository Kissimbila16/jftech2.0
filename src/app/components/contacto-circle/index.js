import Link from "next/link";

export default function Btn_Contato_Nos_circle({name, link = "#", classe}) {
  return (
    <>
      <button className="btn-circle d-flex fw-bolder">
        {" "}
        <Link href={link} className={classe} >{name}</Link>{" "}
      </button>
    </>
  );
}
