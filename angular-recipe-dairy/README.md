# AngularRecipeDairy app for Angular course in SoftUni

This project was generated with

## Base URL
The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

```https://localhost:3030/api```

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Authentication

# Endpoints: Users

* ```/register``` -- signing up;
* ```login``` -- signing in;
* ```logout``` -- logging out;

## Register User

## Register User
Signs up user and returns the registered data as json.

### URL --> ```/users/register```

### Method --> ```POST```

### Body -->

```
{
    "name":"John Doe",
    "email":"john@email.com",
    "username":"Johny",
    "password":"12345",
    "rePassword":"12345"
}
```

Required:

```email``` : [string] -- The email of the person is required and must be unique;

```username``` : [string] -- The username of the person is required and must be unique, also there is a minimum length of 3 chars, allowed are latin letters and numbers;

```password``` : [string] -- The password of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

### Success Response:

Code: 200

Content: 
``` 
    {
  _id: new ObjectId("6391128ce6d4b94ed3d53e71"),
  username: 'mlove',
  email: 'm.georgieva17@icloud.com',
  hashedPassword: '$2b$10$5eNWp9.dNsF2hzeYZjc/cuno.Db.w.kc5XF/J.hRkKzIdySLZaPTG',
  roles: 'admin',
  ownRecipes: [
    new ObjectId("6391128ce6d4b94ed3d53e71"),
    new ObjectId("639e680f2ce373e422ec889b")
  ],
  likedRecipes: [],
  savedRecipes: [],
  __v: 1
}
```

## Login User
Signs in user and returns the registered data as json.

### URL --> ```/users/login```

### Method --> ```POST```

### Body -->

```
{
    "email":"m.georgieva17@icloud.com",
    "password":"12345"
}
```

Required:

```email``` : [string] -- The email of the person 

```password``` : [string] -- The password of the person 

### Success Response:

Code: 200

Content: 
``` 
{
    _id: new ObjectId("6391128ce6d4b94ed3d53e71"),
  username: 'mlove',
  email: 'm.georgieva17@icloud.com',
  hashedPassword: '$2b$10$5eNWp9.dNsF2hzeYZjc/cuno.Db.w.kc5XF/J.hRkKzIdySLZaPTG',
  roles: 'admin',
  ownRecipes: [
    new ObjectId("6391128ce6d4b94ed3d53e71"),
    new ObjectId("639e680f2ce373e422ec889b")
  ],
  likedRecipes: [],
  savedRecipes: [],
  __v: 1
}

### Error Response:

Code: 401 Unauthorized

Content: 
```
{ 
    "message": "Wrong username or password"
}
```

## Logout User
Logout user.

### URL --> ```/logout```

### Method --> ```POST```

### Success Response:

Code: 401 Unauthorized

Content: 
``` 
{ 
    "message": "Logged out!"
}
```

## Endpoints: Recipes

* ```/recipe```
* ```/recipe/:recipeId```
* ```/recipe/:create```
* ```/recipe/:delete```
* ```/recipe/:recipeId```

## Endpoints: categories

* ```/category```
* ```/category/:categoryId```
* ```/category/create``` 
* ```/category/create``` 
* ```/category/all-category-recipes/:id``` 


## Endpoints: ingredients

* ```/ingredient```
* ```/ingredient/create```
* ```/ingredient/delete```



## User Part

User functionality:

**create recipe
**edit own recipe
**delete own recipe


## Admin Part

Admin functionality + User functionality:

**create category
**edit category
**delete category

**create main ingredient
**edit main ingredient
**delete main ingredient





