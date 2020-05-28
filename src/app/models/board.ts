import {v4 as uuid} from 'uuid';
import { Column } from './column';

export interface Board {
  id?: uuid;
  name?:string;
  columns:Array<Column>
}