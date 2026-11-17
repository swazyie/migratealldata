"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

type ContactFormProps = {
  endpoint?: string;
};

export default function ContactForm({ endpoint }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    if (!endpoint) {
      setStatus("error");
      setMessage("This form is not connected yet. Add your Basin form URL to the environment configuration.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (formData.get("_gotcha")) return;

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Basin did not accept the submission.");

      form.reset();
      setStatus("success");
      setMessage("Thanks for reaching out. Your note is on its way, and we’ll be in touch.");
    } catch {
      setStatus("error");
      setMessage("We couldn’t send your note just now. Please try again in a moment.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Jordan Lee" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Work email <span aria-hidden="true">*</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jordan@company.com" required />
        </div>
        <div className="form-field form-field-wide">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Your organization" />
        </div>
        <div className="form-field">
          <label htmlFor="source-system">Moving from</label>
          <input id="source-system" name="source_system" type="text" placeholder="Current tool or system" />
        </div>
        <div className="form-field">
          <label htmlFor="destination-system">Moving to</label>
          <input id="destination-system" name="destination_system" type="text" placeholder="New tool or system" />
        </div>
        <div className="form-field form-field-wide">
          <label htmlFor="project-notes">What would be useful for us to know?</label>
          <textarea id="project-notes" name="project_notes" rows={3} placeholder="A little about the move, timing or the parts you’re thinking through." />
        </div>
      </div>

      <div className="form-trap" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-submit-row">
        <button className="button button-lime form-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? <>Sending <LoaderCircle size={16} className="spinner" aria-hidden="true" /></> : <>Send your note <ArrowRight size={16} aria-hidden="true" /></>}
        </button>
        <span className="form-required">* Required</span>
      </div>
      <p className={`form-status form-status-${status}`} aria-live="polite" role={status === "error" ? "alert" : "status"}>
        {message}
      </p>
    </form>
  );
}