import React, { useState } from "react";
import './App.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import text from './images/text.png';

function App() {
  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)

  return (
    <div className="App" >
      <div className="zoom">
        <img src={img1} alt="" id="img1"
          style={{ width: (100 + offset * 0.3) + '%' }}
        />
        <img src={img2} alt="" id="img2"
          style={{ width: (100 + offset * 0.3) + '%' }}
        />
        <img src={text} alt="" id="text"
          style={{ top: `-${10 + offset * 0.1 + '%'}` }}
        />
      </div>

      <div className="content">
        <h2>Simple parallax effect with React</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt saepe ex est alias vitae ea dolorum iure accusamus culpa, cupiditate sequi obcaecati at sit provident consequuntur dicta! Reprehenderit, omnis sequi ducimus doloremque quis accusantium excepturi facilis adipisci similique laudantium fugit, optio ea aspernatur eveniet sint eaque maxime est rerum deserunt doloribus amet harum repudiandae necessitatibus? Minima exercitationem voluptatem illo atque pariatur alias accusantium nam tenetur reiciendis aut cumque et, expedita fuga quidem ad, dolores amet rem doloremque fugit numquam, harum iusto. Voluptas eos pariatur nostrum deleniti suscipit provident a porro temporibus reiciendis illo vero saepe veritatis itaque similique labore, sequi doloribus quod, iste dolor nam praesentium eveniet? Soluta debitis magni voluptatem suscipit dolorum ullam libero, delectus fuga repudiandae, nam alias iure quo enim et consequatur vero perspiciatis eius aliquid officiis? Eligendi quibusdam error optio, consequatur officia fuga, deleniti omnis quasi totam impedit, dolore delectus. Ullam sed non veritatis harum dolorem repudiandae obcaecati. Alias ratione ut error, nulla omnis doloremque possimus labore rem maxime odio sit libero tempore quam iste quidem. Nesciunt incidunt unde perferendis animi facilis corrupti quasi modi sequi tenetur minus error, enim dolores ipsa debitis alias molestias fugiat eaque ipsam deserunt praesentium? Officia consequuntur deleniti veniam fugiat!
        </p>
      </div>
    </div>
  );
}

export default App;
