# BE-tokopedia-play-clone
---

## Table of Contents

- [Database Structure](#database-structure)
- [API Structure](#api-structure)
- [API Request and Response](#api-request-and-response)
- [How to Run the API](#how-to-run-the-API)

## Database Structure
# Collections

## Collection 1: Videos
This collection is used to store information about Videos.
```
{
  "_id": "video_id"
  "image_url": "https://via.placeholder.com/300/09f/fff.png",
  "video_url": "https://video",
  "brand": "brand-name",
  "description": "brand-description",
  "products": [
    {
      "_id": "ref_product_id"
    },
  ],
  "__v": 0
}
```
## Collection 2: Products
```
{
  "_id": "product_id",
  "link": "https://tokopedia.link/L1BVMa7xLBb",
  "title": "product_name",
  "price": product_price,
  "__v": 0
}
```

## Collection 3: Users
```
{
  "_id": "user_id",
  "username": "user_username",
  "comment": "user_comment",
  "videoId": "ref_video_Id",
  "timestamp": "Date.now",
  "__v": 0
}
```
## API Structure
# Endpoints
| Method     | Endpoint                        | Description         |
|------------|---------------------------------|---------------------|
| GET        | /api/videos                     | Video list          |
| GET        | /api/video/product/:videoID     | Product list        |
| GET        | /api/comment/:videoID           | Comment list        |
| GET        | api/search?brand={value}        | Brand list          |
| POST       | /api/comment/:videoID           | Add comment         |
| POST       | /api/product                    | Add Product         |
| POST       | /api/video                      | Add video           |


## API request and response
#Video
  * Video object
```
{
  image_url: string
  video_url: string
  brand: string
  description: string
  products: [{product_objectId}, {product_objectId}, {product_objectId}]
}
```
#GET /api/videos
Returns all videos 
  * URL Params
    None
  * Data Params
    None
  * Headers
    Content-Type: application/json
  * Success Response
    Code: 200
```
{
  id: objectId
  image_url: string
  video_url: string
  brand: string
  description: string
  products: [{product_objectId}, {product_objectId}, {product_objectId}]
}
```
  * Failed Response
    Code: 500
    Content: `{message: error.message}`


#POST /api/video
Creates a new video and returns the new object 
  * URL Params
    None
  * Data Params
```
{
  image_url: string
  video_url: string
  brand: string
  description: string
  products: [{product_objectId}, {product_objectId}, {product_objectId}]
}
```
  * Headers
    Content-Type: application/json
  * Success Response
    Code: 201
    Content: `{<video_object>}`
  * Failed Response
    Code: 400
    Content: `{message: error.message}`

#GET /api/search?brand
Returns all videos that match the string value in query params
  * URL Params
    None
  * Data Params
    None
  * Query Params
    *Required:* `brand={string}`
  * Success Response
    Code: 200
    Content:
```
[
  {video_object},
  {video_object}
]
```
  * Failed Response
    Code: 500
    Content: `{message: error.message}`

#Product
  * Product object
```
{
  id: objectId
  link: string
  title: string
  price integer
}
```
#GET /api/video/product/:videoId
Returns all products based on videoId as parameter
  * URL Params
    *Required:* `videoId=[objectId]`
  * Data Params
    None
  * Query Params
    None
  * Success Response
    Code: 200
    Content:
```
[
  {<product_object>},
  {<product_object>},
  {<product_object>}
]
```
  * Failed Response
    Code: 500
    Content: `{message: error.message}`

#POST /api/product
create a new product and returns new object
  * URL Params
    None
  * Data Params
```
{
  link: string,
  title:  string,
  price:  integer
}
```
  * Query Params
    None
  * Success Response
    Code: 200
    Content: `{product_object}`
  * Failed Response
    Code: 400
    Content: `{message: error.message}`


#User
  * User object
```
{
  _id: objectId
  username: string
  comment: string
  videoId: ref_video_objectId
  timestamp: Date.now
}
```
#GET /api/comment/:videoId
Returns all comments based on videoId as parameter endpoint
  * URL Params
    *Required:* `videoId=[objectId]`
  * Data Params
    None
  * Query Params
    None
  * Success Response
    Code: 200
 ```
[
  {user_object},
  {user_object}
]
 ```
  * Failed Response
    Code: 404
    Content: `{message: 'Tidak ada comment'}`
    Code 500
    Content: `{error: 'Failed to retrieve user data'}`

#POST /comment/:videoId
create new comment based on videoId as parameter endpoint
  * URL Params
    *Required:* `videoId=[objectId]`
  * Data Params
```
{
  username: string,
  comment: string
}
```
  * Query Params
    None
  * Success Response
    Code: 201 `{success: true, message: 'Comment berhasil ditambahkan'}`
  * Failed Response
    Code: 400
    Content: `{success: false, message: error.message}`
    
    
## How to Run the API (https://be-tokopedia-play-clone-production.up.railway.app)
To run with the hosted API URL, Use Postman or cURL to interact with the API endpoints. Here is an example to run locally using Postman:
* GET video list: to get the list of video data
  [http://localhost:3000](https://be-tokopedia-play-clone-production.up.railway.app/api/videos)
* GET product list: to get the list of product data and use videoID as the request   parameter
  [http://localhost:3000](https://be-tokopedia-play-clone-production.up.railway.app/api/video/product/{videoID})
* GET comment list: to get the list of comments from the user and use videoID as     the request parameter
  [http://localhost:3000](https://be-tokopedia-play-clone-production.up.railway.app/api/comment/{videoID})
* GET brand list: to get the value of the brand and use the brand as   the request   query from the database collection
  [http://localhost:3000](https://be-tokopedia-play-clone-production.up.railway.app/api/search?brand={value})
* POST comment: to add a new comment and use videoID as the request parameter
  [http://localhost:3000](https://be-tokopedia-play-clone-production.up.railway.app/api/comment/{videoID})
* POST product: to add new product data to the database
  [http://localhost:3000](https://be-tokopedia-play-clone-production.up.railway.app/api/product)
* POST video: to add new video data to the database
  [http://localhost:3000](https://be-tokopedia-play-clone-production.up.railway.app/api/video)

