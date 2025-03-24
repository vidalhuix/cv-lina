const skills = {
  kompetenser: [
    'Ansvarsfull',
    'Lätt för att samarbeta med andra',
    'Har mycket tålamod',
    'Är alltid lugn i krävande situationer',
  ],
  språk: ['Svenska', 'Engelska', 'Arabiska'],
  media: ['V-klass', 'Prion'],
  övrigt: ['B-körkort'],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="m-auto mt-7 mb-7 white p-4 pb-0 sm:pl-10">
      <div className="relative m-auto mt-7 max-w-3xl pb-0 p-4">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
          Färdigheter
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <span className="inline-block rounded-md text-center w-full bg-teal-600 px-2 py-1 font-semibold text-white capitalize">
                {category}
              </span>
              <ul className="mt-2 space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="border-gray-300 bg-white p-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
