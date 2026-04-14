const Hero = () => {
  return (
    <section className="relative w-full h-[95vh] bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="w-16 h-16 mx-auto mb-4 border-2 border-gray-700 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p className="text-sm">Video Placeholder</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
