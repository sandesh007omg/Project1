interface Greet {
  greetings?: string;
  name?: string;
}

const Greet: React.FC<Greet> = ({ greetings, name }) => {
  return (
    <>
      <span className='greetings text-36-semi'>
        Good, {greetings} <span className="bold">{name}</span>
      </span>
    </>
  );
};

export default Greet;
