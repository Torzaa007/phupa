import { json } from '@sveltejs/kit';
import Database from 'better-sqlite3';
import path from 'path';
import { generateSQLQuery } from '../../../lib/utils.js';

export async function POST({ request }) {
  const { line, origin, destination, date } = await request.json();

  const dbPath = path.resolve('src/lib/databaseStorage/dbforTrain-2.db');
  const db = new Database(dbPath);

  try {
    // Case 1: Fetch all stations or filtered by line
    if (!origin && !destination) {
      let stationsQuery = `SELECT station_id, station_name FROM STATIONS`;
      if (line) {
        stationsQuery += ` WHERE station_id LIKE '%_${line.toLowerCase()}_%'`;
      }
      const allStations = db.prepare(stationsQuery).all();
      return json({ stations: allStations });
    }

    // Case 2: Fetch trips based on origin, destination, and date
    if (origin && destination && date) {
      const tripsQuery = generateSQLQuery(origin, destination, date);
      const trips = db.prepare(tripsQuery).all();
      return json({ trips });
    }

    // Case 3: Handle missing date input
    if (!date) {
      return json({ error: 'กรุณาเลือกวันที่เดินทาง' }, { status: 400 });
    }

    // Default Error Response for Incomplete Data
    return json({ error: 'ข้อมูลไม่ครบถ้วน' }, { status: 400 });

  } catch (error) {
    console.error('Error fetching data:', error);
    return json(
      { stations: [], trips: [], error: 'ไม่สามารถดึงข้อมูลจากฐานข้อมูลได้' },
      { status: 500 }
    );
  } finally {
    // Ensure the database connection closes in any scenario
    if (db) db.close();
  }
}
