export class Todo {

  public id: number;
  public text: string;
  public isCompleted: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = Math.random();
    this.isCompleted = false;
  }
}
