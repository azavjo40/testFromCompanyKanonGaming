import React, { useState } from "react";
import Alert from "../companents/Alert";
import { useSelector, useDispatch } from "react-redux";
import { gamesPatch, gamesPost } from "../redux/fruitGames/gamesAction";
import "../styles/fruits/fruits.css";
function QuestionGame() {
  const [form, setForm] = useState({ name: "" });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.games.allDataGames);
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, moneys: 20 });
  };
  const playing = () => {
    dispatch(gamesPatch(data, form));
  };
  const startPlay = () => {
    dispatch(gamesPost(form));
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
          data.fruits.map((fru, i) => {
            return (
              <div className="fruits" key={i}>
                <img src={fru.fruit} alt="fruit" />
              </div>
            );
          })}
      </div>
    </>
  );
}
export default QuestionGame;
