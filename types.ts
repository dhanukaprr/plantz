
export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  category: 'Indoor' | 'Outdoor' | 'Succulent' | 'Rare';
  description: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Moderate' | 'Pro';
}

export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}
