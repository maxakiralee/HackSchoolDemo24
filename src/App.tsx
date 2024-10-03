import './App.css';


function App() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <div className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-m font-semibold text-gray-700">
            Welcome 🤠
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        my name is <span style={{ color: '#d742f5' }}>ACM Hack</span> 🚀
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          aka the best club at UCLA 😎
        </p>

      </div>

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
          <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-25rem)] aspect-[1155/678] w-[80rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-50rem)] sm:w-[110rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="/landerPhoto.jpg"
                    alt="cool acm hack image"
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              What are we? 
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Workshops, hackathons, a community, and so much more!
            </p>
          </div>
        </div>

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 mb-7">
            <span className="text-sm font-medium" style={{ color: '#e342f5' }}>Awesome</span>
              <span className="text-xl font-semibold">Workshops!</span>
              <span className="mt-2 text-zinc-700">
              Interactive workshops to learn, grow, and gain hands-on experience!
              </span>
            </div>
            <img
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 mb-7">
            <span className="text-sm font-medium" style={{ color: '#e342f5' }}>Beginner Friendly</span>
              <span className="text-xl font-semibold">Hackathons!</span>
              <span className="mt-2 text-zinc-700">
              Hackathons that help you learn, grow, and gain create cool things!
              </span>
            </div>
            <img
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 mb-7">
            <span className="text-sm font-medium" style={{ color: '#e342f5' }}>Amazing</span>
              <span className="text-xl font-semibold">Community!</span>
              <span className="mt-2 text-zinc-700">
              A group of coding enthusiasts who inspire, support, and thrive together!
              </span>
            </div>
            <img
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
          </li>
        </ol>

      </div>
    </div>
  );
}

export default App;
