import React from 'react'
import image11 from './11.jpg'
import image22 from './22.jpg'
import image33 from './33.jpg'
import image44 from './44.jpg'

function App() {
  const perfumes = [
    { id: 1, name: "STUDIO SIGNATURE", slogan: "Crafted for you", image: image22 },
    { id: 2, name: "KK MORNING", slogan: "Fresh & Timeless", image: image33 },
    { id: 3, name: "PINK STUDIO", slogan: "Sweet Elegance", image: image44 },
  ];

  return (
    <div className="min-h-screen bg-[#fff5f7] text-slate-800 font-sans flex flex-col">
      
      {/* --- HEADER (เมนูครบตามแบบ) --- */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 px-8 py-5 flex justify-between items-center border-b border-pink-100">
        <div className="text-2xl font-black text-pink-500 tracking-tighter uppercase">
          perfume<span className="text-slate-300">.</span>studio<span className="text-slate-300">.</span>kk
        </div>
        
        {/* เมนู 4 อย่าง: Home, Collections, Our Lab, Contact */}
        <nav className="hidden md:flex gap-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-pink-500 transition-colors">Home</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Collections</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Our Lab</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu (แสดงเมื่อจอเล็ก) */}
        <div className="md:hidden text-pink-500 font-bold">MENU</div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-12">
        
        {/* --- HERO SECTION (รูปแรก 11.jpg) --- */}
        <section className="bg-white rounded-[3rem] p-8 md:p-16 mb-20 flex flex-col md:flex-row items-center gap-12 shadow-xl shadow-pink-100/30 border border-pink-50">
          <div className="flex-1 text-center md:text-left space-y-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-pink-50 text-pink-500 text-[10px] font-black uppercase tracking-[0.2em]">
              The Art of Scent
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter">
              BELLE <br />
              <span className="text-pink-300">ROSE</span>
            </h1>
            <p className="text-lg font-medium text-slate-400 italic leading-relaxed">
              "สัมผัสความหอมระดับสตูดิโอที่ออกแบบมาเพื่อเอกลักษณ์ของคุณ"
            </p>
            <div className="pt-4">
              <button className="relative z-20 px-12 py-4 bg-pink-400 hover:bg-pink-500 text-white font-black rounded-full shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 active:scale-95">
                EXPLORE SCENT
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative group border-4 border-white">
            <img 
              src={image11} 
              alt="Studio Main" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-100/20 to-transparent"></div>
          </div>
        </section>

        {/* --- COLLECTION SECTION (รูป 22, 33, 44) --- */}
        <section className="pb-20">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">The Pink Collection</h2>
            <div className="flex justify-center gap-1.5">
              <div className="w-16 h-1 bg-pink-300 rounded-full"></div>
              <div className="w-6 h-1 bg-pink-100 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {perfumes.map((item) => (
              <div key={item.id} className="group bg-white rounded-[2.5rem] p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-pink-50">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-pink-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{item.name}</h3>
                  <p className="text-xs font-bold text-pink-400 italic mb-6">{item.slogan}</p>
                  
                  {/* ลายเส้นตกแต่งตามแบบ */}
                  <div className="flex flex-col items-center gap-1.5 opacity-30">
                    <div className="w-20 h-[2px] bg-pink-400 rounded-full"></div>
                    <div className="w-10 h-[2px] bg-pink-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <button className="px-10 py-3 bg-white text-pink-400 font-black rounded-full border-2 border-pink-100 hover:border-pink-300 hover:bg-pink-50 transition-all uppercase text-[10px] tracking-[0.2em] shadow-sm">
              View All Products
            </button>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white px-10 py-16 border-t border-pink-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black text-pink-400 italic tracking-tighter">perfume.studio.kk</div>
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-2">Design Evolution | 2026</p>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <a href="#" className="hover:text-pink-500 transition">Instagram</a>
            <a href="#" className="hover:text-pink-400 transition">Contact</a>
            <a href="#" className="hover:text-pink-500 transition">Q&A</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;