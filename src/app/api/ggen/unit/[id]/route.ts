import { initDB } from "@/initDB";
import { GGenUnit } from "@/src/model/ggen-unit";

export async function GET(request: Request, { params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    if (request.headers.get('host')?.includes("localhost")) {
        const connection = await initDB();
        const unit = await connection.getRepository(GGenUnit).findOne({where:{id:id},relations:{weapons:true}})
        connection.close();
        return Response.json({ unit });
      }
      return new Response('Not Acceptable', { status: 406 })
  }