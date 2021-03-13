import React, { useState } from "react";
import { SliderFruits } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { gamesPatch, gamesPost } from "../redux/fruitGames/gamesAction";
import { changeFruis } from "../middleware/changeFruis";
import "../styles/fruits/fruits.css";

const FruitsCart = () => {
  const [form, setForm] = useState({ name: "" });
  const [show, setShow] = useState(true);
  const [showFru, setShowFru] = useState(true);
  let [slideTwo, setSlideTwo] = useState(0);
  let [slideOne, setSlideOne] = useState(0);
  const [stopSlideTop, setStopSlideTop] = useState(false);
  let time;

  const dispatch = useDispatch();
  const data = useSelector((state) => state.games.allDataGames);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, moneys: 20 });
  };

  const slideTop = () => {
    if (slideTwo === -1200) setSlideTwo(slideTwo + 100);
    else setSlideTwo(slideTwo - 100);
    if (slideOne === -1200) setSlideOne(slideOne + 200);
    else setSlideOne(slideOne - 200);
  };

  if (stopSlideTop) time = setTimeout(() => slideTop(), 700);
  else clearTimeout(time);

  const startPlay = () => {
    dispatch(gamesPost(form));
    setShow(!show);
    setStopSlideTop(true);
    setShowFru(true);
    setTimeout(() => setStopSlideTop(false), 3000);
    setTimeout(() => setShowFru(false), 5000);
  };

  const playing = () => {
    dispatch(gamesPatch(data, form));
    setStopSlideTop(true);
    setShowFru(true);
    setTimeout(() => setStopSlideTop(false), 3000);
    setTimeout(() => setShowFru(false), 5000);
  };

  const randomFruits = changeFruis(data);
  return (
    <div className="fruitsConst">
      {show ? (
        <div className="start">
          <input
            type="name"
            name="name"
            placeholder="Please Name"
            value={form.name}
            onChange={changeHandler}
          />
          <button onClick={startPlay}>Start</button>
        </div>
      ) : (
        <div className="playing">
          <div className="fruits">
            <h1> </h1>
            {!showFru &&
              data &&
              data.fruits.map((fruit, i) => {
                return (
                  <div key={i}>
                    <img src={fruit.fruit} alt="fruit" />
                  </div>
                );
              })}
            <h1> </h1>
          </div>

          <div className="fruitsCart">
            <SliderFruits
              fruits={randomFruits}
              trans={`translateY(${slideTwo}px)`}
            />
            <SliderFruits
              fruits={randomFruits}
              trans={`translateY(${slideOne}px)`}
            />
            <SliderFruits
              fruits={randomFruits}
              trans={`translateY(${slideTwo}px)`}
            />
            <SliderFruits
              fruits={randomFruits}
              trans={`translateY(${slideOne}px)`}
            />
          </div>
          <div className="gameScore">
            <p>{data && data.moneys}</p>
            <button onClick={playing}> Playing</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default FruitsCart;
