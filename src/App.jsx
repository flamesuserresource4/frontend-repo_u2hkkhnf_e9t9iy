import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section with Spline 3D Torus */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        {/* Spline Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Blue glow gradient overlays (non-blocking) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-[0_4px_30px_rgba(59,130,246,0.45)]">
              Flames Blue
            </h1>
            <p className="mt-4 text-blue-200/90 text-lg md:text-xl">
              A modern, futuristic canvas to build apps through conversation
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-6 py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        {/* Subtle radial pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_55%)]" />

        <div className="relative max-w-3xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            <div className="bg-slate-800/40 backdrop-blur border border-blue-500/20 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Describe your idea</h3>
                  <p className="text-blue-200/80 text-sm">Use the chat panel on the left to tell the AI what you want to build.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur border border-blue-500/20 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Watch it build</h3>
                  <p className="text-blue-200/80 text-sm">Your app will appear here in real time as the AI generates the code.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur border border-blue-500/20 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Refine and iterate</h3>
                  <p className="text-blue-200/80 text-sm">Continue the conversation to add features, tweak visuals, and ship.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-blue-300/70">No coding required • Just describe what you want</p>
        </div>
      </section>
    </div>
  );
}

export default App;
