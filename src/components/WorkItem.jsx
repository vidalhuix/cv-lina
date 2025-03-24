export const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="md:row relative flex flex-col border-l-[2px] border-teal-600">
      <li className="mb-5 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-white bg-teal-600" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block rounded-md bg-teal-600 px-2 py-1 font-semibold text-white">
            {year}
          </span>
          <span className="text-lg font-semibold text-gray-800">
            {title}
            <span className="my-1 text-sm leading-none font-normal text-stone-400">
              {' '}
              {duration}
            </span>{' '}
          </span>
          <span className="w-full">{details}</span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500"></p>
      </li>
    </ol>
  );
};
