interface BtnControllProps {
  value: number;
  onClick: (value: number) => void;
}

const BtnControll = ({ value, onClick }: BtnControllProps) => {
  return(
    <button onClick={() => {
      onClick(value);
    }}>
      {value}
    </button>
  );
};
export default BtnControll;