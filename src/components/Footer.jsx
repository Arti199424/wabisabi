

const Footer = () => {
  return (
    <>
   <div className="bg-custom-top-footer opacity-75 px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-20 w-full h-auto">
          <p className="col-span-1 md:col-span-8 font-bold text-lg md:text-xl lg:text-2xl text-gray-400 font-sans leading-relaxed tracking-wide text-opacity-75 text-center md:text-start">
            Over the years, working with Nature has helped us realise less is more and usually more effective. We intend to continue working hard to make simple systems more sophisticated.
          </p>
          <ul className="col-span-1 md:col-span-2 text-base md:text-lg lg:text-xl text-gray-400 font-sans leading-relaxed tracking-wide text-opacity-75 text-center ">
            <li className="text-gray-400">PROJECTS</li>
            <li className="text-white font-bold">Jajam</li>
          </ul>
          <ul className="col-span-1 md:col-span-2 text-base md:text-lg lg:text-xl text-gray-400 font-sans leading-relaxed tracking-wide text-opacity-75 space-y-3 text-center ">
            <li className="text-gray-400">PLATFORM</li>
            <li className="text-white font-bold">Workshops</li>
            <li className="text-white font-bold">Collections</li>
            <li className="text-white font-bold">Notes</li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white px-6 py-6 md:px-12 md:py-8 lg:px-24 lg:py-12 font-semibold font-sans text-lg md:text-xl leading-relaxed tracking-wide text-opacity-85 w-full h-auto ">
  <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-12 lg:gap-16">
    <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-2">
      <span>Instagram</span>
      <span>Contact Us</span>
    </div>
    <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      <span>Terms</span>
      <span>Privacy Policy</span>
      <span>Return Policy</span>
    </div>
  </div>
</div>
    
    </>
  );
};

export default Footer;

