import './Viewer.style.css';

interface ViewerProps {
  count: number;
}

const Viewer = ({ count }: ViewerProps) => {
  return(
    <div className='ViewerWrapper'>
      <h4>현재 카운트: </h4>
      <p>{count}</p>
    </div>
  );
};
export default Viewer;