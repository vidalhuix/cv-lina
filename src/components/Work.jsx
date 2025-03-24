import { WorkItem } from './WorkItem';

export const Work = () => {
  const data = [
    {
      year: '2021 - nuvarande',
      title: 'Förskollärare - Förskolan Miniforskarna',
      duration: '3 och halv år',
      location: 'Södermalm',
      details:
        'Jobbar som förskollärare och driver undervisningen i verksamheten llsammans med arbetslaget. Jobbar mycket med SKA-verktyg för a lya det pedagogiska innehållet i undervisningen samt uppnå de naonella målen.',
    },
    {
      year: '2013',
      title: 'Förskoleassistent - Ängbybarnens förskolor/Najs AB',
      duration: '7 år',
      location: 'Bromma',
      details:
        'Jobbade i barngrupp, planerade och jobbade med dokumentationen samt med undervisningen med arbetslaget, hade ansvar över felanmälningar och höll utvecklingssamtal med föräldrar. Andra arbetsuppgier vär att jag fick vara med och utveckla förskolans verksamhet och värderingar utifrån styrdokument.',
    },
    {
      year: '2012',
      title: 'Vikarie - 123 vikariepoolen',
      duration: '1 och halv år',
      location: 'Stockholm',
      details:
        'Jobbade som vikarie på förskolor och skolor för både låg- och högstadium.',
    },
  ];
  return (
    <div id="resume" className="m-auto mt-7 bg-gray-100 pb-0 p-4 sm:pl-10">
      <div className="relative m-auto mt-7 max-w-3xl pb-0 p-4">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
          Erfarenhet
        </h1>
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};
