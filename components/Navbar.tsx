"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.navbar}`}>
        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
        >
          <Image
            src="/logo.jpg"
            alt="Creative Catalyst Logo"
            width={120}
            height={60}
            priority
          />

          </Link>

        <nav className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className={styles.button}
        >
          Book Consultation
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/case-studies" onClick={closeMenu}>
            Case Studies
          </Link>

          <Link href="/team" onClick={closeMenu}>
            Team
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            href="/contact"
            className={styles.mobileButton}
            onClick={closeMenu}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}