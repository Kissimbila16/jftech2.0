import Btn_Contato_Nos from "@/app/components/contacto";
import Icon from "@/app/components/Icon";
import Nav_text from "@/app/components/link";
 
export default function Nav() {




  return (
    <nav>
      <div className="my-xl-2 d-flex justify-content-between h-xl-100 w-100 align-items-center bg">
        <Icon />
        <ul className="list d-flex mt-1" id="hide">
          <Nav_text name="Home" way="#home" />
          <Nav_text name="Jftech" way="#Jftech" />
          <Nav_text name="Solucoes" way="#Solucoes" />
          <Nav_text name="Portfolio" way="#Portfolio" />
          <Nav_text name="Equipe" way="#Equipe" />
          <Nav_text name="Blog" way="#Blog" />
          <Nav_text name="Contacto" way="#Contacto" />
        </ul>
      <div id="hide">
      <Btn_Contato_Nos name={'Orcamento'} />
      </div>
<button>
<i className="bi bi-list fs-2 mx-3 text-white"></i>
</button>
      </div>
    </nav>
  );
}