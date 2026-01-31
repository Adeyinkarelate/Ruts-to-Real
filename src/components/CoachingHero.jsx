export default function AboutSection() {
  return (
    <section className="w-full bg-white  pt-30">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10 lg:gap-20">
        
        {/* Image */}
        <div className="relative flex-1 w-full max-w-sm lg:max-w-md">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="coach-portrait"
            className="w-full h-112.5 rounded-lg shadow-card object-cover"
          />

          {/* Quote bubble */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 lg:-bottom-8 bg-sage text-soil rounded-3xl px-6 py-4 shadow-soft text-sm font-serif italic leading-relaxed max-w-60">
            “The surest way to predict the <span className="italic font-medium text-olive">future</span> is to create it <span className="italic font-medium text-olive">yourself.</span>”
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-left max-w-lg mt-16 lg:mt-0">
          <h2 className="text-3xl sm:text-4xl font-serif text-soil mb-4">
            Hi, I’m <span className="italic text-olive">Helen May!</span>
          </h2>

          <p className="text-gray-700 font-sans leading-relaxed mb-4">
            Nice to meet you. I'm your future coach who will bring you results.
          </p>

          <p className="text-gray-700 font-sans leading-relaxed mb-4">
            If you're tired of standing in one place, if you don't see the opportunities for your growth, I will definitely help you.
          </p>

          <p className="text-gray-700 font-sans leading-relaxed mb-6">
            I have over 5 years of experience in this field, during which time I have helped numerous clients achieve their goals and fully their potential.
          </p>

          {/* <button className="px-5 py-3 rounded-radius-soft border border-gray-500 text-soil hover:bg-gray-100 transition font-medium">
            About me
          </button> */}
        </div>
      </div>
    </section>
  );
}
