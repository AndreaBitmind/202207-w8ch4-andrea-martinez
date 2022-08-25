export type RobotType = "Cleaner" | "Waiter" | "Developer";

export interface IRobot {
  name: string;
  type: RobotType;
  battery: number;
  work: () => void;
  reset: () => {};
  randomName: () => void;
}
