"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { contactCopy } from "@/app/constants/contactLinks";
import { motionPresets } from "@/app/constants/motionPresets";
import { useContactForm } from "@/app/sections/hooks/useContactForm";

interface ComicContactFormProps {
  className?: string;
}

/**
 * @example
 * <ComicContactForm />
 */
export function ComicContactForm({ className = "" }: ComicContactFormProps) {
  const { form, setForm, sent, loading, error, handleSubmit } =
    useContactForm();

  return (
    <motion.div
      {...motionPresets.slideInRight}
      className={`bg-comic-dots relative z-10 border-3 border-black bg-white/60 p-3 shadow-comic-md sm:border-4 sm:p-4 sm:shadow-comic md:p-5 md:shadow-comic-lg ${className}`}
    >
      <div className="-mx-3 -mt-3 mb-2 flex items-center justify-between border-b-2 border-black bg-white px-3 py-1 text-black sm:-mx-4 sm:-mt-4 sm:mb-2.5 sm:border-b-4 sm:px-4 sm:py-1.5 md:-mx-5 md:-mt-5 md:mb-3">
        <h3 className="font-bangers text-base tracking-wide sm:text-lg md:text-xl">
          {contactCopy.formHeading}
        </h3>
      </div>

      {sent ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="py-6 text-center sm:py-10"
        >
          <div className="mb-2 font-bangers text-3xl sm:mb-3 sm:text-5xl">
            {contactCopy.successSfx}
          </div>
          <p className="font-bangers text-base tracking-wide text-comic-red sm:text-lg">
            {contactCopy.successTitle}
          </p>
          <p className="mt-1 font-comic text-xs text-contact-hint sm:mt-2 sm:text-sm">
            {contactCopy.successBody}
          </p>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-1.5 sm:gap-2 md:gap-3"
        >
          <div>
            <label htmlFor="contact-name" className="comic-field-label">
              {contactCopy.nameLabel}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              className="comic-input"
              placeholder={contactCopy.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="comic-field-label">
              {contactCopy.emailLabel}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              className="comic-input"
              placeholder={contactCopy.emailPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="comic-field-label">
              {contactCopy.messageLabel}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={2}
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              className="comic-input resize-none sm:min-h-12.5 md:min-h-16.25"
              placeholder={contactCopy.messagePlaceholder}
            />
          </div>

          <ActionBadge
            theme="red"
            interactive
            className="w-full justify-center p-0 text-center"
          >
            <button
              type="submit"
              disabled={loading}
              className="flex w-full cursor-pointer items-center justify-center gap-1.5 py-1.5 font-bangers text-sm tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50 sm:py-2 sm:text-base md:py-2.5 md:text-xl"
            >
              <Send className="size-4 sm:size-5" aria-hidden="true" />{" "}
              {loading ? contactCopy.submitLoading : contactCopy.submitIdle}
            </button>
          </ActionBadge>

          {error && (
            <p
              role="alert"
              className="mt-2 text-center font-comic text-sm font-bold text-comic-danger"
            >
              {contactCopy.errorMessage}
            </p>
          )}
        </form>
      )}
    </motion.div>
  );
}
