import Actor from "actor-model.mjs";

console.log("I am now here");

const counter = {
  init() {
    return { count: 0 };
  },

  incrementBy(state, { number }) {
    let count = state.count + number;
    return { count };
  },

  logTotal(state) {
    console.log(state.count);
  },
};

const address = Actor.start(counter);

Actor.send(address, ["logTotal"]);

Actor.send(address, ["incrementBy"]);

Actor.send(address, ["logTotal"]);
