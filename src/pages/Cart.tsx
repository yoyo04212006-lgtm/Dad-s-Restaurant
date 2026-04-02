import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-16 rounded-[3.5rem] shadow-xl shadow-primary/5 border border-warm-beige/50 max-w-2xl mx-auto"
        >
          <div className="w-24 h-24 bg-warm-beige/30 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary">
            <ShoppingBag className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">您的購物車是空的</h2>
          <p className="text-gray-500 mb-10 text-lg font-medium">快去看看阿爸為您準備的美味健康餐盒吧！</p>
          <Link to="/menu" className="btn-primary inline-flex items-center !px-12 !py-5 text-xl">
            前往菜單 <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <ShoppingCart className="w-6 h-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
          購物車 <span className="text-primary/40">({totalItems})</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          <AnimatePresence mode="popLayout">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-6 rounded-[2.5rem] border border-warm-beige/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 group"
              >
                <div className="w-full sm:w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-2xl text-gray-900 tracking-tight group-hover:text-primary transition-colors">{item.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-accent transition-colors p-2 hover:bg-accent/5 rounded-xl"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-accent font-black text-xl tracking-tighter mb-6">${item.price}</p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center bg-warm-beige/20 rounded-2xl p-1 border border-warm-beige/30">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all duration-300 text-gray-500 hover:text-primary hover:shadow-sm"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="w-12 text-center font-black text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all duration-300 text-gray-500 hover:text-primary hover:shadow-sm"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">小計</p>
                      <p className="text-2xl font-black text-primary tracking-tighter">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-10 rounded-[3rem] border border-warm-beige/50 shadow-xl shadow-primary/5 sticky top-28">
            <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">訂單摘要</h2>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between text-gray-500 font-bold">
                <span className="uppercase tracking-widest text-xs">商品總計</span>
                <span className="text-lg tracking-tighter">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-bold">
                <span className="uppercase tracking-widest text-xs">運費</span>
                <span className="text-lg tracking-tighter">$0</span>
              </div>
              <div className="h-px bg-warm-beige/50 w-full" />
              <div className="flex justify-between items-end">
                <span className="text-sm font-black text-gray-900 uppercase tracking-widest">總金額</span>
                <span className="text-4xl font-black text-primary tracking-tighter">${totalPrice}</span>
              </div>
            </div>
            <Link to="/checkout" className="w-full btn-primary block text-center !py-5 text-xl shadow-primary/20">
              前往結帳
            </Link>
            <div className="mt-8 p-4 bg-warm-beige/20 rounded-2xl border border-warm-beige/30">
              <p className="text-center text-xs text-gray-500 font-medium leading-relaxed">
                結帳前請確認您的餐點內容與數量。我們堅持現點現做，確保每一份餐點的品質。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
