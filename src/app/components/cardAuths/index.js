import Image from "next/image";
import Link from "next/link";

export default function Authes({name, func, foto}) {
  return (
    <div className="card wid transparent" >
    <Image className="card-img-top" src={foto} alt={name} height={'320'} width={'250'}/>
    <div className="card-body w-100">
      <Link href="#" className="btn text-white w-100 w-card bg-transparent txt-left border-dark m-0 pt-3 rounded-0">{name}</Link>
    </div>
  </div>
  );
}
