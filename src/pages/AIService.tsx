import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MOCK_BENTO_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Loader2, Utensils, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  recommendations?: string[]; // IDs of recommended bento items
}

export const AIService = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '您好！我是阿爸的 AI 健康顧問。我可以根據您的健康目標（如增肌、減脂、孕期營養等）為您推薦最適合的餐盒。請問您今天有什麼特別的飲食需求嗎？',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const menuContext = MOCK_BENTO_ITEMS.map(item => 
        `ID: ${item.id}, 名稱: ${item.name}, 價格: ${item.price}, 熱量: ${item.calories}kcal, 蛋白質: ${item.protein}g, 分類: ${item.category}, 描述: ${item.description}`
      ).join('\n');

      const prompt = `
        你是一位專業的營養師，代表「阿爸的家園」健康餐盒品牌。
        你的任務是根據使用者的需求提供專業的飲食建議，並從下方的菜單中推薦適合的餐盒。
        
        菜單資訊：
        ${menuContext}
        
        請以親切、專業且溫暖的口吻回答。
        如果使用者提到特定的健康目標（如減肥、增肌、懷孕、老人、小孩），請針對該目標給予建議。
        
        最後，請以 JSON 格式在回答的最末尾包含推薦的餐盒 ID 列表，格式如下：
        [RECOMMENDATIONS: id1, id2]
        
        使用者問題：${userMessage}
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      const aiResponse = response.text || "抱歉，我現在無法處理您的請求。";
      
      // Extract recommendations
      const recMatch = aiResponse.match(/\[RECOMMENDATIONS: (.*?)\]/);
      const recommendationIds = recMatch ? recMatch[1].split(',').map(id => id.trim()) : [];
      const cleanContent = aiResponse.replace(/\[RECOMMENDATIONS: .*?\]/, '').trim();

      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: cleanContent,
        recommendations: recommendationIds
      }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: '抱歉，連線發生了一點問題。請稍後再試，或直接瀏覽我們的美味菜單！' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent/20">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">AI 健康顧問</h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Personalized Nutrition Guide</p>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] shadow-2xl shadow-primary/5 border border-warm-beige/50 overflow-hidden flex flex-col h-[70vh]">
        {/* Chat Messages */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                  msg.role === 'user' ? 'bg-primary text-white' : 'bg-accent text-white'
                }`}>
                  {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                <div className="space-y-4">
                  <div className={`p-5 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-warm-beige/20 text-gray-800 rounded-tl-none border border-warm-beige/30'
                  }`}>
                    {msg.content}
                  </div>

                  {/* AI Recommendations */}
                  {msg.recommendations && msg.recommendations.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {msg.recommendations.map(id => {
                        const item = MOCK_BENTO_ITEMS.find(i => i.id === id);
                        if (!item) return null;
                        return (
                          <Link 
                            key={id}
                            to={`/menu?tag=${item.name}`}
                            className="flex items-center p-3 bg-white border border-warm-beige/50 rounded-2xl hover:border-primary transition-all group"
                          >
                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover mr-3" />
                            <div className="flex-grow">
                              <span className="text-xs font-black text-gray-900 block">{item.name}</span>
                              <span className="text-[10px] font-bold text-primary">${item.price}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-3 bg-warm-beige/10 px-6 py-4 rounded-2xl border border-warm-beige/20">
                <Loader2 className="w-5 h-5 text-accent animate-spin" />
                <span className="text-sm font-black text-gray-400 uppercase tracking-widest">阿爸正在思考中...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 md:p-8 bg-cream/50 border-t border-warm-beige/50">
          <form onSubmit={handleSend} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="輸入您的健康目標或疑問（例如：我想要增肌減脂...）"
              className="w-full pl-6 pr-20 py-5 rounded-2xl border border-warm-beige/50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none bg-white transition-all duration-300 font-medium shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {['增肌減脂', '孕期營養', '銀髮保養', '腸胃調整'].map(tag => (
              <button
                key={tag}
                onClick={() => setInput(`我想要了解關於${tag}的飲食建議`)}
                className="text-[10px] font-black text-gray-400 hover:text-primary border border-warm-beige/50 px-3 py-1.5 rounded-full transition-colors uppercase tracking-widest"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-warm-beige/50 shadow-sm">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
            <Utensils className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-3">精準推薦</h3>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">AI 顧問會根據您的身體狀況與目標，從菜單中挑選最適合的營養組合。</p>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-warm-beige/50 shadow-sm">
          <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-3">專業知識</h3>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">整合最新營養學知識，為您解答關於熱量、蛋白質與各類營養素的疑問。</p>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-warm-beige/50 shadow-sm">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-3">24/7 在線</h3>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">無論何時何地，阿爸的 AI 顧問隨時準備為您的健康把關。</p>
        </div>
      </div>
    </div>
  );
};
