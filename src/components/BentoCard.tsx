import React from 'react';
import { BentoItem } from '../constants';
import { useCart } from '../CartContext';
import { Plus, Flame, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface BentoCardProps {
  item: BentoItem;
}

export const BentoCard: React.FC<BentoCardProps> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-warm-beige/50 card-hover flex flex-col h-full group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/95 backdrop-blur-md text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
          <span className="text-accent font-black text-xl tracking-tighter">${item.price}</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center space-x-6 mb-6 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          <div className="flex items-center group/stat">
            <Flame className="w-4 h-4 text-accent mr-1.5 transition-transform group-hover/stat:scale-125" />
            <span>{item.calories} kcal</span>
          </div>
          <div className="flex items-center group/stat">
            <Zap className="w-4 h-4 text-primary mr-1.5 transition-transform group-hover/stat:scale-125" />
            <span>{item.protein}g 蛋白質</span>
          </div>
        </div>

        <button
          onClick={() => addToCart(item)}
          className="w-full btn-primary flex items-center justify-center space-x-2 group/btn"
        >
          <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
          <span>加入購物車</span>
        </button>
      </div>
    </motion.div>
  );
};
