import BackgroundMain from '/src/assets/bg-header.jpg';
import ProfileImg from '/src/assets/profile-pic.png';
import { TypeAnimation } from 'react-type-animation';
import { BtnDownload, BtnLinkedIn } from './Buttons';

export default function Main() {
  return (
    <div id="main" className="relative">
      <img
        className="h-[75vh] w-full object-cover object-left opacity-10"
        src={BackgroundMain}
        alt="/"
      />
      <div className="hh-[75vh] absolute top-0 left-0 w-full bg-white/5">
        <div className="m-auto mt-15 flex h-full w-full max-w-4xl flex-col items-start justify-center p-4 pl-10">
          <h1 className="my-4 text-4xl text-gray-800 sm:text-5xl">
            
            <br />
            
            <span className="text-teal-600"> Lina Vidal</span>
          </h1>
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            Legitimerad Förskollärare.
          </h1>

          <h2 className="flex pt-4 text-2xl text-gray-800 sm:text-3xl">
            <TypeAnimation
              sequence={[
                'Jag är pedagog.',
                1000,
                'Med utförskande arbetssätt.',
                1000,
                'Jag är sammarbetsvilligt.',
                1000,
                'Alltid för barnets bästa.',
                1000,
                'Ingen protest.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex w-full max-w-[100px] flex-row items-center justify-between pt-6">
            <BtnLinkedIn className="pl-0" />
            <BtnDownload />
          </div>
        </div>
      </div>
      <img
        src={ProfileImg}
        alt="profile image"
        className="absolute right-4 bottom-11 h-[200px] w-[200px] translate-y-1/3 scale-x-[-1] rotate-[-1deg] rounded-full border-8 border-white object-cover shadow-2xl md:bottom-1/5 md:mr-[25%] md:h-[300px] md:w-[300px]"
      ></img>
    </div>
  );
}
