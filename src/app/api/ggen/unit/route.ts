import { initDB } from "@/initDB";
import { GGenUnit } from "@/src/model/ggen-unit";

export async function GET(request: Request) {
    if (request.headers.get('host')?.includes("localhost")) {
        const connection = await initDB();
        const unit = await connection.getRepository(GGenUnit).find()
        connection.close();
        return Response.json({ unit });
      }
      return new Response('Not Acceptable', { status: 406 })
  }

export async function POST(request: Request) {
  if (request.headers.get('host')?.includes("localhost")) {
    const reqBody = await request.json();
    const connection = await initDB();
    const createWeapon = await connection.getRepository(GGenUnit).save(reqBody)
    connection.close();
    return Response.json({ createWeapon });
  }
  return new Response('Not Acceptable', { status: 406 })
}