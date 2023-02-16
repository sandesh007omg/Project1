import { Card, Progress } from 'antd';
import { useSelector } from 'react-redux';

interface CardContainer {
  dataList?: any;
}
const CardContainer: React.FC<CardContainer> = ({ }) => {
  const cardList = useSelector((state: any) => state?.dashboard?.cardList);
  return (
    <>
      <div className="card-wrapper flex gap-4" >
        {cardList?.map((items: any) => (
          <Card style={{ background: `${items?.color}`, color: '#FFFFFF' }}>
            <article >
              <div className="text-holder">
                <span className="title text-20-semi ">{items?.title.toUpperCase()}</span>
                <span className="value text-24-bold ">{items?.value}</span>
              </div>
              <div className="img-holder">
                <img src={items?.iconName} alt="back" />
              </div>
            </article>
            <Progress percent={50} size="small" status="active" />
          </Card>
        )
        )}
      </div>
    </>
  );
};

export default CardContainer;
