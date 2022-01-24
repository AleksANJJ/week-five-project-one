import './App.css';
import { data } from './Data';
import { useState } from 'react';


function App() {
  const [gift, setGift] = useState(data);

  const removeGift =(id) => {
    let newGifts = gift.filter(gifts =>gifts.id !==id);
    setGift(newGifts)
  }


return(
  <div>
    <div className='container'>
      <h1>List of {gift.length} gifts</h1>
    </div>

    {gift.map((element => {
      const {id, gifty, image} = element;

      return(
        <div key = {id}>
          <div className='container'>
            <h2>{id} - {gifty}</h2>
          </div>

          <div className='container'>
            <img src={image} width="250px" alt='fotoGift'/>
          </div>

          <div className='container'>
      <button onClick= {() =>removeGift(id)}>Remove</button>
    </div>
        </div>)
    }))}
    <div className='container'>
      <button onClick={() => setGift([])}>Delete all</button>
    </div>
  </div>
)
}
export default App;
