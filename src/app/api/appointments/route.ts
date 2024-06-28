import { NextRequest, NextResponse } from "next/server";

const appointments = {
    '1': [
      { id: 'a1', date: 'Monday, May 5th', time: '08:00 AM', duration: 3600 },
      { id: 'a2', date: 'Monday, May 5th', time: '10:00 AM', duration: 3600 },
      { id: 'a3', date: 'Tuesday, May 6th', time: '02:00 PM', duration: 3600 },
    ],
    '2': [
      { id: 'b1', date: 'Wednesday, May 7th', time: '09:00 AM', duration: 3600 },
      { id: 'b2', date: 'Wednesday, May 7th', time: '11:00 AM', duration: 3600 },
      { id: 'b3', date: 'Thursday, May 8th', time: '01:00 PM', duration: 3600 },
    ],
    '3': [
      { id: 'c1', date: 'Friday, May 9th', time: '08:00 AM', duration: 3600 },
      { id: 'c2', date: 'Friday, May 9th', time: '10:00 AM', duration: 3600 },
      { id: 'c3', date: 'Saturday, May 10th', time: '02:00 PM', duration: 3600 },
    ],
  };
  
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const serviceId = searchParams.get('serviceId');
    if (serviceId && appointments[serviceId]) {
      return NextResponse.json(appointments[serviceId]);
    } else {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
  }