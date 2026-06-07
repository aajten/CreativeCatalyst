"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  company: string;
  message: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Consultation request submitted successfully.");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          company: "",
          message: "",
        });
      } else {
        setSuccess("Unable to submit request.");
      }
    } catch {
      setSuccess("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.contact}>
      <div className="wrap">
        <div className={styles.heading}>
          <div className={styles.eyebrow}>
            Contact Us
          </div>

          <h2>
            Let's Build Your Next Success Story
          </h2>

          <p>
            Whether you're looking to improve quality systems,
            supplier performance, manufacturing excellence,
            or operational efficiency, our experts are ready to help.
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.infoCard}>
            <h3>Why Work With Creative Catalyst?</h3>

            <ul>
              <li>✔ 40+ Years of Manufacturing Expertise</li>
              <li>✔ Automotive & Supplier Excellence Specialists</li>
              <li>✔ Lean, Quality & Industry 4.0 Consulting</li>
              <li>✔ Hands-On Implementation Support</li>
              <li>✔ Customized Training Programs</li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <input
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell us about your requirement"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              disabled={loading}
              className={styles.button}
            >
              {loading ? "Submitting..." : "Book Consultation"}
            </button>

            {success && (
              <p className={styles.success}>
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}