import React, { useState } from "react";
import Alert from "../companents/Alert";
import { useSelector, useDispatch } from "react-redux";
import { playGames } from "../midlleware/fruitGames";
import { gamesPost } from "../redux/fruitGames/gamesAction";
import "../styles/fruits/fruits.css";
function QuestionGame() {
  const [form, setForm] = useState({ name: "" });
  const dispatch = useDispatch();
  const [moneys, setMoneys] = useState();
  const [fruits, setfruits] = useState();
  const alert = useSelector((state) => state.general.alert);
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const play = () => {
    const { moneys, fruits } = playGames();
    setMoneys(moneys);
    setfruits(fruits);
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
        <h1>{moneys}</h1>
        {alert && <Alert text={alert} />}

        <button onClick={play}>play</button>
        {fruits &&
          fruits.map((fru, i) => {
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
