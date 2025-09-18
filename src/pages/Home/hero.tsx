export const Hero = () => (
  <section className="relative min-h-screen bg-brand- flex flex-col items-center justify-center px-4 font-aspekta overflow-hidden">
  {/* Radial grid background */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(#bbbbbb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    
    {/*Main section*/}
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-5xl font-700 text-brand-dark leading-tight mb-6">
        One tool to <span className="underline decoration-brand-lime decoration-4">manage</span><br />
        your restaurant
      </h1>
      <p className="font-aspekta font-400 text-brand-gray mb-8">
        Streamline your restaurant operations with real-time insights and effortless team coordination for seamless, top-notch service every time.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-10">
        <button className="bg-brand-green text-white font-600 rounded-lg px-8 py-3 shadow hover:text-brand-lime hover:bg-brand-dark transition">Get Started</button>
      </div>
    </div>
  </section>
);

