import { Terminal, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const CLICommandDisplay = ({ commands }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="mx-auto mt-8 max-w-xl space-y-4">
      {commands.map((command, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg bg-neutral-900 p-2 transition-all duration-300 hover:bg-neutral-800"
        >
          <div className="flex items-center justify-between font-mono text-sm text-neutral-200">
            <Terminal className="ml-2 h-4 w-4 text-emerald-500" />
            <code className="flex-1 px-4 py-2">{command}</code>
            <button
              onClick={() => handleCopy(command, index)}
              className="rounded px-2 py-1 text-xs text-neutral-400 transition-colors duration-200 hover:bg-neutral-700 hover:text-neutral-200"
            >
              {copiedIndex === index ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      ))}
    </div>
  );
};

export default CLICommandDisplay;