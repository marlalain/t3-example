/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import {Container} from "@chakra-ui/react";
import {trpc} from "../utils/trpc";

const UserProfile = () => {
	const profile = trpc.user.userProfile.useQuery();

	if (profile.isLoading)
		return <div>Loading...</div>;

	return <Container backgroundColor={"red.400"} color={"white"} py={6}>
		<h1>{profile.data?.name} Profile</h1>
		{/* eslint-disable-next-line @next/next/no-img-element */}
		<img src={profile.data?.image!} alt={profile.data?.name!}/>
		<h4>{profile.data?.bio}</h4>
	</Container>
}

export default UserProfile;
