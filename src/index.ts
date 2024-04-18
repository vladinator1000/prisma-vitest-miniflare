import { getPrisma } from "./prismaClient";

export interface Env {
  DB: D1Database,
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const prisma = getPrisma(env.DB)
    const { pathname } = new URL(request.url);

    if (pathname === '/') {
      await prisma.user.createMany();
      await prisma.genre.createMany();
      await prisma.event.createMany()
    }

    return new Response('');
  },
};