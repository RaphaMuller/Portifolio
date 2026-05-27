export function ComicFooter() {
  return (
    <footer
      className="border-t-4 border-comic-yellow bg-black py-8 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="mb-2 font-bangers text-2xl tracking-bangers-tight text-[#FFE44D]">
          FIM!
        </p>
        <p className="text-sm text-gray-400">
          © 2026 Raphael Muller · Desenvolvido com ☕ e muito código
        </p>
        <p className="mt-2 text-xs text-gray-600">
          &ldquo;Nenhum bug foi prejudicado na criação deste portfólio.&ldquo;
        </p>
        <div className="mt-4 flex justify-center gap-4">
          {["#hero", "#about", "#skills", "#projects", "#contact"].map(
            (href) => (
              <button
                key={href}
                onClick={() =>
                  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
                }
                className="h-2 w-2 rounded-full bg-[#FFE44D] transition-colors hover:bg-[#FF4444]"
              />
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
