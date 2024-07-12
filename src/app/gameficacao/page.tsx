import styles from "./page.module.css"
import Header from "../../../components/header";

export default function Home(){
    return(
        <div>
            <Header />
            <h1 className={styles.textTitulo}>Gamificação</h1>
            <div className={styles.divBackground}>
                <div className={styles.divText}>
                    <h1>Participar de 1 encontro do Clube de Desenvolvimento de Jogos</h1>
                    <h1>Faça seu primeiro jogo no Clube de Desenvolvimento de Jogos</h1>
                    <h1>Participar de 4 encontros do Clube de Desenvolvimento de Jogos</h1>
                    <h1>Convidar um amgio para participar em um encontro</h1>
                    <h1>Participar de 5 encontros consecutivos</h1>
                    <h1>Complete os engimas do Clube de Desenvolvimento de Jogos</h1>
                    <h1>Participar de 10 encontros do Clube de Desenvolvimento de Jogos</h1>
                    <h1>Solte sua criatividade e desenvolva seu proprio jogo</h1>
                </div>
                <div className={styles.divImg}>
                    <img className={styles.imgPin} src="/pin1.png"></img>
                    <img className={styles.imgPin} src="/pin2.png"></img>
                    <br />
                    <img className={styles.imgPin} src="/pin3.png"></img>
                    <img className={styles.imgPin} src="/pin4.png"></img>
                    <img className={styles.imgPin} src="/pin5.png"></img>
                    <img className={styles.imgPin} src="/pin6.png"></img>
                    <img className={styles.imgPin} src="/pin7.png"></img>
                    <img className={styles.imgPin} src="/pin8.png"></img>
                </div>
            </div>
        </div>
    );
}