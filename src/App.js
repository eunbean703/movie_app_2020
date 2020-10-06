import React from 'react';

function Food({name , picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src = {picture}/>
  </div>
}

const foodILike = [
  {
  name: "Kimchi",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Korean_cuisine-Kimchi-08.jpg"
  },
  {
  name: "bulgogi",
  image: "https://www.foxyfolksy.com/wp-content/uploads/2015/08/beef-bulgogi.jpg"
  },
  {
  name: "kimbap",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Korean.food-Kimbap-03.jpg/1280px-Korean.food-Kimbap-03.jpg"
  },
  {
  name: "samgyetang",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Samgyetang.jpg"
  }
];

function App() {
  return (
  <div>
      {foodILike.map(dish => (
      <Food name = {dish.name} picture = {dish.image} />
      ))}
    </div>
  );
}

export default App;
