import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Heart, ShieldCheck, Users, MapPin, Phone, Mail } from 'lucide-react';

export const About = () => {
  return (
    <div className="pb-20">
      {/* About Hero */}
      <section className="relative h-[50vh] flex items-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="section-subtitle !text-white/60">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              關於<span className="text-accent">阿爸的家園</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
              我們不只是在做便當，我們是在傳遞一份對家人的愛與關懷。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="section-subtitle">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                源自於一位父親<br />對孩子健康的執著
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                「阿爸的家園」創立於 2020 年。創辦人阿爸在為孩子準備午餐時，發現市面上的外食往往過於油膩、調味過重，且食材來源不明。
              </p>
              <p>
                為了讓孩子能吃到健康、營養均衡且美味的餐點，阿爸開始鑽研營養學，並走訪各地尋找優質的小農食材。這份「給家人的心意」，就是我們品牌最核心的價值。
              </p>
              <p>
                現在，我們將這份心意分享給每一位忙碌的都市人，讓您即使在外打拼，也能感受到家的溫暖與健康。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <p className="text-4xl font-black text-primary">100%</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">天然食材</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-primary">50k+</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">滿意顧客</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80" 
                alt="Cooking with love"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-accent p-10 rounded-[2.5rem] shadow-xl text-white hidden md:block">
              <Heart className="w-12 h-12 mb-4 fill-current" />
              <p className="text-2xl font-black leading-tight">堅持<br />家的味道</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-warm-beige/30 py-32 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="section-subtitle">Core Values</span>
            <h2 className="section-title">我們的核心價值</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Leaf className="w-8 h-8" />, 
                title: '極致新鮮', 
                desc: '每日清晨採購在地小農蔬菜，確保食材從產地到餐桌的最短距離。' 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: '營養科學', 
                desc: '與專業營養師合作，精準計算每一份餐盒的營養比例，滿足不同體質需求。' 
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: '社區關懷', 
                desc: '我們深耕社區，致力於推廣健康飲食文化，並定期參與公益送餐活動。' 
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 text-center space-y-6 group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-white/60 font-bold uppercase tracking-widest text-sm">Contact Us</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">隨時與我們聯繫</h2>
              </div>
              <p className="text-xl text-white/70 font-medium leading-relaxed">
                無論是訂餐諮詢、企業團膳，或是對我們的建議，我們都非常期待聽到您的聲音。
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">台北市大同區承德路一段23號1樓</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">02-2523-6643</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">hello@abashome.com</span>
                </div>
              </div>

              {/* Google Map */}
              <div className="w-full h-64 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.591642874134!2d121.5147!3d25.0479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97276366667%3A0x6367ad4c6860079!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5om_5b636Lev5LiA5q61MjPlit8x5qiT!5e0!3m2!1szh-TW!2stw!4v1711425000000!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-white/60">姓名</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-white/60">電話</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-white/60">主旨</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-white/60">訊息內容</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                </div>
                <button type="button" className="w-full btn-accent !py-4 text-lg">
                  送出訊息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
