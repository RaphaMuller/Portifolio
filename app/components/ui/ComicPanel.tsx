interface ComicPanelProps {
  header: string;
  headerTheme?: "red" | "yellow" | "blue" | "black";
  caption?: string;
  children: React.ReactNode;
  className?: string;
}

const headerThemes = {
  red: "bg-comic-red text-white",
  yellow: "bg-comic-yellow text-black",
  blue: "bg-comic-blue text-comic-yellow",
  black: "bg-black text-comic-yellow",
};

export function ComicPanel({
  header,
  headerTheme = "red",
  caption,
  children,
  className = "",
}: ComicPanelProps) {
  return (
    <div className={`border-4 border-black shadow-[8px_8px_0_0_#000] bg-white overflow-hidden ${className}`}>
      
      <div className={`${headerThemes[headerTheme]} border-b-4 border-black px-3 py-1`}>
        <span className="font-bangers text-lg md:text-xl tracking-widest uppercase">{header}</span>
      </div>

      {children}

      {caption && (
        <div className="p-3 border-t-4 border-black bg-comic-yellow">
          <p className="text-center text-xs md:text-sm italic">{caption}</p>
        </div>
      )}
    </div>
  );
}
