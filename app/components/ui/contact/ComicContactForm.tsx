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
      className={`bg-comic-dots relative z-10 border-4 border-black bg-white/60 p-6 shadow-[8px_8px_0_0_#000] ${className}`}
    >
      <div className="-mx-6 -mt-6 mb-5 flex items-center justify-between border-b-4 border-black bg-white px-4 py-2 text-black">
        <span className="font-bangers text-xl tracking-wide">
          📨 ENVIAR MENSAGEM
        </span>
      </div>

      {sent ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="py-10 text-center"
        >
          <div className="mb-3 font-bangers text-5xl">POW! ✉️</div>
          <p className="font-bangers text-lg tracking-wide text-comic-red">
            MENSAGEM ENVIADA COM SUCESSO!
          </p>
          <p className="mt-2 font-comic text-sm text-gray-500">
            Responderei em breve, herói!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block font-bangers text-sm tracking-wide text-black">
              SEU NOME
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-2 border-black bg-sky-50 px-3 py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
              placeholder="Peter Parker..."
            />
          </div>
          <div>
            <label className="mb-1 block font-bangers text-sm tracking-wide text-black">
              SEU EMAIL
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border-2 border-black bg-sky-50 px-3 py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
              placeholder="heroi@marvel.com"
            />
          </div>
          <div>
            <label className="mb-1 block font-bangers text-sm tracking-wide text-black">
              SUA MISSÃO
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none border-2 border-black bg-sky-50 px-3 py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
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
              className="text-md flex w-full cursor-pointer items-center justify-center gap-2 py-2 font-bangers tracking-wider sm:py-3 sm:text-xl disabled:opacity-50"
            >
              <Send size={18} /> {loading ? "ENVIANDO..." : "LANÇAR MENSAGEM!"}
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
