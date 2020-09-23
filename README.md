<h1>Endpoints</h1>

<h2>Users</h2>
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

<h2>Posts</h2>

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

When successful will return status code of 200 (OK) and the photo object. The photo by id endpoint includes the post details as well as the total of votes (up votes - down votes), and array of comments.

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
