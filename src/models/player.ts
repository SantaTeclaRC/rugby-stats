export class Player {
  constructor(private firstName : string, private otherNames : string) { }

  fullName() { return this.firstName + ' ' + this.otherNames; }
}