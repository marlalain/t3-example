// src/pages/_app.tsx
import "../styles/globals.css";
import {SessionProvider} from "next-auth/react";
import type {AppType} from "next/dist/shared/lib/utils";
import {trpc} from "../utils/trpc";
import {ChakraProvider} from "@chakra-ui/react";

const MyApp: AppType = ({Component, pageProps}) => {
	return (
		<ChakraProvider>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	);
};

export default trpc.withTRPC(MyApp);
