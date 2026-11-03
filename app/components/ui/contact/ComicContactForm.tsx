"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
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
      className={`bg-comic-dots relative z-10 border-3 sm:border-4 border-black bg-white/60 p-3 sm:p-5 md:p-6 shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] ${className}`}
    >
      <div className="-mx-3 -mt-3 mb-2 sm:-mx-5 sm:-mt-5 sm:mb-3.5 md:-mx-6 md:-mt-6 md:mb-5 flex items-center justify-between border-b-2 sm:border-b-4 border-black bg-white px-3 py-1 sm:px-4 sm:py-2 text-black">
        <span className="font-bangers text-base sm:text-lg md:text-xl tracking-wide">
          📨 ENVIAR MENSAGEM
        </span>
      </div>

      {sent ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="py-6 sm:py-10 text-center"
        >
          <div className="mb-2 sm:mb-3 font-bangers text-3xl sm:text-5xl">POW! ✉️</div>
          <p className="font-bangers text-base sm:text-lg tracking-wide text-comic-red">
            MENSAGEM ENVIADA COM SUCESSO!
          </p>
          <p className="mt-1 sm:mt-2 font-comic text-xs sm:text-sm text-gray-500">
            Responderei em breve, herói!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 sm:gap-2.5 md:gap-4">
          <div>
            <label className="mb-0.5 sm:mb-1 block font-bangers text-xs sm:text-sm tracking-wide text-black">
              SEU NOME
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-2 border-black bg-sky-50 px-2.5 py-1 sm:py-1.5 md:py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
              placeholder="Peter Parker..."
            />
          </div>
          <div>
            <label className="mb-0.5 sm:mb-1 block font-bangers text-xs sm:text-sm tracking-wide text-black">
              SEU EMAIL
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border-2 border-black bg-sky-50 px-2.5 py-1 sm:py-1.5 md:py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
              placeholder="heroi@marvel.com"
            />
          </div>
          <div>
            <label className="mb-0.5 sm:mb-1 block font-bangers text-xs sm:text-sm tracking-wide text-black">
              SUA MISSÃO
            </label>
            <textarea
              required
              rows={2}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none border-2 border-black bg-sky-50 px-2.5 py-1 sm:py-1.5 md:py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:min-h-[60px] md:min-h-[85px] sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
              placeholder="Preciso de um herói para..."
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
              className="flex w-full cursor-pointer items-center justify-center gap-1.5 py-1.5 sm:py-2.5 md:py-3 font-bangers text-sm sm:text-base md:text-xl tracking-wider disabled:opacity-50"
            >
              <Send className="size-4 sm:size-5" /> {loading ? "ENVIANDO..." : "LANÇAR MENSAGEM!"}
            </button>
          </ActionBadge>

          {error && (
            <p className="mt-2 text-center font-comic text-sm text-red-600 font-bold">
              💥 Ocorreu um erro! Verifique a URL do Formspree.
            </p>
          )}
        </form>
      )}
    </motion.div>
  );
}
