export const themeClasses = {
  dark: {
    bg: 'bg-slate-900',
    shadow: 'bg-black',
    roof: 'bg-slate-950',
    windowOn: 'bg-yellow-300 shadow-[0_0_8px_2px_rgba(253,224,71,0.6)]',
    windowOff: 'bg-slate-800'
  },
  default: {
    bg: 'bg-slate-600',
    shadow: 'bg-black',
    roof: 'bg-slate-900',
    windowOn: 'bg-comic-yellow shadow-[0_0_12px_2px_rgba(255,255,255,0.7)]',
    windowOff: 'bg-slate-800'
  },
  noir: {
    bg: 'bg-black',
    shadow: 'bg-zinc-900',
    roof: 'bg-zinc-950',
    windowOn: 'bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]',
    windowOff: 'bg-zinc-900'
  }
} as const;