import { createConnection, getRepository } from "typeorm";
import { initDB } from "../../../../../initDB";
import { GGenWeapon } from "@/src/model/ggen-weapon";

export async function GET(request: Request) {
  return new Response('Return All Weapon');
}

export async function POST(request: Request) {
  if (request.headers.get('host')?.includes("localhost")) {
    const reqBody = await request.json();
    const connection = await initDB();
    const createWeapon = await connection.getRepository(GGenWeapon).save(reqBody)
    connection.close();
    return Response.json({ createWeapon });
  }
  return new Response('Not Acceptable', { status: 406 })
}