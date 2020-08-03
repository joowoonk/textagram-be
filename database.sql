CREATE DATABASE textagram;

Select * from users;

INSERT INTO posts (
 	title,
	context,
	votes,
	hashtags,
	user_id
)

VALUES ('One best quote regarding a honest friendship', 'Bestfriend is not just a word. A best friend is someone who is there for you, no matter what. Thick or thin. I can label anyone as a friend. But a bestfriend..? That is something that needs to be earned. A bestfriend knows me sometimes more than I know myself. Bestfriends share tears and laughs. You can trust them with anything and everything. I have a bunch of friends, but only a few that I can count on completely', 0, 'friendship friends bestFriend', 2);

INSERT INTO posts (
 	title,
	context,
	votes,
	hashtags,
	user_id
)

VALUES ('One of best quote from Forrest Gump', '“My mama always said, ‘Life was like a box of chocolates. You never know what you’re gonna get." -Forrest Gump', 0, 'movie forrest gump life', 2);

INSERT INTO posts (
 	title,
	context,
	votes,
	hashtags,
	user_id
)

VALUES ('One of best quote from Rush', '“A wise man can learn more from his enemies than a fool from his friends." –Niki Lauda', 0, 'movie Rush inspirational', 2);




INSERT INTO followers (
following_id,
	follwered_id
)

VALUES (1, 2);