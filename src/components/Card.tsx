import { useState } from 'react';
import { Button } from './common/Button';
import { Icon } from './common/Icon';
import { Avatar } from './common/Avatar';
import { CardContent } from './common/CardContent';
import styled from 'styled-components';

interface CardProps {
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

export const Card = ({
  title,
  description,
  imageUrl,
  author,
  likes: initialLikes,
  comments: initialComments,
  saves: initialSaves,
}: CardProps) => {
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
    <CardContent imageUrl={imageUrl}>
      <Header>
        <h3>{title}</h3>
        <p>{description}</p>
      </Header>

      <Divider />

      <Footer>
        <AuthorInfo>
          <Avatar src={author.avatar} alt={author.name} size="sm" />
          <span>{author.name}</span>
        </AuthorInfo>

        <StatsBar>
          <Button variant="ghost" size="sm" onClick={handleLike}>
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
        </StatsBar>

        <ActionBar>
          <span>
            <Button variant="primary" size="sm" onClick={handleSave}>
              {isSaved ? 'Saved' : 'Save'}
            </Button>
          </span>

          <ActionSpacer />

          <span>
            <Button variant="secondary" size="sm" onClick={handleShare}>
              Share
            </Button>

            <Button variant="secondary" size="sm">
              ...
            </Button>
          </span>
        </ActionBar>
      </Footer>
    </CardContent>
  );
};

const Header = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};

  h3 {
    color: ${({ theme }) => theme.colors.neutral[900]};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  p {
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  margin: 0;
`;

const Footer = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  span {
    color: ${({ theme }) => theme.colors.neutral[700]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ActionSpacer = styled.span`
  display: none;
`;
