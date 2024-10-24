import { Terminal, Copy, CheckCircle2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const CLICommandDesc = ({ commands }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [shouldScroll, setShouldScroll] = useState({});
  const commandRefs = useRef([]);

  useEffect(() => {
    // Check if each command needs scrolling
    commands.forEach((_, index) => {
      const element = commandRefs.current[index];
      if (element) {
        const isOverflowing = element.scrollWidth > element.clientWidth;
        setShouldScroll(prev => ({
          ...prev,
          [index]: isOverflowing
        }));
      }
    });
  }, [commands]);

  const handleCopy = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="mx-auto mt-8 max-w-xl space-y-4">
      {commands.map((cmd, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg bg-neutral-900 p-4 transition-all duration-300 hover:bg-neutral-800"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center justify-between font-mono text-sm text-neutral-200">
            <Terminal className="ml-2 h-4 w-4 shrink-0 text-emerald-500" />
            <div className="relative flex-1 overflow-hidden px-4 py-2">
              <div
                ref={el => commandRefs.current[index] = el}
                className={`whitespace-nowrap ${
                  hoveredIndex === index && shouldScroll[index]
                    ? 'animate-scroll transition-transform duration-[20s] ease-linear'
                    : 'truncate'
                }`}
              >
                <code>{cmd.command}</code>
              </div>
              {shouldScroll[index] && hoveredIndex !== index && (
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-transparent to-neutral-900 group-hover:to-neutral-800" />
              )}
            </div>
            <button
              onClick={() => handleCopy(cmd.command, index)}
              className="shrink-0 rounded px-2 py-1 text-xs text-neutral-400 transition-colors duration-200 hover:bg-neutral-700 hover:text-neutral-200"
            >
              {copiedIndex === index ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <p className="mt-2 text-xs text-neutral-400">{cmd.description}</p>
          <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      ))}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          animation-play-state: running;
        }
        .animate-scroll:hover {
          animation-play-state: running;
        }
      `}</style>
    </div>
  );
};

export default CLICommandDesc;