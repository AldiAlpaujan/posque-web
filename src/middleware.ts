import {NextResponse} from 'next/server';
import { HandleError } from './core/api/error/handle-error';

export function middleware() {
  return NextResponse.next();
}