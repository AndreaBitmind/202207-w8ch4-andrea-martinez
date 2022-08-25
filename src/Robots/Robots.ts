import "../loadEnvironment";
import Debug from "debug";
import { IRobot } from "../interfaces/interfaces";

const debug = Debug("robots-factory:src:Robots:Robots");

class Robot implements IRobot {
  name: string;

  type: string;

  battery: number;

  reset: () => {};

  randomName: () => {};

  constructor(nameRobot: string, typeRobot: string) {
    this.name = nameRobot;
    this.type = typeRobot;
  }

  work() {
    if (this.type === "Cleaner") {
      debug("Larala larita, I clean my little house");
    } else if (this.type === "Waiter") {
      debug("Do you feel like a mini of fuet?");
    } else {
      debug("JavaScript is cool - I develop with JavaScript -> I'm cool");
    }
  }
}

export default Robot;
