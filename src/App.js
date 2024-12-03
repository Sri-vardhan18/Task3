import './App.css';
import { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [cardData, setCardData] = useState([]);

  const GetData = async () => {
    const res = await fetch("https://www.reddit.com/r/reactjs.json");
    const userData = await res.json();
    console.log(userData.data.children, "userData");

    const post = userData.data.children.map((i) => ({
      title: i.data.title,
      selftext_html: i.data.selftext_html,
      url: i.data.url,
      score: i.data.score,
    }));

    console.log(post, "post");
    setCardData(post);
  };

  console.log(cardData, "cardData");

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="rowStyle">
      {cardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          selftext_html={item.selftext_html}
          score={item.score}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default App;
