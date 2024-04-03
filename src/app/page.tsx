import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.divTela1}>
        <img className={styles.imgLogoTexto} src="/logo-texto.png"></img>
        <div className={styles.divTexto}>
          <p className={styles.text}>
            Lorem ipsum phasellus nisl quisque<br></br>
            senectus hac ut euismod bibendum<br></br>
            habitant erat aliquam habitant.<br></br>
            nulla volutpat quisque pharetra<br></br>
            magna inceptos mauris suscipit,<br></br>
            ipsum leo etiam himenaeos
          </p>
        </div>
        <img src="seta.png" className={styles.imgSeta}></img>
      </div>
      <div className={styles.divTela2}>
        <div className={styles.container}>
          <img className={styles.logo} src="logo.png"></img>
          <p className={styles.textLogo}>
            Lorem ipsum phasellus nisl quisque<br></br>
            senectus hac ut euismod bibendum<br></br>
            habitant erat aliquam habitant.<br></br>
            nulla volutpat quisque pharetra<br></br>
            magna inceptos mauris suscipit,<br></br>
            ipsum leo etiam himenaeos
          </p>
        </div>
        <div className={styles.containerMaster}>
          <div className={styles.divContainerTexto}>
            <h1 className={styles.tituloEncontros}>Encontros</h1>
            <p className={styles.paragrafoEncontros}>
              Lorem ipsum phasellus nisl quisque<br></br>
              senectus hac ut euismod bibendum<br></br>
              habitant erat aliquam habitant.<br></br>
              nulla volutpat quisque pharetra<br></br>
              magna inceptos mauris suscipit,<br></br>
              ipsum leo etiam himenaeos
            </p>
          </div>
          <img className={styles.calendario} src="calendario.png"></img>
        </div>
      </div>
    </div>
  );
}
