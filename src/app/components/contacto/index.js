import Link from "next/link";

export default function Btn_Contato_Nos({name, link = "#",icon='#'}) {
  return (
    <>
      <button className="btn">
        {" "}
        <Link href={link} >{name} {" "}</Link>{" "}
      <i className={icon}></i>
      </button>

    </>
  );
}
