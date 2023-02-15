import { ReactNode } from 'react';
import { Container } from './CardContainer.styled';

interface ICardContainer {
  title: string;
  children: JSX.Element | ReactNode;
}

const CardContainer = ({ title, children }: ICardContainer) => {
  return (
    <Container>
      <div className="card__title">{title}</div>
      {children}
    </Container>
  );
};

export default CardContainer;
