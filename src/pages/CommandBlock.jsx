import { useState, useRef, useEffect } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CommandBlock = ({ command, description }) => {
  const [hovered, setHovered] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [copied, setCopied] = useState(false);
  const commandRef = useRef(null);

  useEffect(() => {
    const element = commandRef.current;
    if (element) {
      const isOverflowing = element.scrollWidth > element.clientWidth;
      setShouldScroll(isOverflowing);
    }
  }, [command]);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-3">
          <div className="relative rounded-lg bg-neutral-950 p-4 font-mono text-sm text-neutral-50">
            {/* Header with colored dots */}
            <div className="absolute top-3 left-3 flex space-x-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            </div>

            {/* Command and Copy Section */}
            <div className="relative flex items-center">
              {/* Command Section with overflow container */}
              <div className="relative flex-1 overflow-hidden">
                <div
                  ref={commandRef}
                  className={`whitespace-nowrap ${
                    hovered && shouldScroll
                      ? 'animate-scroll transition-transform duration-[20s] ease-linear'
                      : 'truncate'
                  }`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <pre className="mt-4 text-neutral-100">{command}</pre>
                </div>
                {shouldScroll && !hovered && (
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-neutral-950"></div>
                )}
              </div>

              {/* Fixed Copy Button */}
              <div className="ml-2 shrink-0">
                <button
                  onClick={handleCopy}
                  className="rounded px-2 py-1 text-xs text-neutral-400 transition-colors duration-200 hover:bg-neutral-700 hover:text-neutral-200"
                >
                  {copied ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </CardContent>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(calc(-50%));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </Card>
  );
};

export default CommandBlock;