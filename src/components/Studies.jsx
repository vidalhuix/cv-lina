import { WorkItem } from './WorkItem';

export const Studies = () => {
  const data = [
      {
          year: '2023 *',
          title: 'Handledarutbildning',
          duration: '',
          location: 'på distans',
          details:
          'Utbildning online om handledning om att ha elever på förskolan.',
        },
        {
            year: '2022 *',
            title: 'Flerspråkighet i förskolan',
            duration: 'Tvådagarskurs i erspråkighet i förskolan.',
            location: 'Stockholm',
            details:
            'Barns erspråkighet ufrån forskning och läroplanen, barnens modersmål och hur detta kan llämpas i verksamheten samt hur vi pedagoger kan ha ett mer språkutvecklande arbetssätt samt hur vi kan använda oss av litteracitet för att jobba med barnens flerspråkighet.',
        },
        {
          year: '2018',
          title: 'Förskollärarutbildning - Södertörns Högskola',
          duration: '3 år',
          location: 'Huddinge',
          details:
            'Erfarenhetsbaserad program med interkulturell inriktning',
        },
    {
        year: '*',
        title: 'Brandövning',
        duration: 'Okt 2022',
        location: 'Stockholm',
        details:
        '',
    },
    {
        year: '*',
        title: 'Hjärt-Lungräddning',
        duration: 'Sep 2021, Dec 2024',
        location: 'Stockholm',
        details:
        '',
    },
    {
        year: '2013 *',
        title: 'Empatisk kommunikation',
        duration: 'Från 2013, under perioden jag jobbade med Najs',
        location: 'Stockholm',
        details:
        '"Nonviolent-Communicaon" (NVC) är ett förhållningssätt och går ut på att lyssna på vad barnen säger utan att bedöma. Att sätta ord på vad deras behov är under stunden samt vad de egentligen vill ha, genom att lyssna på barnen genom NVC uppmuntrar det till att de blir mer självständiga i deras känslor samt visar hänsyn till andra människor. När barn känner sig hörda blir det lättare att kommunicera och skapa en dialog om vad som är rätt eller fel.',
    },
    {
      year: '2007',
      title: 'Nutrion - Stockholms Universitet',
      duration: '6 år',
      location: 'Stockholm',
      details:
        'Nutrion Utbildningsprogrammet',
    },
];
return (
    <div id="resume" className="mx-auto mb-7 bg-stone-100 pt-0 p-4 sm:pl-10">
      <div className="relative m-auto mb-7 max-w-3xl pt-0 p-4">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
        Utbildning och *Kurser
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
