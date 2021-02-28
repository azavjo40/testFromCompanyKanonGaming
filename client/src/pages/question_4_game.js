import React from "react";
import Alert from "../companents/Alert";
import { useSelector } from "react-redux";
function QuestionGame() {
  const alert = useSelector((state) => state.general.alert);

  return (
    <div>
      <h1>QuestionGame</h1>
      {alert && <Alert text={alert} />}
    </div>
  );
}
export default QuestionGame;
