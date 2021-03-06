import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gamesPatch, gamesPost } from "../redux/fruitGames/gamesAction";
import { FruitsCart } from "../companents";
import "../styles/fruits/fruits.css";
function QuestionGame() {
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
  return (
    <>
      <input
        type="name"
        name="name"
        value={form.name}
        onChange={changeHandler}
      />
      <div className="contGame">
        <button onClick={startPlay}>Start</button>
        <p onClick={playing}>{data && data.moneys} Playing</p>
        {data &&
          data.fruits.map((fruit, i) => {
            return (
              <div className="fruits" key={i}>
                <img src={fruit.fruit} alt="fruit" />
              </div>
            );
          })}
        {show && <FruitsCart data={data} />}
      </div>
    </>
  );
}
export default QuestionGame;
