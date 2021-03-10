import React, { useState } from "react";
import { SliderFruits } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { gamesPatch, gamesPost } from "../redux/fruitGames/gamesAction";
import "../styles/fruits/fruits.css";
const FruitsCart = () => {
  const [form, setForm] = useState({ name: "" });
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.games.allDataGames);
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, moneys: 20 });
  };
  const startPlay = () => {
    dispatch(gamesPost(form));
  };

  const playing = () => {
    dispatch(gamesPatch(data, form));
  };

  const changeFruis = () => {
    const randomFruits = [];
    if (data) {
      const fruits = data.fruits.map((f) => {
        return [f.fruit, f.fruit, f.fruit, f.fruit];
      });
      const fruits1 = fruits.flat();
      while (randomFruits.length < 16) {
        let i = Math.floor(Math.random() * fruits1.length);
        randomFruits.push(fruits1[i]);
      }
      return randomFruits;
    }
  };

  const randomFruits = changeFruis();
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
          <button
            onClick={() => {
              startPlay();
              setShow(!show);
            }}
          >
            Start
          </button>
        </div>
      ) : (
        <div className="playing">
          {!show &&
            data &&
            data.fruits.map((fruit, i) => {
              return (
                <div className="fruits" key={i}>
                  <img src={fruit.fruit} alt="fruit" />
                </div>
              );
            })}
          <div className="fruitsCart">
            <SliderFruits fruits={randomFruits} />
            <SliderFruits fruits={randomFruits} />
            <SliderFruits fruits={randomFruits} />
            <SliderFruits fruits={randomFruits} />
          </div>
          <button onClick={playing}>{data && data.moneys} Playing</button>
        </div>
      )}
    </div>
  );
};
export default FruitsCart;
