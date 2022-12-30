import logo from './logo.svg';
import './App.css';

function App() {
  let ImgURl = "https://pbs.twimg.com/profile_images/894417735169527813/WOQ2vmng_400x400.jpg"
  return (
    <div className="App">
      <h1>Animal Kingdom</h1>
      <img className='img' width="100" height="100"  src={ImgURl} />
    </div>
  );
}

export default App;
