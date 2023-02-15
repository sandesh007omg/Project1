import { DECIMAL_PRECISION_TYPE } from '../../../../hooks/Settings/enum';
import useSettings from '../../../../hooks/Settings/Repository/useSettings.controller';
import { SalesPersonContainer, TableCardContainer } from './TableCard.styled';

interface ITableCardProps {
  salesPerson?: boolean;
  details?: ISalesPersonProps[];
}

interface ISalesPersonProps {
  profileImage: string;
  name: string;
  amount: string;
}

const SalesPerson = ({ profileImage, name, amount }: ISalesPersonProps) => (
  <SalesPersonContainer>
    <div className="person-details">
      <img src={profileImage} alt={name} />
      <span>{name}</span>
    </div>
    <div className="amount">{amount}</div>
  </SalesPersonContainer>
);

const TableCard = ({ salesPerson = false, details }: ITableCardProps) => {
  const { decimalPrecisionSetting } = useSettings();
  return (
    <TableCardContainer>
      {salesPerson ? (
        <>
          {details?.map((item: any) => (
            <SalesPerson
              key={item.sales_person_id}
              profileImage="https://www.evolveasia.co/favicon.ico"
              name={item.sales_person}
              amount={decimalPrecisionSetting(item?.sales_amount, DECIMAL_PRECISION_TYPE.AMOUNT)}
            />
          ))}
        </>
      ) : (
        <ul>
          <li>
            <span className="details">Over 90 Days</span>
            <span className="amount">12,963.71</span>
          </li>
          <li>
            <span className="details">Over 90 Days</span>
            <span className="amount">12,963.71</span>
          </li>
        </ul>
      )}
    </TableCardContainer>
  );
};

export default TableCard;
