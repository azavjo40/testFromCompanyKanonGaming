import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Question1, Question2, Question3, QuestionGame } from "../pages";
function useRouters() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <QuestionGame />
        </Route>
        <Route path="/question3" exact>
          <Question3 />
        </Route>
        <Route path="/question2" exact>
          <Question2 />
        </Route>
        <Route path="/question1" exact>
          <Question1 />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
export default useRouters;
