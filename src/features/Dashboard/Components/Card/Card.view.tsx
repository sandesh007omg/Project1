import { Card, Progress } from 'antd';
import Icon from '../../../../Components/Icon'

interface CardContainer {
  dataList?: any;
}
const CardContainer: React.FC<CardContainer> = ({ dataList }) => {
  return (
    <>
      <div className="card-wrapper flex gap-4" >
        {dataList?.cardList.map((items: any) => (
          <Card style={{ background: `${items?.color}`, color: '#FFFFFF' }}>
            <article >
              <div className="text-holder">
                <span className="title text-20-semi ">{items?.title.toUpperCase()}</span>
                <span className="value text-24-bold ">{items?.value}</span>
              </div>
              <div className="img-holder">
                <Icon iconName={items?.iconName} />
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
