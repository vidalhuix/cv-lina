import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import clsx from 'clsx';

export const BtnDownload = () => {
  const getFilePath = () => `/CV Lina - Förskollärare.pdf`;

  const handleDownload = () => {
    window.open(getFilePath(), '_blank');
  };

  return (
    <div className="p-4 pl-0">
      <button
        onClick={handleDownload}
        className="group relative flex cursor-pointer flex-row items-center justify-center border-gray-800 p-1 px-4 py-2 duration-100 hover:scale-105"
      >
        <FaFileDownload size={42} className={clsx(`fill-text-teal-600`)} />
        <span
          className={clsx(
            'group-hover:animate-reveal absolute hidden w-[300px] overflow-hidden pl-[150px] text-sm font-semibold',
            `text-text-teal-600`,
            'group-hover:block'
          )}
        >
          CV Lina - Förskollärare.pdf
        </span>
      </button>
    </div>
  );
};

export const BtnLinkedIn = () => {
  return (
    <div className="p-4 pr-0">
      <a
        href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={50}
          className={clsx(`fill-text-teal-600`, 'hover:scale-105')}
        />
      </a>
    </div>
  );
};
