import { Player } from './player';

export class Team {
  constructor(private name : string, private abbr : string, private players : Player[]) { }
}