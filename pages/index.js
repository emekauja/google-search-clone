/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Avatar from './components/Avatar';
import profilePic from '../public/images/avatar.jpg';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Footer from './components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const searchRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const query = searchRef.current.value;

    if (!query) return;

    router.push(`/search?term=${query}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Search Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full py-2 px-5 text-sm justify-between font-[] text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url={profilePic} />
        </div>
      </header>

      <form className="flex flex-col items-center mt-28 flex-grow w-4/5">
        <img
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google_logo"
          className="h-[46px] w-[136px] sm:h-[92px] sm:w-[272px]"
        />
        <div className="flex w-full ml-5 mt-6 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
            ref={searchRef}
          />
          <MicrophoneIcon className="h-5 mr-3 text-blue-500" />
        </div>

        <div className="flex flex-col w-1/2 mt-8 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-3">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
