import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, CreditCard, Truck, Store, User, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';

export const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    method: 'pickup',
    time: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order submission
    setIsSubmitted(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-16 rounded-[3.5rem] shadow-xl shadow-primary/5 border border-warm-beige/50 max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner"
          >
            <CheckCircle2 className="w-12 h-12" />
          </motion.div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">訂單已成功送出！</h2>
          <p className="text-gray-500 mb-10 text-lg font-medium leading-relaxed">感謝您的訂購，阿爸正在為您準備美味的健康餐盒。我們會盡快為您處理！</p>
          <div className="flex items-center justify-center space-x-2 text-primary font-bold">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
            <span className="ml-2 text-sm uppercase tracking-widest text-gray-400">正在為您跳轉回首頁...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">結帳資訊</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Contact Info */}
            <div className="bg-white p-10 rounded-[3rem] border border-warm-beige/50 shadow-xl shadow-primary/5 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-lg font-black mr-4">1</span>
                  基本資料
                </h2>
                <User className="text-gray-200 w-8 h-8" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">姓名</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      required
                      type="text"
                      className="w-full pl-12 pr-6 py-4 rounded-2xl border border-warm-beige/50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none bg-warm-beige/10 transition-all duration-300 font-medium"
                      placeholder="請輸入您的姓名"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">電話</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      required
                      type="tel"
                      className="w-full pl-12 pr-6 py-4 rounded-2xl border border-warm-beige/50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none bg-warm-beige/10 transition-all duration-300 font-medium"
                      placeholder="請輸入您的電話"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pickup Method */}
            <div className="bg-white p-10 rounded-[3rem] border border-warm-beige/50 shadow-xl shadow-primary/5 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-lg font-black mr-4">2</span>
                  取餐方式
                </h2>
                <Truck className="text-gray-200 w-8 h-8" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, method: 'pickup' })}
                  className={`p-6 rounded-[2rem] border-2 flex flex-col items-center space-y-3 transition-all duration-500 ${
                    formData.method === 'pickup'
                      ? 'border-primary bg-primary/5 text-primary shadow-lg shadow-primary/10 scale-105'
                      : 'border-warm-beige/50 text-gray-400 hover:bg-warm-beige/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${formData.method === 'pickup' ? 'bg-primary text-white' : 'bg-gray-100'}`}>
                    <Store className="w-6 h-6" />
                  </div>
                  <span className="font-black text-lg">到店自取</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, method: 'delivery' })}
                  className={`p-6 rounded-[2rem] border-2 flex flex-col items-center space-y-3 transition-all duration-500 ${
                    formData.method === 'delivery'
                      ? 'border-primary bg-primary/5 text-primary shadow-lg shadow-primary/10 scale-105'
                      : 'border-warm-beige/50 text-gray-400 hover:bg-warm-beige/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${formData.method === 'delivery' ? 'bg-primary text-white' : 'bg-gray-100'}`}>
                    <Truck className="w-6 h-6" />
                  </div>
                  <span className="font-black text-lg">外送服務</span>
                </button>
              </div>

              {formData.method === 'delivery' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3"
                >
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">外送地址</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      required
                      type="text"
                      className="w-full pl-12 pr-6 py-4 rounded-2xl border border-warm-beige/50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none bg-warm-beige/10 transition-all duration-300 font-medium"
                      placeholder="請輸入外送地址"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </motion.div>
              )}

              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">取餐時間</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
                  <select
                    required
                    className="w-full pl-12 pr-10 py-4 rounded-2xl border border-warm-beige/50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none bg-warm-beige/10 transition-all duration-300 font-black appearance-none"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="">請選擇時間</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white p-10 rounded-[3rem] border border-warm-beige/50 shadow-xl shadow-primary/5 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center">
                  <span className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-lg font-black mr-4">3</span>
                  付款方式
                </h2>
                <CreditCard className="text-gray-200 w-8 h-8" />
              </div>
              <div className="p-6 rounded-[2rem] border-2 border-primary bg-primary/5 flex items-center justify-between shadow-lg shadow-primary/5">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center mr-4">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-black text-primary text-lg block">貨到付款 / 取餐付款</span>
                    <span className="text-primary/60 text-xs font-bold uppercase tracking-widest">Cash on Delivery</span>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary !py-6 text-2xl font-black shadow-primary/30 tracking-tighter">
              確認下單
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-10 rounded-[3rem] border border-warm-beige/50 shadow-xl shadow-primary/5 sticky top-28">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">訂單摘要</h2>
            <div className="space-y-6 mb-10 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <span className="text-gray-900 font-black text-sm block leading-tight">{item.name}</span>
                      <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">x {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-black text-gray-900 tracking-tighter">${item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-warm-beige/50 pt-8 space-y-4">
              <div className="flex justify-between text-gray-500 font-bold">
                <span className="uppercase tracking-widest text-xs">小計</span>
                <span className="tracking-tighter">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-bold">
                <span className="uppercase tracking-widest text-xs">運費</span>
                <span className="tracking-tighter">$0</span>
              </div>
              <div className="h-px bg-warm-beige/50 w-full my-4" />
              <div className="flex justify-between items-end">
                <span className="text-sm font-black text-gray-900 uppercase tracking-widest">總金額</span>
                <span className="text-4xl font-black text-primary tracking-tighter">${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
