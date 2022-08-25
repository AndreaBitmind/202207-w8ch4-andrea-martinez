export interface IRobot {
  name: string;
  type: string;
  battery: number;
  work: () => void;
  reset: () => {};
  randomName: () => void;
}
