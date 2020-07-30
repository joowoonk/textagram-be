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
    "fake_id": "ADMIN", //
    "location": null,
    "profile_picture": "https://static.wixstat...",
    "about": "About yourself"
    "is_admin": true,
  },
  "token": "eyJhbGc..."
}
```

</details>
