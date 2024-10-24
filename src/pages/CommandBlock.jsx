import { Card, CardContent } from '@/components/ui/card';
import { useState, useRef, useEffect } from 'react';

const CommandBlock = ({ command, description }) => {
  const [hovered, setHovered] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const commandRef = useRef(null);

  useEffect(() => {
    // Check if the command needs scrolling
    const element = commandRef.current;
    if (element) {
      const isOverflowing = element.scrollWidth > element.clientWidth;
      setShouldScroll(isOverflowing);
    }
  }, [command]);

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex flex-col space-y-3">
          <div className="relative rounded-lg bg-neutral-950 p-4 font-mono text-sm text-neutral-50">
            <div className="absolute top-3 left-3 flex space-x-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="relative overflow-hidden">
              <div
                ref={commandRef}
                className={`whitespace-nowrap ${
                  hovered && shouldScroll
                    ? 'animate-scroll transition-transform duration-[20s] ease-linear'
                    : 'truncate'
                }`}
              >
                <pre className="mt-4 text-neutral-100">{command}</pre>
              </div>
              {shouldScroll && !hovered && (
                <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-neutral-950"></div>
              )}
            </div>
          </div>
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
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </Card>
  );
};

export default CommandBlock;
