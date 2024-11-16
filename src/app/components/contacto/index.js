import Link from "next/link";

export default function Btn_Contato_Nos({name, link = "#",icon='bi bi-arrow-up-right fs-6'}) {
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
