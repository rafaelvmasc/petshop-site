import React from "react";
import { useHistory } from "react-router-dom";
import imagem from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

function Pagina404() {
  const history = useHistory();

  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={imagem} alt="ilustracao doguito" />
      <p className="naoencontrado-texto">Essa pagina nao existe, meu amigo!</p>
      <button
        onClick={(e) => {
          history.push("/");
        }}
      >
        Voltar para home
      </button>
    </main>
  );
}

export default Pagina404;
