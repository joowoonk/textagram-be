# Textagram API Documentation

BaseURL: https://textagram-be.herokuapp.com/

A REST API using Node.js, Express, knex.js, and PostgresQL.
</br>Authentication implemented using bcrypt and JSON web token.

# Endpoints

### Authentication

<details>
<summary><b>POST - Register a new user</b></summary>

<b>Endpoint:</b> `/auth/register`
</br>
Requires an object with an email, password and username:

```json
{
  "email": "john@email.com",
  "password": "password",
  "username": "john"
}
```

When successful will return status code of 201 (CREATED), the new user object and a token (example):

```json
{
  "User": {
    "id": 2,
    "username": "john",
    "email": "john@mail.com",
    "created_at": "2020-07-30T09:39:45.164Z",
    "fake_id": "acct45113",
    "location": null,
    "profile_picture": "https://static.wixstatic...",
    "about": "About yourself",
    "is_admin": false
  },
  "token": "eyJhbGc..."
}
```

```json
{
  "User": {
    "id": 1,
    "username": "admin",
    "email": "admin@textagram.com",
    "created_at": "2020-07-24 10:10:29",
    "fake_id": "ADMINKANG", //
    "location": null,
    "profile_picture": "https://static.wixstat...",
    "about": "About yourself",
    "is_admin": true
  },
  "token": "eyJhbGc..."
}
```

</details>
<!-- Break -->
<details>
<summary><b>POST - Login into an account</b></summary>

<b>Endpoint:</b> `/auth/login`
</br>
Requires an object with an email and password:

```json
{
  "email": "john@mail.com",
  "password": "password"
}
```

When successful will return status code of 201 (CREATED), the new user object and a token (example):

```json
{
  "user": {
    "id": 2,
    "username": "John",
    "email": "john@mail.com",
    "created_at": "2020-09-06T07:02:30.764Z",
    "fake_id": "acct0fe28",
    "location": "Berlin, Germany",
    "profile_picture": "https://static.wixstat...",
    "about": "About yourself",
    "is_admin": false
  },
  "token": "eyJhbG..."
}
```

```json
{
  "user": {
    "id": 1,
    "username": "KANG",
    "email": "admin@textagram.com",
    "created_at": "2020-07-24 10:10:29",
    "fake_id": "ADMINKANG", //
    "location": null,
    "profile_picture": "https://static.wixstat...",
    "about": "About yourself",
    "is_admin": true
  },
  "token": "eyJhbGc..."
}
```

</details>

### Users

<details>
<summary><b>GET - Get all users</b></summary>

<b>Endpoint:</b> `/users/`
</br>
No token or request body required.

When successful will return status code of 200 (OK) and an array of users.

```json
[
  {
    "id": 1,
    "username": "KANG",
    "password": "$2a$10$XMCULNrp8qcFE4b5SmjxfOdOi4nJ9vaL94oTsEX9p1Qd8HmA.zdNa",
    "email": "admin@textagram.com",
    "created_at": "2020-09-19T20:51:24.150Z",
    "fake_id": "ADMINKANG",
    "location": "Los Angeles, CA",
    "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549136/textagram/jjlsiypxt95wsjpb7cxu.png",
    "about": "Welcome to my website! If you run into any bugs or issues send me a message to get it fixed. I will handle all of the technical details and making sure you have a smooth experience.",
    "is_admin": true
  },
  {
    "id": 2,
    "username": "John",
    "password": "$2a$10$/kJRwItSVmcfQ0tDL1vIW.vIX5YOr9oQs/WB.auplvvLxF5B4SfkW",
    "email": "john@mail.com",
    "created_at": "2020-09-19T20:51:57.894Z",
    "fake_id": "acct862b6",
    "location": "New York, NY",
    "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549341/textagram/f1xcdiwslh7hu50dipql.jpg",
    "about": "Would you like to recommend me great movies?",
    "is_admin": false
  }
]
```

</details>

<details>
<summary><b>GET - Get a single user by ID</b></summary>

<b>Endpoint:</b> `/users/:id`
</br>
No token or request body required.

When successful will return status code of 200 (OK) and the user in an object. The user by id endpoint includes the user's bio info, as well as their array of posts, up votes, down votes, comments,favorites, and followers.

```json
{
  "user": {
    "id": 2,
    "username": "John",
    "email": "john@mail.com",
    "created_at": "2020-09-19T20:51:57.894Z",
    "fake_id": "acct862b6",
    "location": "New York, NY",
    "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549341/textagram/f1xcdiwslh7hu50dipql.jpg",
    "about": "Would you like to recommend me great movies?",
    "is_admin": false,
    "posts": [
      {
        "id": 3,
        "title": "One of best quote from Rush",
        "context": [
          "A wise man can learn more from his enemies than a fool from his friends.",
          "      –Niki Lauda"
        ],
        "created_at": "2020-09-19T20:52:16.194Z",
        "hashtags": ["#movie", "#Rush", "#inspirational"],
        "user_id": 2,
        "feeling": "😃 awesome",
        "votes": 0,
        "comments": []
      },
      {
        "id": 2,
        "title": "One of best quote from Forrest Gump",
        "context": [
          "My mama always said, ‘Life was like a box of chocolates. You never know what you’re gonna get.'",
          "         -Forrest Gump"
        ],
        "created_at": "2020-09-19T20:52:16.194Z",
        "hashtags": ["#bestMovie", "#forrest", "#gump", "#life"],
        "user_id": 2,
        "feeling": "😇 optimistic",
        "votes": 0,
        "comments": [
          {
            "id": 8,
            "comment": ["Forest Gump is such a best movie in our life time"],
            "created_at": "2020-09-19T20:52:52.928Z",
            "user_id": 3,
            "fake_id": "acctdd1d3",
            "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549277/textagram/b2plpajntmyovuknnkcp.jpg"
          }
        ]
      },
      {
        "id": 18,
        "title": "Gratitude (an excerpt from my writing)",
        "context": [
          "Gratitude",
          "",
          "      Fight is what gets you up each morning. It is what pushes you and keeps you grounded when you take your next step. The pain and struggle that you endure on a daily basis makes you appreciate the good moments of life. I’ve learned that the reward you receive is when you start reaching that never-ending goal of greatness. Being grateful for these moments can propel you to that next step. I understand that the road is not always easy but once you come to that realization that you can take those next steps, then anything is possible. Keep faith and expect the best.",
          "      ",
          "      \"As we express our gratitude, we must never forget that the highest appreciation is not to utter words but to live by them.\" John F. Kennedy. Embrace this. There are too many people in this world who take things for granted, including themselves. In the bigger picture, you will never get satisfaction from those great moments if you don’t appreciate even the smallest moments in your life. If you receive a compliment, embrace those words like John F Kennedy stated. Why would someone give you a compliment that they thought out, and not wanted you to feel good about it? They mean it and want you to receive their reward.",
          "      This Post was from r/inspiration",
          "      [https://www.reddit.com/r/inspiration/comments/inbv68/gratitude_an_excerpt_from_my_writing/]"
        ],
        "created_at": "2020-09-19T20:52:35.170Z",
        "hashtags": ["#reddit", "#inspiration"],
        "user_id": 2,
        "feeling": "😊 thankful",
        "votes": 2,
        "comments": []
      }
    ],
    "bookmarks": [],
    "upVotes": [],
    "downVotes": [],
    "following": [],
    "followers": []
  },
  "post": [
    {
      "id": 3,
      "title": "One of best quote from Rush",
      "context": [
        "A wise man can learn more from his enemies than a fool from his friends.",
        "      –Niki Lauda"
      ],
      "created_at": "2020-09-19T20:52:16.194Z",
      "hashtags": ["#movie", "#Rush", "#inspirational"],
      "user_id": 2,
      "feeling": "😃 awesome",
      "votes": 0,
      "comments": []
    },
    {
      "id": 2,
      "title": "One of best quote from Forrest Gump",
      "context": [
        "My mama always said, ‘Life was like a box of chocolates. You never know what you’re gonna get.'",
        "         -Forrest Gump"
      ],
      "created_at": "2020-09-19T20:52:16.194Z",
      "hashtags": ["#bestMovie", "#forrest", "#gump", "#life"],
      "user_id": 2,
      "feeling": "😇 optimistic",
      "votes": 0,
      "comments": [
        {
          "id": 8,
          "comment": ["Forest Gump is such a best movie in our life time"],
          "created_at": "2020-09-19T20:52:52.928Z",
          "user_id": 3,
          "fake_id": "acctdd1d3",
          "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549277/textagram/b2plpajntmyovuknnkcp.jpg"
        }
      ]
    },
    {
      "id": 18,
      "title": "Gratitude (an excerpt from my writing)",
      "context": [
        "Gratitude",
        "",
        "      Fight is what gets you up each morning. It is what pushes you and keeps you grounded when you take your next step. The pain and struggle that you endure on a daily basis makes you appreciate the good moments of life. I’ve learned that the reward you receive is when you start reaching that never-ending goal of greatness. Being grateful for these moments can propel you to that next step. I understand that the road is not always easy but once you come to that realization that you can take those next steps, then anything is possible. Keep faith and expect the best.",
        "      ",
        "      \"As we express our gratitude, we must never forget that the highest appreciation is not to utter words but to live by them.\" John F. Kennedy. Embrace this. There are too many people in this world who take things for granted, including themselves. In the bigger picture, you will never get satisfaction from those great moments if you don’t appreciate even the smallest moments in your life. If you receive a compliment, embrace those words like John F Kennedy stated. Why would someone give you a compliment that they thought out, and not wanted you to feel good about it? They mean it and want you to receive their reward.",
        "      This Post was from r/inspiration",
        "      [https://www.reddit.com/r/inspiration/comments/inbv68/gratitude_an_excerpt_from_my_writing/]"
      ],
      "created_at": "2020-09-19T20:52:35.170Z",
      "hashtags": ["#reddit", "#inspiration"],
      "user_id": 2,
      "feeling": "😊 thankful",
      "votes": 2,
      "comments": []
    }
  ]
}
```

</details>

<details>
<summary><b>PUT - Update an existent user</b></summary>

<b>Endpoint:</b> `/users/:id`
</br>
Authorization token required in headers. The user is authorized to update their own bio. Admin has accessibility to update other accounts' information as well.
Requires a request body with the updated changes. Please see Data model portion of this documentation for required fields. Here is an example:

```json
{
  "profile_picture": "https://res.cloudinary.com/...",
  "about": "Glad to meet you!",
  "location": "Los Angeles, CA"
}
```

When successful will return status code of 201 (CREATED), the updated user object (example):

```json
{
  "editedProfile": {
    "id": 2,
    "username": "John",
    "email": "john@mail.com",
    "created_at": "2020-09-06T07:02:30.764Z",
    "fake_id": "acct0fe28",
    "location": "Los Angeles, CA",
    "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324054/textagram/x1wmrtzx4lskie9dx4gk.png",
    "about": "Glad to meet you!",
    "is_admin": false
  }
}
```

</details>

### Posts

<details>
<summary><b>GET - Fetching all posts</b></summary>

<b>Endpoint:</b> `/posts`
</br>
No token or request body required.

When successful will return status code of 200 (READ), the all posts (example):

```json
{
  "posts": [
    {
      "id": 5,
      "title": "Life isn't easy",
      "context": [
        "Living a life isn't a easy process, but do we really get to live a life we want? We will really have to think about that. Is this life what you want? If you die tonight, would you say you lived a life that you wanted? What are the things you can fix today? or something you need to do. Long term problem isn't something you may not be able to escape but are you working on it at least little by little?, you will be able to fix them eventually. Start small. You will be able to overcome it in the end."
      ],
      "created_at": "2020-09-06T07:02:36.356Z",
      "user_id": 3,
      "feeling": "🧐 motivated",
      "hashtags": ["#encouraging", "#life"],
      "fake_id": "acct5fbf4",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324171/textagram/qvgz8succ7lvqmh287nl.jpg",
      "is_admin": false,
      "votes": 0,
      "comments": 0
    },
    {
      "id": 4,
      "title": "One of best line I heard from Yoda!",
      "context": [
        "Do, or do not. There is no 'try' ",
        "      ",
        "      - Yoda"
      ],
      "created_at": "2020-09-06T07:02:36.356Z",
      "user_id": 3,
      "feeling": "😌 chill",
      "hashtags": ["#StarWars", "#MayTheForceBeWithYou", "#Yoda"],
      "fake_id": "acct5fbf4",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324171/textagram/qvgz8succ7lvqmh287nl.jpg",
      "is_admin": false,
      "votes": 1,
      "comments": 3
    },
    {
      "id": 3,
      "title": "One of best quote from Rush",
      "context": [
        "A wise man can learn more from his enemies than a fool from his friends.",
        "      –Niki Lauda"
      ],
      "created_at": "2020-09-06T07:02:36.356Z",
      "user_id": 2,
      "feeling": "🤩 amazing",
      "hashtags": ["#movie", "#Rush", "#inspirational"],
      "fake_id": "acct0fe28",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324054/textagram/x1wmrtzx4lskie9dx4gk.png",
      "is_admin": false,
      "votes": 1,
      "comments": 0
    },
    {
      "id": 2,
      "title": "One of best quote from Forrest Gump",
      "context": [
        "My mama always said, ‘Life was like a box of chocolates. You never know what you’re gonna get.'",
        "         -Forrest Gump"
      ],
      "created_at": "2020-09-06T07:02:36.356Z",
      "user_id": 2,
      "feeling": "😭 emotional",
      "hashtags": ["#bestMovie", "#forrest", "#gump", "#life"],
      "fake_id": "acct0fe28",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324054/textagram/x1wmrtzx4lskie9dx4gk.png",
      "is_admin": false,
      "votes": 2,
      "comments": 1
    },
    {
      "id": 1,
      "title": "One best quote regarding a honest friendship",
      "context": [
        "Bestfriend is not just a word. A best friend is someone who is there for you, no matter what. Thick or thin. I can label anyone as a friend. But a bestfriend..? That is something that needs to be earned. A bestfriend knows me sometimes more than I know myself. Bestfriends share tears and laughs. You can trust them with anything and everything. I have a bunch of friends, but only a few that I can count on completely"
      ],
      "created_at": "2020-09-06T07:02:36.356Z",
      "user_id": 1,
      "feeling": "😃 fat",
      "hashtags": ["#friendship", "#friends", "#bestFriend"],
      "fake_id": "ADMINKANG",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324311/textagram/fdbinbuqtbtls3lp8wsk.png",
      "is_admin": true,
      "votes": 1,
      "comments": 4
    }
  ]
}
```

</details>

<details>
<summary><b>GET - Fetching a single post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id`
</br>
No token or request body required.

When successful will return status code of 200 (OK) and the posts object. The posts by id endpoint includes the post details as well as the total of votes (up votes - down votes), and array of comments.

```json
{
  "post": {
    "id": 1,
    "title": "One best quote regarding a honest friendship",
    "context": [
      "Bestfriend is not just a word. A best friend is someone who is there for you, no matter what. Thick or thin. I can label anyone as a friend. But a bestfriend..? That is something that needs to be earned. A bestfriend knows me sometimes more than I know myself. Bestfriends share tears and laughs. You can trust them with anything and everything. I have a bunch of friends, but only a few that I can count on completely"
    ],
    "created_at": "2020-09-06T07:02:36.356Z",
    "hashtags": ["#friendship", "#friends", "#bestFriend"],
    "feeling": "😃 fat",
    "fake_id": "ADMINKANG",
    "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324311/textagram/fdbinbuqtbtls3lp8wsk.png",
    "is_admin": true,
    "user_id": 1,
    "votes": {
      "votes": 1,
      "upVoted": [
        {
          "user_id": 25,
          "post_id": 1,
          "fake_id": "acct87314",
          "profile_picture": "https://static.wixstatic.com/media/4151a5_7706b6198d164a3e947f4548166228ad~mv2.png"
        }
      ],
      "downVoted": []
    },
    "comments": [
      {
        "id": 2,
        "comment": [
          "Having three real friends in life is equivalent to having a successful life"
        ],
        "created_at": "2020-09-06T07:02:50.828Z",
        "user_id": 3,
        "fake_id": "acct5fbf4",
        "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324171/textagram/qvgz8succ7lvqmh287nl.jpg"
      },
      {
        "id": 8,
        "comment": ["This is great!"],
        "created_at": "2020-09-13T08:22:34.068Z",
        "user_id": 32,
        "fake_id": "acctfed4a",
        "profile_picture": "https://static.wixstatic.com/media/4151a5_7706b6198d164a3e947f4548166228ad~mv2.png"
      },
      {
        "id": 11,
        "comment": ["Thank you guys!", "", "I really appreicated!", ""],
        "created_at": "2020-09-13T08:45:16.589Z",
        "user_id": 1,
        "fake_id": "ADMINKANG",
        "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324311/textagram/fdbinbuqtbtls3lp8wsk.png"
      },
      {
        "id": 15,
        "comment": ["@acct5fbf4 I agree 100%"],
        "created_at": "2020-09-14T04:58:59.055Z",
        "user_id": 1,
        "fake_id": "ADMINKANG",
        "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600324311/textagram/fdbinbuqtbtls3lp8wsk.png"
      }
    ]
  }
}
```

</details>
<details>
<summary><b>PUT - Edit post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id`
</br>
Authorization token required in headers. The user is authorized to update their own post. Admin has accessibility to update other accounts' posts as well.

Requires a request body with the updated changes. Please see Data model portion of this documentation for required fields. Here is an example:

```json
{
  "title": "UPDATED:A Famous Quote from back to the future",
  "hashtags": ["#quote", "#movie"]
}
```

```json
{
  "id": 33,
  "title": "UPDATED:A Famous Quote from back to the future",
  "context": [
    "“Your future is whatever you make it, so make it a good one.” - Doc"
  ],
  "created_at": "2020-09-20T22:18:57.457Z",
  "hashtags": ["#quote", "#movie"],
  "feeling": "😇 inspired",
  "fake_id": "acctfac9e",
  "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600640375/textagram/im1p8id2qeu9afrfkkfv.jpg",
  "is_admin": false,
  "user_id": 17,
  "votes": {
    "votes": 2,
    "upVoted": [
      {
        "user_id": 17,
        "post_id": 33,
        "fake_id": "acctfac9e",
        "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600640375/textagram/im1p8id2qeu9afrfkkfv.jpg"
      },
      {
        "user_id": 18,
        "post_id": 33,
        "fake_id": "acctbd60a",
        "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600664556/textagram/g246nirqugqljx9sx4no.jpg"
      }
    ],
    "downVoted": []
  }
}
```

</details>

<details>
<summary><b>GET - Search posts by titles</b></summary>
<b>Endpoint:</b> `/posts/search/:title`

Requires a request body using params that matches a key word to find posts by title. As an example, a user uses keyword on the place of title https://textagram-be.herokuapp.com/api/posts/search/'famous' famouse will triger search and look for posts that has title of that key words.

```json
{
  "posts": [
    {
      "id": 33,
      "title": "UPDATED:A Famous Quote from back to the future",
      "context": [
        "“Your future is whatever you make it, so make it a good one.” - Doc"
      ],
      "hashtags": ["#quote", "#movie"],
      "created_at": "2020-09-20T22:18:57.457Z",
      "feeling": "😇 inspired",
      "fake_id": "acctfac9e",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600640375/textagram/im1p8id2qeu9afrfkkfv.jpg",
      "is_admin": false,
      "votes": 3,
      "comments": 0
    }
  ]
}
```

</details>

<details>
<summary><b>POST - Add a new post</b></summary>
<b>Endpoint:</b> `/posts`

Authorization token required in headers. This is how the user's id is assigned to their post.
Requires a request body with the post info. Please see Data model portion of this documentation for required fields. Here is an example:

```json
{
  "title": "Just because you are in a bad situation",
  "hashtags": "",
  "context": "Doesn't mean you will stuck in a bad place forever, I hope you find things what you can control. Doesn't matter if it's small but keep on working on small things. Once you know how to finish small thing well, bigger things will come to you when you are ready."
}
```

When successful will return status code of 201 (CREATED), the new post object that are joint with other tables:

```json
{
  "newPost": {
    "id": 37,
    "title": "Just because you are in a bad situation",
    "context": [
      "Doesn't mean you will stuck in a bad place forever, I hope you find things what you can control. Doesn't matter if it's small but keep on working on small things. Once you know how to finish small thing well, bigger things will come to you when you are ready."
    ],
    "created_at": "2020-09-24T05:40:20.453Z",
    "hashtags": [],
    "feeling": null,
    "fake_id": "accta1e96",
    "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600566435/textagram/oe7irlf84m4wbmaofboc.jpg",
    "is_admin": false,
    "user_id": 16,
    "votes": {
      "votes": 0,
      "upVoted": [],
      "downVoted": []
    }
  }
}
```

</details>

<details>
<summary><b>DELETE - Delete Post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id`

Authorization token required in headers. Only the user is authorized to delete their own posts.
No request body required.
Admin has accessibility to delete other accounts' posts as well.

When successful will return status code of 200 (OK) and a success message:

```json
{
  "message": "Your post is gone."
}
```

</details>

<details>
<summary><b>PUT - Update Post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id`

Authorization token required in headers. Only the user is authorized to delete their own posts.
No request body required.
Admin has accessibility to update other accounts' posts as well.

Please see Data model portion of this documentation for required fields. Here is an example:

```json
{
  "title": "UPDATED:A Famous Quote from back to the future",
  "hashtags": ["#quote", "#movie"]
}
```

When successful will return status code of 201 (CREATED) and with the post that's been updated:

```json
{
  "id": 33,
  "title": "UPDATED:A Famous Quote from back to the future",
  "context": [
    "“Your future is whatever you make it, so make it a good one.” - Doc"
  ],
  "created_at": "2020-09-20T22:18:57.457Z",
  "hashtags": ["#quote", "#movie"],
  "feeling": "😇 inspired",
  "fake_id": "acctfac9e",
  "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600640375/textagram/im1p8id2qeu9afrfkkfv.jpg",
  "is_admin": false,
  "user_id": 17,
  "votes": {
    "votes": 3,
    "upVoted": [
      {
        "user_id": 17,
        "post_id": 33,
        "fake_id": "acctfac9e",
        "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600640375/textagram/im1p8id2qeu9afrfkkfv.jpg"
      },
      {
        "user_id": 18,
        "post_id": 33,
        "fake_id": "acctbd60a",
        "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600664556/textagram/g246nirqugqljx9sx4no.jpg"
      },
      {
        "user_id": 1,
        "post_id": 33,
        "fake_id": "ADMINKANG",
        "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549136/textagram/jjlsiypxt95wsjpb7cxu.png"
      }
    ],
    "downVoted": []
  }
}
```

</details>

<details>
<summary><b>POST - Bookmark Post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id/bookmark`

Authorization token required in headers. Only the user is authorized to bookmark others' posts.
No request body required.

As for example, inserted id 21 on :id area.

When successful will return status code of 200 (OK) and of every post that the user bookmarked so far including post's id by 21:

```json
{
  "post": [
    ...post,
    {
      "id": 21,
      "title": "Hello From The Admin!",
      "context": [
        "Welcome to my website! Start coding since Feb. 2020! If you run into any bugs or issues send me a message to get it fixed. I will handle all the technical details and making sure you have a smooth experience. - 9/19/2020"
      ],
      "user_id": 1,
      "fake_id": "ADMINKANG",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549136/textagram/jjlsiypxt95wsjpb7cxu.png",
      "bookmarks": "6",
      "comments": 0
    },
    {
      "id": 1,
      "title": "One best quote regarding a honest friendship",
      "context": [
        "Bestfriend is not just a word. A best friend is someone who is there for you, no matter what. Thick or thin. I can label anyone as a friend. But a bestfriend..? That is something that needs to be earned. A bestfriend knows me sometimes more than I know myself. Bestfriends share tears and laughs. You can trust them with anything and everything. I have a bunch of friends, but only a few that I can count on completely"
      ],
      "user_id": 1,
      "fake_id": "ADMINKANG",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549136/textagram/jjlsiypxt95wsjpb7cxu.png",
      "bookmarks": "1",
      "comments": 2
    }
  ]
}
```

</details>

<details>
<summary><b>DELETE - Unbookmark Post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id/unbookmark`

Authorization token required in headers. Only the user is authorized to delete their own posts.
No request body required.

When successful will return status code of 200 (OK) and a success message:

```json
{
  "message": "The bookmark got canceled"
}
```

</details>

<details>
<summary><b>POST - Up Vote Post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id/upvote`

Authorization token required in headers. Only the user is authorized to up vote others' posts.
No request body required.

As for example, inserted id 21 on :id area.

When successful will return status code of 201 (CREATE) and of every post that the user up votes on other posts including post's id by 21:

```json
{
  "post": [
    ...posts,
    {
      "id": 21,
      "title": "Hello From The Admin!",
      "context": [
        "Welcome to my website! Start coding since Feb. 2020! If you run into any bugs or issues send me a message to get it fixed. I will handle all the technical details and making sure you have a smooth experience. - 9/19/2020"
      ],
      "user_id": 1,
      "fake_id": "ADMINKANG",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549136/textagram/jjlsiypxt95wsjpb7cxu.png",
      "votes": 4
    }
  ]
}
```

</details>

<details>
<summary><b>DELETE - Canceling Up Vote Post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id/removeupvote`

Authorization token required in headers. Only the user is authorized to cancel up vote others' posts.
No request body required.

When successful will return status code of 200 (OK) and a success message:

```json
{
  "message": "The up vote got canceled"
}
```

</details>

<details>
<summary><b>POST - Down Vote Post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id/upvote`

Authorization token required in headers. Only the user is authorized to up vote others' posts.
No request body required.

As for example, inserted id 21 on :id area.

When successful will return status code of 201 (CREATE) and of every post that the user down votes on other posts including post's id by 21:

```json
{
  "post": [
    ...posts,
    {
      "id": 21,
      "title": "Hello From The Admin!",
      "context": [
        "Welcome to my website! Start coding since Feb. 2020! If you run into any bugs or issues send me a message to get it fixed. I will handle all the technical details and making sure you have a smooth experience. - 9/19/2020"
      ],
      "user_id": 1,
      "fake_id": "ADMINKANG",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549136/textagram/jjlsiypxt95wsjpb7cxu.png",
      "votes": 3
    }
  ]
}
```

</details>

<details>
<summary><b>DELETE - Canceling Down Vote Post by ID</b></summary>
<b>Endpoint:</b> `/posts/:id/removedownvote`

Authorization token required in headers. Only the user is authorized to cancel up vote others' posts.
No request body required.

When successful will return status code of 200 (OK) and a success message:

```json
{
  "message": "The down vote got canceled"
}
```

</details>

### Comments

<details>
<summary><b>GET - Get Comment by ID</b></summary>
<b>Endpoint:</b> `/comments/:id`

No token or request body required.

When successful will return status code of 200 (OK) and the comment objectt. The comment by id endpoint includes the comment details

```json
{
  "comment": {
    "id": 6,
    "comment": ["first comments! Ooh hoo!"],
    "created_at": "2020-09-19T20:52:52.928Z",
    "post_id": 1,
    "user_id": 2
  }
}
```

</details>
<details>
<summary><b>POST - Add Comment by Post ID</b></summary>
<b>Endpoint:</b> `/comments/:id`

Authorization token required in headers. Only the user is authorized to add a comment to a post by its post id.

When successful will return status code of 201 (CREATE) and comment object:

```json
{
  "newComment": {
    "id": 24,
    "comment": ["Thank you for the post!"],
    "created_at": "2020-09-25T22:54:04.403Z",
    "post_id": 2,
    "user_id": 1
  }
}
```

</details>
<details>
<summary><b>GET - Get Comments by Post ID</b></summary>
<b>Endpoint:</b> `/comments/post/:id`

No token or request body required.

When successful will return status code of 200 (OK) and the comment objects. The comment by post id endpoint including the comments' details

```json
{
  "comments": [
    {
      "id": 6,
      "comment": ["first comments! Ooh hoo!"],
      "created_at": "2020-09-19T20:52:52.928Z",
      "user_id": 2,
      "fake_id": "acct862b6",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549341/textagram/f1xcdiwslh7hu50dipql.jpg"
    },
    {
      "id": 7,
      "comment": [
        "Having three real friends in life is equivalent to having a successful life"
      ],
      "created_at": "2020-09-19T20:52:52.928Z",
      "user_id": 3,
      "fake_id": "acctdd1d3",
      "profile_picture": "https://res.cloudinary.com/dujr5xene/image/upload/v1600549277/textagram/b2plpajntmyovuknnkcp.jpg"
    }
  ]
}
```

</details>
<details>
<summary><b>GET - Get Comments by User ID</b></summary>
<b>Endpoint:</b> `/comments/user/:id`

No token or request body required.

When successful will return status code of 200 (OK) and the comment objects. The comments by user id endpoint including the comments' details

```json
{
  "comments": [
    {
      "id": 6,
      "comment": ["first comments! Ooh hoo!"],
      "created_at": "2020-09-19T20:52:52.928Z",
      "post_id": 1,
      "user_id": 2
    },
    {
      "id": 9,
      "comment": ["May the force be with you!"],
      "created_at": "2020-09-19T20:52:52.928Z",
      "post_id": 4,
      "user_id": 2
    }
  ]
}
```

</details>

<details>
<summary><b>PUT - Edit comment by ID</b></summary>
<b>Endpoint:</b> `/comments/:id`
</br>
Authorization token required in headers. The user is authorized to update their own post. Admin has accessibility to update other accounts' posts as well.

Requires a request body with the updated changes. Please see Data model portion of this documentation for required fields. Here is an example:

```json
{
  "comment": ["Thank you for the post!"]
}
```

When successful will return status code of 201 (CREATED), the updated comment object (example):

```json
{ "message": "comment now updated" }
```

</details>
<details>
<summary><b>DELETE - Delete Post by ID</b></summary>
<b>Endpoint:</b> `/comments/:id`

Authorization token required in headers. Only the user is authorized to delete their own comments.
No request body required.
Admin has accessibility to delete other accounts' comments as well.

When successful will return status code of 200 (OK) and a success message:

```json
{
  "message": "Your comment's successfully deleted."
}
```

</details>
