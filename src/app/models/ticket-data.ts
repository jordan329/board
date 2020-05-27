import { TicketPriority } from './enums/ticket-priority';
import { TicketType } from './enums/ticket-type';
import {v4 as uuid} from 'uuid';

export interface TicketData {
  description?: string;
  title: string;
  points?: number;
  priority?: TicketPriority;
  type?: TicketType;
  section: string;
  id: uuid;
}