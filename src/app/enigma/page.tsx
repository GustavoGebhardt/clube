import styles from "./page.module.css";

export default function Enigma() {
  return(
    <div>
      <div className={styles.divBackground}>
        <div className={styles.divInicio}>
          <img className={styles.imgLogo} src="logo-texto.png"></img>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quos voluptates error facere nesciunt impedit quidem quas sapiente amet porro eveniet ipsam inventore fuga tenetur labore saepe natus debitis sequi!</p>
          <button className={styles.btn}>Iniciar</button>
        </div>
      </div>
    </div>
  );
}