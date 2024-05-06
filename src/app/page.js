"use client"
import Image from "next/image";
import { BsShop } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import bgHome from "@/images/empty-store-front-vector.jpg";
import styles from "./home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()
  const onSubmit = (e) =>{
    e.preventDefault()
    if (email.trim() && password.trim()){
      router.push('/accueil')
      setError(false)
      setEmail("")
      setPassword("")
    }else{
     setError(true)
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <p className={styles.title}>
            Magasin <BsShop /> Stockage
          </p>
          <p className={styles.welcome}>Bienvenu chez Nous</p>
          <hr />
          <p className={styles.message}>Connectez vous</p>
          <form className={styles.form} onSubmit={onSubmit}>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Veuillez entrer votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <div className={styles.iconContainer}>
                <HiOutlineMail className={styles.inputIcon} />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Veuillez entrer votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
              <div className={styles.iconContainer}>
                <CiLock className={styles.inputIcon}/>
              </div>
              {error && <p className={styles.error}>Veuillez remplir tous les champs.</p>}            <button className={styles.button} type="submit">
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
