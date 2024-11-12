import Link from "next/link";

export default function Btn_Contato_Nos({name, link = "#"}) {
  return (
    <>
      <button className="btn">
        {" "}
        <Link href={link} >{name}</Link>{" "}
      </button>
    </>
  );
}
