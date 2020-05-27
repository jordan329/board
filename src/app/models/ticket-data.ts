import { TicketPriority } from './enums/ticket-priority';
import { TicketType } from './enums/ticket-type';

export interface TicketData {
  description?:string;
  title:string;
  points?:number;
  priority?:TicketPriority;
  type?:TicketType;
}