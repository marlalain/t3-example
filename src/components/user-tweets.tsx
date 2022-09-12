import {trpc} from "../utils/trpc";
import {Container, Flex} from "@chakra-ui/react";
import TweetLikes from "./tweet-likes";

const UserTweets = () => {
	const tweets = trpc.tweet.getUserTweets.useQuery();

	if (tweets.isLoading) return <div>Loading...</div>;

	return <>
		{tweets.data?.map((tweet) => (
			<Flex
				key={tweet.id}
				flexDirection={"column"}
				justifyContent={"space-between"}
				backgroundColor={"green.400"}
				color={"white"}
				justifyItems={"center"} py={2} mt={2}>
				<Container>
					<p>{tweet.text}</p>
					<time>{tweet.createdAt.getTime()}</time>
				</Container>

				<Container>
					<TweetLikes tweetId={tweet.id}/>
				</Container>
			</Flex>
		))}
	</>
}

export default UserTweets;
