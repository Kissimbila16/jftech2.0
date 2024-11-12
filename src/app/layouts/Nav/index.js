import Btn_Contato_Nos from "@/app/components/contacto";
import Icon from "@/app/components/Icon";
import Nav_text from "@/app/components/link";

export default function Nav() {
  return (
    <nav>
      <div className="d-flex justify-content-around bg">
        <Icon />
        <ul className="list d-flex ">
          <Nav_text name="Home" way="#home" />
          <Nav_text name="Jftech" way="#home" />
          <Nav_text name="Solucoes" way="#home" />
          <Nav_text name="Portfolio" way="#home" />
          <Nav_text name="Equipe" way="#home" />
          <Nav_text name="Blog" way="#home" />
          <Nav_text name="Contacto" way="#home" />
        </ul>
        <Btn_Contato_Nos name={'Orcamento'} />
        <i class="bi bi-list fs-3"></i>
        &nbsp;
      </div>
    </nav>
  );
}
