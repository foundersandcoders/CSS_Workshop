import { Layout } from './components/Layout';
import { PinCard } from './components/PinCard';

const pins = [
  {
    id: 1,
    title: 'Beautiful Mountain Landscape',
    description: 'Stunning view of snow-capped mountains at sunset',
    imageUrl: 'https://picsum.photos/300/500',
    author: {
      name: 'John Doe',
      avatar: 'https://picsum.photos/100/100',
    },
    likes: 1234,
    comments: 89,
    saves: 567,
  },
  {
    id: 2,
    title: 'Urban Street Photography',
    description: 'Capturing the essence of city life',
    imageUrl: 'https://picsum.photos/300/500',
    author: {
      name: 'Jane Smith',
      avatar: 'https://picsum.photos/100/100',
    },
    likes: 856,
    comments: 45,
    saves: 234,
  },
  {
    id: 3,
    title: 'Minimalist Interior Design',
    description: 'Clean and modern living space inspiration',
    imageUrl: 'https://picsum.photos/300/500',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://picsum.photos/100/100',
    },
    likes: 2345,
    comments: 123,
    saves: 789,
  },
  {
    id: 4,
    title: 'Healthy Food Bowl',
    description: 'Colorful and nutritious meal prep ideas',
    imageUrl: 'https://picsum.photos/300/500',
    author: {
      name: 'Sarah Wilson',
      avatar: 'https://picsum.photos/100/100',
    },
    likes: 3456,
    comments: 234,
    saves: 890,
  },
  {
    id: 5,
    title: 'Travel Photography Tips',
    description: 'Essential tips for capturing amazing travel moments',
    imageUrl: 'https://picsum.photos/300/500',
    author: {
      name: 'David Brown',
      avatar: 'https://picsum.photos/100/100',
    },
    likes: 4567,
    comments: 345,
    saves: 1234,
  },
  {
    id: 6,
    title: 'DIY Home Projects',
    description: 'Creative and budget-friendly home improvement ideas',
    imageUrl: 'https://picsum.photos/300/500',
    author: {
      name: 'Emma Davis',
      avatar: 'https://picsum.photos/100/100',
    },
    likes: 5678,
    comments: 456,
    saves: 2345,
  },
];

function App() {
  return (
    <Layout>
      <div>
        {pins.map((pin) => (
          <PinCard
            key={pin.id}
            title={pin.title}
            description={pin.description}
            imageUrl={pin.imageUrl}
            author={pin.author}
            likes={pin.likes}
            comments={pin.comments}
            saves={pin.saves}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
