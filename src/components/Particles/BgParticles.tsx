
export default function BgParticles() {
  return (
    <div className="w-[100%] h-[100%] " >
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-[-2]">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                     </div>
                     {/* Floating particles */}
             <div className="absolute inset-0">
               {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
    </div>
  )
}
