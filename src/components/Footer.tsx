import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Facebook, Instagram, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-all duration-500">
                <Utensils className="text-primary w-7 h-7" />
              </div>
              <span className="text-3xl font-black tracking-tighter">阿爸的家園</span>
            </Link>
            <p className="text-white/60 text-base leading-relaxed font-medium">
              讓身體成為你想要的樣子，透過飲食調整達到健康。我們用心製作每一份餐盒，將家的溫暖傳遞給您。
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 tracking-tight">快速連結</h4>
            <ul className="space-y-4 text-white/60 font-bold">
              <li><Link to="/" className="hover:text-accent transition-colors">首頁</Link></li>
              <li><Link to="/menu" className="hover:text-accent transition-colors">美味菜單</Link></li>
              <li><Link to="/ai-service" className="hover:text-accent transition-colors">AI 健康顧問</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">關於我們</Link></li>
              <li><Link to="/cart" className="hover:text-accent transition-colors">購物車</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 tracking-tight">健康分類</h4>
            <ul className="space-y-4 text-white/60 font-bold">
              <li><Link to="/menu?tag=增肌" className="hover:text-accent transition-colors">增肌減脂</Link></li>
              <li><Link to="/menu?tag=低卡" className="hover:text-accent transition-colors">腸胃調整</Link></li>
              <li><Link to="/menu?tag=孕期" className="hover:text-accent transition-colors">孕期營養</Link></li>
              <li><Link to="/menu?tag=銀髮" className="hover:text-accent transition-colors">銀髮保養</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 tracking-tight">聯絡我們</h4>
            <ul className="space-y-6 text-white/60 font-bold">
              <li className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm leading-relaxed">台北市大同區承德路一段23號1樓</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">02-2523-6643</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 阿爸的家園 Healthy Nutrition Center. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
