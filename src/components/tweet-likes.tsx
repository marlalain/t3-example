import {trpc} from "../utils/trpc";
import {Badge} from "@chakra-ui/react";

type TweetLikesProps = {
	tweetId: string;
}

// This component doesn't get batched because it depends
// on <UserTweets /> returning the tweet array.
// To batch this component, you could just prop drill the likes
const TweetLikes = ({tweetId}: TweetLikesProps) => {
	const likes = trpc.tweet.likes.useQuery(tweetId);

	if (likes.isLoading)
		return <div>Loading...</div>;

	return <Badge colorScheme={"green"}>{likes.data} likes</Badge>
};

export default TweetLikes;
