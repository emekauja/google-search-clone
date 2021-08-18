import Image from 'next/image';

function Avatar({ url, className }) {
  return (
    <div className={`${className}`}>
      <Image
        className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110`}
        loading="lazy"
        width={40}
        height={40}
        src={url}
        alt="profile"
      />
    </div>
  );
}

export default Avatar;
