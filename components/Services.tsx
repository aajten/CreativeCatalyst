"use client";

import { useState } from "react";
import styles from "./Services.module.css";
import { serviceCategories } from "@/data/services";

export default function Services() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section id="services" className={styles.services}>
      <div className="wrap">
        <div className={styles.heading}>
          <h2>Our Services</h2>
          <p>
            Comprehensive consulting, training, quality, and operational
            excellence solutions for manufacturing organizations.
          </p>
        </div>

        {serviceCategories.map((category) => (
          <div key={category.title} className={styles.category}>
            <h3 className={styles.categoryTitle}>
              {category.title}
            </h3>

            <div className={styles.grid}>
              {category.services.map((service) => {
                const cardId = `${category.title}-${service.name}`;
                const isOpen = activeCard === cardId;

                return (
                  <div
                    key={cardId}
                    className={`${styles.card} ${
                      isOpen ? styles.active : ""
                    }`}
                    onClick={() => toggleCard(cardId)}
                  >
                    <div className={styles.cardHeader}>
                      <h4>{service.name}</h4>
                      <span>{isOpen ? "−" : "+"}</span>
                    </div>

                    {isOpen && (
                      <div className={styles.cardContent}>
                        <p>{service.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}