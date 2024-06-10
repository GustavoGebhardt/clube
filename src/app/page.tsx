import styles from "./page.module.css";
import Header from "../../components/header";

export default function Home() {
  return (
    <div>
      <title>Clube</title>
      <Header />
      <img className={styles.imgEstrela1} src="estrela.png"></img>
      <img className={styles.imgEstrela2} src="estrela.png"></img>
      <img className={styles.imgEstrela3} src="estrela.png"></img>
      <div className={styles.divImgBackground}>
        <img className={styles.imgBackground} src="background.jpg"></img>
      </div>
      <div className={styles.divTela1}>
        <img className={styles.imgLogoTexto} src="/logo-texto.png"></img>
        <div className={styles.divTexto}>
          <p className={styles.text}>
            Se você é um iniciante curioso, um estudante<br></br>
            buscando experiência prática ou um profissional<br></br>
            querendo se conectar com a comunidade, o nosso<br></br>
            clube está aberto para você. Não importa seu nível<br></br>
            de habilidade ou área de interesse, sempre<br></br>há algo para aprender e compartilhar.
          </p>
        </div>
        <img src="seta.png" className={styles.imgSeta}></img>
      </div>
      <div className={styles.divTela2}>
        <div className={styles.container}>
          <img className={styles.logo} src="logo.png"></img>
          <p className={styles.textLogo}>
           Você é apaixonado por jogos 🎮 eletrônicos e<br></br>
           sonha em criar suas próprias aventuras<br></br>
           digitais? Quer transformar suas ideias ✨<br></br>
           em realidade e conhecer pessoas 🤝 que<br></br>
           compartilham o mesmo entusiasmo? Então,<br></br>
           o Clube de Desenvolvimento de Jogos<br></br>
           é o lugar perfeito para você 🫵!
          </p>
        </div>
        <div className={styles.containerMaster}>
          <div className={styles.divContainerTexto}>
            <h1 className={styles.tituloEncontros}>Junte-se a Nós! 🏆</h1>
            <p className={styles.paragrafoEncontros}>
              Realizamos nossos encontros uma vez<br></br>
              por semana, nas sextas feitas à tarde.<br></br>
              Não perca a chance de fazer parte de algo<br></br>
              incrível. Transforme suas ideias em realidade,<br></br>
              aprenda novas habilidades e divirta-se criando jogos!<br></br>
              Estamos ansiosos para receber você na nossa próxima<br></br>
              sexta-feira, dia 14 ás 13:30! 👋
            </p>
          </div>
          <img className={styles.calendario} src="calendario.png"></img>
        </div>
      </div>
      <div className={styles.divImgBackground2}>
        <img className={styles.imgBackground} src="background2.jpg"></img>
      </div>
      <div className={styles.divTela3}>
        <div className={styles.divPosition}></div>
        <div className={styles.divBorda}></div>
      </div>
    </div>
  );
}
