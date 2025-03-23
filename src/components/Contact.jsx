import { BtnDownload, BtnLinkedIn } from './Buttons';

export const Contact = () => {
  return (
    <div id="contact" className="white mx-auto mt-7">
      <div className="m-auto max-w-3xl p-4">
        {/* <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
        </h1> */}
        <div className="m-auto flex w-full max-w-[100px] flex-row items-center justify-center gap-4 pt-6">
          <BtnLinkedIn />

          <BtnDownload />
        </div>
      </div>
    </div>
  );
};
