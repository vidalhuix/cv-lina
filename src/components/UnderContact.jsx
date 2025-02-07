import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

export const UnderContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('Lina.sahar@gmail.com');
    setCopied(true);

    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div className="bg-emerald-700 h-full w-full text-sm">
      <div className="flex flex-col items-center justify-center p-7 text-white">
        <p>Lina Sahar Vidal</p>
        <p>+46769473035</p>
        <p
          onClick={handleCopy}
          className="cursor-copy text-white transition-colors hover:text-gray-300"
        >
          Lina.sahar@gmail.com
        </p>{' '}
        {copied && <FaCopy className="mt-2 text-sm text-gray-300" />}
      </div>
    </div>
  );
};
