// src/server/trpc/router/index.ts
import {t} from "../trpc";
import {authRouter} from "./auth";
import {tweetRouter} from "./tweet";
import {userRouter} from "./user";

export const appRouter = t.router({
	auth: authRouter,
	tweet: tweetRouter,
	user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
