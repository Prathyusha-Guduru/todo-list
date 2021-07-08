import React from 'react';
import Tweet from './Tweet';


const Tweets = () => {
	const tweets = ['Dev','edward','alphonse','winry'];
	return (
		<div>
			{tweets.map((tweet) => (
				<Tweet name = {tweet}/>
			))}
		</div>
	);
}

export default Tweets