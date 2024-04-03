import React, { useEffect, useState, ChangeEvent } from 'react';
import './App.css';
import Header from './components/Header';
import Coin from './components/Coin';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  symbol: string;
  total_volume: number;
  market_cap: number;
  image: string;
  price_change_percentage_24h: number;
}

const App: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/api/data';
   
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: Coin[]) => {
        setCoins(data);
      })
      .catch((error: Error) => console.log(error));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log("coins", coins);
  console.log(search);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="coin-app">
        <div className="mt-12">
          <form>
            <input
              type="text"
              className="pl-4 w-72 h-12 border-none rounded bg-indigo-900"
              placeholder="Search here..."
              onChange={handleChange}
              style={{ color: 'black' }}
            />
          </form>
        </div>
        {filteredCoins?.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;