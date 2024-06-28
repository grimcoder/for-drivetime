import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const services: { id: string; name: string; duration: number }[] = [
  { id: '1', name: 'Synthetic Oil Change', duration: 3600 },
  { id: '2', name: 'Tire Rotation & Inspection', duration: 5400 },
  { id: '3', name: 'Express Auto Detailing', duration: 7200 },
];

export async function GET() {
  return NextResponse.json(services);
}