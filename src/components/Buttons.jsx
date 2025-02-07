import { FaLinkedin, FaFileDownload } from 'react-icons/fa';

export const BtnDownload = ({ color }) => {
  const getFilePath = () => {
    return `/CV Lina - Förskollärare.pdf`;
  };

  const handleDownload = () => {
    const filePath = getFilePath();
    window.open(filePath, '_blank');
  };

  const colorToUse = color || 'gray-800';

  return (
    <div className="p-4 pl-0">
      <button
        onClick={handleDownload}
        className="group relative flex cursor-pointer flex-row items-center justify-center border-gray-800 p-1 px-4 py-2 duration-100 hover:scale-105"
      >
        <FaFileDownload size={42} className={`fill-${colorToUse}`} />
        <span
          className={`group-hover:animate-reveal absolute hidden w-[300px] overflow-hidden pl-[150px] text-sm font-semibold text-${colorToUse} group-hover:block`}
        >
          CV Lina - Förskollärare.pdf
        </span>
      </button>
    </div>
  );
};

export const BtnLinkedIn = ({ color }) => {
  const colorToUse = color || 'gray-800';

  return (
    <div className="p-4 pr-0">
      <a
        href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
        target="_blank"
      >
        <FaLinkedin
          size={50}
          className={`mr-2 cursor-pointer fill-${colorToUse} hover:scale-105`}
        />
      </a>
    </div>
  );
};
