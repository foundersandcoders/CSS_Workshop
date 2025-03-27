import { useState } from 'react';
import { Button } from './common/Button';
import { Icon } from './common/Icon';
import { Avatar } from './common/Avatar';
import { Card } from './common/Card';
import './PinCard.css';

interface PinCardProps {
  title: string;
  description: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  saves: number;
}

export const PinCard = ({
  title,
  description,
  imageUrl,
  author,
  likes: initialLikes,
  comments: initialComments,
  saves: initialSaves,
}: PinCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [comments] = useState(initialComments);
  const [saves, setSaves] = useState(initialSaves);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    setSaves(prev => isSaved ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    console.log('Sharing pin:', title);
};

  return (
    <Card className="pin-card">
      <div className="pin-card-image">
        <img src={imageUrl} alt={title} />
        
        {/* Overlay Actions */}
        <div>
          <Button
            variant="primary"
            size="sm"
            onClick={handleSave}
          >
            {isSaved ? 'Saved' : 'Save'}
          </Button>
          
          <div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleShare}
            >
              Share
            </Button>
            <Button
              variant="secondary"
              size="sm"
            >
              ...
            </Button>
          </div>
        </div>
      </div>

      <div className="pin-card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="pin-card-author">
          <Avatar src={author.avatar} alt={author.name} size="sm" />
          <span>{author.name}</span>
        </div>

        <div className="pin-card-stats">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
          >
            <Icon size="sm">{isLiked ? '❤️' : '🤍'}</Icon>
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm">
            <Icon size="sm">💬</Icon>
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm">
            <Icon size="sm">📌</Icon>
            <span>{saves}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};
