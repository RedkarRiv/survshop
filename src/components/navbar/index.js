"use client"

import React, { useState }            from "react";
import { navbarLinks, settingsLinks } from "@settings/data/links.js";
import Link                           from "next/link"; 
import styles                         from "./index.module.scss";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>LOGO</div>
      </div>
      <ul className={styles.linkList}>
        {navbarLinks.map((item, index) => (
          <li key={index} className={styles.linkItem}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <ul className={styles.iconsList}>
        {isLogged ? <div className={styles.avatar} onClick={() => (setIsLogged(!isLogged))}>AVATAR</div>
        :
        <div className={styles.session} onClick={() => (setIsLogged(!isLogged))}>Iniciar sesión</div>
        }
        {settingsLinks.map((item, index) => (
          <li key={index} className={styles.iconItem}>
            <Link href={item.path}>{item.src}</Link>
          </li>
        ))} 
      </ul>
    </nav>
  );
};

export default Navbar;