import { Ticket } from './ticket';

export interface Column {
  title: string;
  onBoard: boolean;
  tickets: Array<Ticket>;
}