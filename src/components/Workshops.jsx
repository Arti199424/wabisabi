

const Workshops = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-custom-yellow px-4 md:px-52 py-12 md:py-24 gap-8 md:gap-20">
      <p className="col-span-1 md:col-span-8 text-lg md:text-2xl font-bold text-custom-red text-opacity-50 font-sans leading-relaxed tracking-wide text-center md:text-start">
        We are a small team practicing traditional techniques in block printing and natural dyes. Over many years, hands-on craft experiences have taught us the bounty and fragility of Nature’s colours. We are delighted to share this knowledge with you.
      </p>
      <div className="col-span-1 md:col-span-4 text-center sm:text-center">
        <p className="text-custom-red text-lg md:text-xl text-opacity-50 font-sans leading-relaxed tracking-wide font-semibold">
          Explore our Workshops and
        </p>
        <p className="text-custom-red text-lg md:text-xl text-opacity-50 font-sans leading-relaxed tracking-wide font-semibold">
          Excursions—
        </p>
        <p className="py-2">
          <button className="bg-custom-red border rounded-full text-white text-lg md:text-2xl font-bold py-2 px-20 md:px-20 sm:px-10 text-opacity-85 font-sans leading-relaxed tracking-wide">
            Workshops
          </button>
        </p>
      </div>
    </div>
  )
}

export default Workshops
