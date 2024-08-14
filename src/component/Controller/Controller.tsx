import { numbers } from '../../utils/numbers';
import BtnControll from '../BtnControll';
import './Controller.style.css';

interface ControllerProps {
  count: number;
  setCount: (count: number) => void;
}

const Controller = ({ count, setCount }: ControllerProps) => {
  const values: number[] = numbers;

  const handleCount = (value: number): void => {
    const newValue: number = count + value;
    setCount(newValue);
  };

  return(
    <div className='ControllerWrapper'>
      {values.map((value: number) => (
        <BtnControll 
          key={value} 
          value={value} 
          onClick={handleCount}
        />
      ))}
    </div>
  );
};
export default Controller;
