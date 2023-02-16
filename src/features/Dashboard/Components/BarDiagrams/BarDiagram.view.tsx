import Bar from './Bar';
import Bar2 from './Bar2'

interface BarDiagram {
  title?: string;
}

const BarDiagram: React.FC<BarDiagram> = ({ title }) => {
  return (
    <>
      <div className="bar-wrap">
        <div className="bar bar-one">
          <h3 className='text-24-normal'>Income And Expenses</h3>
          <Bar />
        </div>
        <div className="bar bar-two">
          <h3 className='text-24-normal'>Visitors</h3>
          <Bar2 />
        </div>

      </div>
    </>
  );
};

export default BarDiagram;
