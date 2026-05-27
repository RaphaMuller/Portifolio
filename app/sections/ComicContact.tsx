import { useState } from "react";
import { motion } from "framer-motion";
import { SiGit, SiLinkerd } from "react-icons/si";
import { Mail, Send } from "lucide-react";

export function ComicContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#FF4444] relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div
            className="inline-block bg-white text-[#FF4444] px-6 py-2 text-4xl md:text-5xl border-4 border-black shadow-[5px_5px_0_0_#000]"
            style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.08em" }}
          >
            CAPÍTULO 4: MISSÃO CONTATO
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Speech bubbles / social */}
          <div className="flex flex-col gap-5">
            {/* Big speech bubble */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_#000]"
            >
              <div className="absolute -bottom-5 right-10 w-0 h-0
                border-l-[12px] border-l-transparent
                border-t-[20px] border-t-black
                border-r-[12px] border-r-transparent" />
              <div className="absolute -bottom-3 right-11 w-0 h-0
                border-l-[10px] border-l-transparent
                border-t-[16px] border-t-white
                border-r-[10px] border-r-transparent" />

              <h3
                className="text-2xl text-[#FF4444] mb-3"
                style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em" }}
              >
                PRECISA DE UM HERÓI?
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Comic Neue', cursive" }}
              >
                Estou disponível para projetos freelance, colaborações e novas oportunidades.
                Vamos criar algo incrível juntos!
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              {[
                { icon: Mail, label: "raphaelmuller61@gmail.com", color: "#FFE44D", textColor: "#000" },
                { icon: SiGit, label: "github.com/RaphaelMuller", color: "#1a1a2e", textColor: "#fff" },
                { icon: SiLinkerd, label: "linkedin.com/in/RaphaelMuller", color: "#0077B5", textColor: "#fff" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href="#"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 border-4 border-black p-3 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] transition-all"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon size={20} color={item.textColor} />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "'Comic Neue', cursive",
                      fontWeight: "bold",
                      color: item.textColor,
                    }}
                  >
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000]"
          >
            <div className="bg-black text-[#FFE44D] px-4 py-2 -mx-6 -mt-6 mb-5 border-b-4 border-black">
              <span
                className="text-xl"
                style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em" }}
              >
                📨 ENVIAR MENSAGEM
              </span>
            </div>

            {sent ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-10"
              >
                <div
                  className="text-5xl mb-3"
                  style={{ fontFamily: "'Bangers', cursive" }}
                >
                  POW! ✉️
                </div>
                <p
                  className="text-lg text-[#FF4444]"
                  style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em" }}
                >
                  MENSAGEM ENVIADA COM SUCESSO!
                </p>
                <p
                  className="text-sm text-gray-500 mt-2"
                  style={{ fontFamily: "'Comic Neue', cursive" }}
                >
                  Responderei em breve, herói!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    className="block text-sm mb-1 text-black"
                    style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em" }}
                  >
                    SEU NOME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2 bg-[#fffef0] focus:outline-none focus:border-[#FF4444] focus:shadow-[2px_2px_0_0_#FF4444]"
                    style={{ fontFamily: "'Comic Neue', cursive" }}
                    placeholder="Peter Parker..."
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 text-black"
                    style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em" }}
                  >
                    SEU EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2 bg-[#fffef0] focus:outline-none focus:border-[#FF4444] focus:shadow-[2px_2px_0_0_#FF4444]"
                    style={{ fontFamily: "'Comic Neue', cursive" }}
                    placeholder="heroi@marvel.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 text-black"
                    style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em" }}
                  >
                    SUA MISSÃO
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2 bg-[#fffef0] focus:outline-none focus:border-[#FF4444] focus:shadow-[2px_2px_0_0_#FF4444] resize-none"
                    style={{ fontFamily: "'Comic Neue', cursive" }}
                    placeholder="Preciso de um herói para..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#FF4444] text-white border-4 border-black py-3 text-xl shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0"
                  style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.1em" }}
                >
                  <Send size={18} /> LANÇAR MENSAGEM!
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
