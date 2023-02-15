import { StatusCardContainer } from './StatusCard.styled';

interface IStatusCardProps {
  amount: string;
  percentageChange: number;
  percentageInc?: boolean;
  percentageDec?: boolean;
  outgoing?: boolean;
  incoming?: boolean;
}

const StatusCard = ({
  amount,
  percentageChange,
  percentageInc,
  percentageDec,
  outgoing,
  incoming,
}: IStatusCardProps) => {
  return (
    <StatusCardContainer>
      <h1 className={`amount${outgoing ? ' outgoing' : incoming ? ' incoming' : ''}`}>{amount}</h1>
      {/* <div className="comparison">
        <span className={percentageInc ? 'increment' : percentageDec ? 'decrement' : ''}>{percentageChange}%</span> vs.
        previous month
      </div> */}
    </StatusCardContainer>
  );
};

export default StatusCard;
