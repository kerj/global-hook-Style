import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  counter: 0,
  amount: 0,
  setting: false,
  poison: false,
  poisonCounter: 0,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
