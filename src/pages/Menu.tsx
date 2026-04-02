import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES, MOCK_BENTO_ITEMS } from '../constants';
import { BentoCard } from '../components/BentoCard';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, X } from 'lucide-react';

export const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTag = searchParams.get('tag') || '';
  
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState(initialTag);

  useEffect(() => {
    const tag = searchParams.get('tag');
    if (tag) {
      setActiveTag(tag);
      setActiveCategory('全部');
    } else {
      setActiveTag('');
    }
  }, [searchParams]);

  const filteredItems = MOCK_BENTO_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === '全部' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !activeTag || 
                      item.tags.some(t => t.includes(activeTag)) || 
                      item.name.includes(activeTag) ||
                      item.category.includes(activeTag);
    
    return matchesCategory && matchesSearch && matchesTag;
  });

  const clearFilters = () => {
    setActiveCategory('全部');
    setSearchQuery('');
    setActiveTag('');
    setSearchParams({});
  };

  return (
    <div className="pb-20">
      {/* Menu Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1920&q=80"
            alt="Menu Header"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              美味<span className="text-accent">菜單</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              根據您的健康目標，選擇最適合您的營養餐盒。每一份都是現點現做，保證新鮮。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Bar */}
        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-warm-beige/50 mb-16 -mt-28 relative z-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="relative w-full lg:w-1/3">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜尋餐點名稱或描述..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl border border-warm-beige/50 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary bg-warm-beige/10 transition-all duration-300 font-medium"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
              <div className="flex items-center text-gray-400 mr-2">
                <Filter className="w-5 h-5 mr-2" />
                <span className="text-sm font-bold uppercase tracking-wider">分類</span>
              </div>
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveTag('');
                    setSearchParams({});
                  }}
                  className={`px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                      : 'bg-warm-beige/20 text-gray-600 hover:bg-warm-beige/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(activeTag || activeCategory !== '全部' || searchQuery) && (
            <div className="mt-8 pt-8 border-t border-warm-beige/50 flex flex-wrap items-center gap-4">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">目前篩選:</span>
              {activeCategory !== '全部' && (
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black flex items-center">
                  分類: {activeCategory}
                  <button onClick={() => setActiveCategory('全部')} className="ml-2 hover:text-accent transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeTag && (
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-black flex items-center">
                  標籤: {activeTag}
                  <button onClick={() => { setActiveTag(''); setSearchParams({}); }} className="ml-2 hover:text-primary transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-xs font-black flex items-center">
                  搜尋: {searchQuery}
                  <button onClick={() => setSearchQuery('')} className="ml-2 hover:text-accent transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button 
                onClick={clearFilters}
                className="text-xs font-black text-gray-400 hover:text-accent transition-colors underline underline-offset-4"
              >
                清除所有篩選
              </button>
            </div>
          )}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredItems.map((item) => (
                <BentoCard key={item.id} item={item} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-warm-beige"
            >
              <div className="w-20 h-20 bg-warm-beige/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-warm-beige" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">找不到符合條件的餐點</h3>
              <p className="text-gray-500 mb-8">換個關鍵字或分類試試看吧！</p>
              <button 
                onClick={clearFilters}
                className="btn-primary"
              >
                顯示所有餐點
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
