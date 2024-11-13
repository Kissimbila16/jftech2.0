import Link from "next/link";

export default function Btn_Contato_Nos_circle({name, link = "#", classe='btn-cicle'}) {
  return (
    <>
      <button className={"fw-bolder "+classe}>
        {" "}
        <Link href={link} className={classe} >{name}</Link>{" "}
      </button>
    </>
  );
}
