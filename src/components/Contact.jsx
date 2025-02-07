import { BtnDownload, BtnLinkedIn } from './Buttons';

export const Contact = () => {
  return (
    <div id="contact" className="mx-auto mt-7 p-4 bg-stone-100">
      <div className="m-auto max-w-3xl p-4">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
          För mera
        </h1>
        <div className="m-auto flex w-full max-w-[100px] flex-row items-center justify-center gap-4 pt-6">
          <BtnLinkedIn color="emerald-700" />

          <BtnDownload color="emerald-700" />
        </div>
      </div>
    </div>
  );
};

