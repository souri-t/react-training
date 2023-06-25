import { useDispatch } from 'react-redux';
import { addText, additional, subtraction } from '../../components/redux/slice';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleStart = () => {
    dispatch(additional(1))
    navigate('/');
  };

  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={handleStart}>Up</button>
      {/* <button onClick={() => dispatch(additional(1))}>Up</button> */}
      {/* <button onClick={() => dispatch(subtraction(1))}>Down</button>
      <button onClick={() => dispatch(addText("taro"))}>addText</button> */}
    </div>
  )
}

export default Home