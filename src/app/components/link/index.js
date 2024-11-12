import Link from "next/link";

export default function Nav_text({name,way='#'}){
    return<>
      <Link className="touched-link px-2" href={way}>&nbsp; {name} </Link>
    </>
}