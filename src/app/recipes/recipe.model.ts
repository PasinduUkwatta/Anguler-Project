export class Recipe {
  public name :string;
  public descripion :string;
  public imagePath :string;

  constructor(name:string,desc:string,imagePath:string) {
    this.name =name;
    this.descripion =desc;
    this.imagePath =imagePath;
  }

}
