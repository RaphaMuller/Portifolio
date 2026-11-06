"use client";

import { useState } from "react";

const DEFAULT_FORMSPREE_URL = "https://formspree.io/f/mlgynrba";
const FORMSPREE_URL =
  process.env.NEXT_PUBLIC_FORMSPREE_URL || DEFAULT_FORMSPREE_URL;
const SUCCESS_RESET_DELAY_MS = 4000;

/**
 * @example
 * const { form, setForm, sent, loading, error, handleSubmit } = useContactForm();
 */
export function useContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), SUCCESS_RESET_DELAY_MS);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { form, setForm, sent, loading, error, handleSubmit };
}
