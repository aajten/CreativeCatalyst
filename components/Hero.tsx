import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.heroGrid}>
          
          {/* Left Side - Logo */}
          <div className={styles.logoSection}>
            <Image
              src="/images/logo.jpg"
              alt="Creative Catalyst"
              width={450}
              height={450}
              priority
              className={styles.logo}
            />
          </div>

          {/* Right Side - Content */}
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              Transforming Potential Into Success
            </div>

            <h1>
              We Shape Raw Potential Into Powerful Results
            </h1>

            <p>
              At Creative Catalyst, we shape raw potential into powerful
              results. Just like an origami bird turns a plain sheet of paper
              into a masterpiece, we transform everyday business processes
              into meaningful success.
            </p>

            <p>
              With colors that mirror a rising sun, we signal a bright future
              for your business. We provide the vision, the path, and the
              hands-on partnership your team needs to secure winning outcomes.
            </p>

            <div className={styles.actions}>
              <Link
                href="/contact"
                className={styles.primaryButton}
              >
                Book Consultation
              </Link>

              <Link
                href="/about"
                className={styles.secondary}
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}