import React from 'react';
import { CardDetailsContainer } from './CardWithDetails.styled';

interface ICardWithDetails {
  amount: string | number;
  percentageChange: number;
  percentageInc?: boolean;
  percentageDec?: boolean;
  footerAmount: string | number;
  footerDesc: string;
}

const CardWithDetails = ({
  amount,
  percentageChange,
  percentageDec,
  percentageInc,
  footerAmount,
  footerDesc,
}: ICardWithDetails) => {
  return (
    <CardDetailsContainer>
      <div className="details">
        <h1 className="amount">{amount}</h1>
        {/* <div className="comparison">
          <span className={percentageInc ? 'increment' : percentageDec ? 'decrement' : ''}>{percentageChange}%</span>{' '}
          vs. previous month
        </div> */}
      </div>
      <div className="footer">
        <h2 className="footer-amount">{footerAmount}</h2>
        <span className="footer-desc">{footerDesc}</span>
      </div>
    </CardDetailsContainer>
  );
};

export default CardWithDetails;
