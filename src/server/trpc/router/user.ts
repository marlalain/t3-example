import {t} from "../trpc";

export const userRouter = t.router({
	userProfile: t.procedure.query(async ({ctx}) => {
		return ctx.prisma.user.findUnique({
			where: {
				id: ctx.session?.user?.id,
			},
			select: {
				name: true,
				bio: true,
				image: true,
			}
		});
	}),
});
