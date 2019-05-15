# restapinodejs

Creating basic RESTful CRUD API using Nodejs

## to run

`node server.js`

# Authenticated routes
## register new user
```
POST
127.0.0.1:7000/api/auth/register
{
	"name" : "admin",
	"email" : "admin@admin.com",
	"password" : "admin"
}
```

## login  user
```
POST
127.0.0.1:7000/api/auth/login
{
	"email" : "admin@admin.com",
	"password" : "admin"
}
```

## verify login  user
```
get
127.0.0.1:7000/api/auth/me
Headers
x-access-token : Tokenstring
or set bearer Token
```

# Un authenticated routes
/users