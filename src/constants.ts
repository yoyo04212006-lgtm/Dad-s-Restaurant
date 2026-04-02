export interface BentoItem {
  id: string;
  name: string;
  price: number;
  image: string;
  calories: number;
  protein: number;
  category: string;
  tags: string[];
  description: string;
}

export const CATEGORIES = [
  '全部',
  '增肌減脂',
  '腸胃調整',
  '孕期營養',
  '銀髮保養',
  '兒童成長',
];

export const MOCK_BENTO_ITEMS: BentoItem[] = [
  {
    id: '1',
    name: '舒肥雞胸增肌餐',
    price: 160,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    calories: 520,
    protein: 45,
    category: '增肌減脂',
    tags: ['高蛋白', '低GI'],
    description: '精選國產雞胸肉，低溫舒肥鎖住肉汁，搭配紫米飯與五色蔬菜。',
  },
  {
    id: '2',
    name: '清蒸鱸魚營養餐',
    price: 220,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    calories: 450,
    protein: 35,
    category: '孕期營養',
    tags: ['Omega-3', '清爽'],
    description: '新鮮鱸魚清蒸，富含優質蛋白質與DHA，適合孕期媽咪補充營養。',
  },
  {
    id: '3',
    name: '慢燉牛肉保養餐',
    price: 200,
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80',
    calories: 580,
    protein: 38,
    category: '銀髮保養',
    tags: ['易咀嚼', '補鐵'],
    description: '軟嫩慢燉牛肉，搭配好消化的根莖類蔬菜，專為銀髮族設計。',
  },
  {
    id: '4',
    name: '南瓜雞肉成長餐',
    price: 150,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    calories: 480,
    protein: 30,
    category: '兒童成長',
    tags: ['天然甜味', '均衡'],
    description: '香甜南瓜泥搭配雞肉丁，色彩豐富吸引小朋友，營養滿分。',
  },
  {
    id: '5',
    name: '高纖蔬食調整餐',
    price: 140,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    calories: 380,
    protein: 15,
    category: '腸胃調整',
    tags: ['高纖', '輕食'],
    description: '多種時令鮮蔬搭配藜麥，豐富膳食纖維幫助腸道蠕動。',
  },
  {
    id: '6',
    name: '嫩煎鮭魚減脂餐',
    price: 240,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    calories: 490,
    protein: 32,
    category: '增肌減脂',
    tags: ['優質脂肪', '低碳'],
    description: '厚切鮭魚排嫩煎，搭配豐富綠色蔬菜，減脂不減美味。',
  },
];
