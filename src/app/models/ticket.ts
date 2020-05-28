import { TicketPriority } from './constants/ticket-priority';
import { TicketType } from './constants/ticket-type';
import { v4 as uuid } from 'uuid';

export interface Ticket {
  description?: string;
  title: string;
  points?: number;
  priority?: string;
  type?: TicketType;
  section: string;
  id: uuid;
  dateLateChanged?: Date;
}