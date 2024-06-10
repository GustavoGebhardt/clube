import styles from "../styles/page.module.css"

export default function header(){
    return(
        <header className={styles.header}>
            <a className={styles.input} href="#menuHeader"><img className={styles.imgHeader} src="bars-solid.svg"></img></a>
            <div className={styles.menuHeader} id="menuHeader">
                <a className={styles.inputFechar} href="/#"><img className={styles.imgHeader} src="xmark-solid.svg"></img></a>
                <a className={styles.link} href="/">Inicio</a>
                <a className={styles.link} href="/enigma">Enigma</a>
            </div>
      </header>
    );
}