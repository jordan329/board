import { TicketPrority } from './enums/ticket-prority';
import { TicketType } from './enums/ticket-type';

export interface TicketData {
  description?:string;
  title:string;
  points?:number;
  priority?:TicketPrority;
  type?:TicketType;
}