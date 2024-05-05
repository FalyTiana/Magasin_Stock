import Image from "next/image";
import { BsShop } from "react-icons/bs";
import bgHome from "../assets/images/empty-store-front-vector.jpg";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <p className={styles.title}>
            Magasin <BsShop /> stockage
          </p>
          <p className={styles.welcome}>Bienvenu chez Nous</p>
          <hr />
          <p className={styles.message}>Connectez vous</p>
          <form className={styles.form}>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Veuillez entrer votre email"
              className={styles.input}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Veuillez entrer votre mot de passe"
              className={styles.input}
            />
            <button className={styles.button} type='button'>
                Accéder à votre magasin
            </button>
          </form>
          <p className={styles.text}>
            Vous avez un compte?
              <Link href="#" className={styles.link}>
                  S’inscrire
              </Link>
          </p>
        </div>
      </div>
      <div className={styles.background}>
        <Image src={bgHome} alt="empty store" objectFit="cover" layout="fill" />
      </div>
    </>
  );
}
