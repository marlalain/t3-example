import {t} from "../trpc";
import {z} from "zod";

export const tweetRouter = t.router({
	getUserTweets: t.procedure
		.query(async ({ctx}) => {
			return ctx.prisma.tweet.findMany({
				select: {
					id: true,
					text: true,
					createdAt: true,
				},
				where: {
					authorId: ctx.session?.user?.id,
				},
			});
		}),
	likes: t.procedure
		.input(z.string().cuid())
		.query(async ({ctx, input}) => {
			const likes = await ctx.prisma.tweet.findUnique({
				where: {
					id: input,
				},
				select: {
					Like: {
						select: {
							id: true,
						}
					}
				}
			})

			return likes?.Like.length ?? 0;
		}),
});
