const images = [
  { src: '/hyrox.jpg', alt: 'Training Hard', caption: 'Work. Train. Repeat.' },
  {
    src: '/baliBeach.jpg',
    alt: 'Coding Focus',
    caption: 'Build, Learn, Grow.',
  },
  {
    src: '/hiking.jpg',
    alt: 'HYROX Training',
    caption: 'Keep Moving Forward.',
  },
  {
    src: '/baliJungle.jpg',
    alt: 'Reading & Growth',
    caption: 'Expand Your Mind.',
  },
];

const Home = () => {
  return (
    <div className="flex flex-grow items-start justify-center">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          🔥 The 247 Mindset
        </h1>
        <p className="mt-2 text-center text-lg italic text-gray-600">
          "Discipline, Growth, Execution—Every. Single. Day."
        </p>

        {/* Image Board */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-lg font-semibold text-white">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">
              🚀 Relentless Growth
            </h2>
            <p className="text-gray-600">
              Never settle. Keep learning, keep pushing.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">
              🏋️ Discipline Over Motivation
            </h2>
            <p className="text-gray-600">
              You won’t always feel like it. Do it anyway.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">
              🔥 Execution Over Excuses
            </h2>
            <p className="text-gray-600">Plans mean nothing without action.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
