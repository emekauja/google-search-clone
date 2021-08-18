import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import profilePic from '../../public/images/avatar.jpg';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
  const router = useRouter();
  const searchRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const query = searchRef.current.value;

    if (!query) return;

    router.push(`/search?term=${query}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <div className="mr-4">
          <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            width={92}
            height={30}
            className="cursor-pointer"
            onClick={() => router.push('/')}
            alt="google_logo"
          />
        </div>

        <form className="flex flex-grow border px-6 py-2 mr-auto border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            value={router.query.term}
          />
          {
            <XIcon
              className="h-7 pr-2 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110 border-r "
              onClick={() => {
                searchRef.current.value = '';
              }}
            />
          }
          <MicrophoneIcon className="h-6 mr-3 hidden text-blue-500 sm:inline-flex pl-3" />
          <SearchIcon className="h-6 mr-3 hidden text-blue-500 sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="pt-1 pl-4 justify-end" url={profilePic} />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
