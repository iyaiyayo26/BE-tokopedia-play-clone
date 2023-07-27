# BE-tokopedia-play-clone
---

## Table of Contents

- [Database Structure](#database-structure)
- [API Structure](#api-structure)
- [API Request and Response](#api-request-and-response)
- [How to Run in Local](#how-to-run-in-local)

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
| Method     | Endpoint                | Description         |
|------------|-------------------------|---------------------|
| GET        | /api/videos             | Video list          |
| GET        | /api/video/:videoID     | Product list        |
| GET        | /api/comment/:videoID   | Comment list        |
| GET        | api/search?brand={value}| Brand list          |
| POST       | /api/comment/:videoID   | Add comment         |
| POST       | /api/product            | Add Product         |
| POST       | /api/video              | Add video           |


## API request and response
Isi bagian ketiga...

## How to Run in Local
To run in Local, Use Postman or cURL to interact with the API endpoints. Here is an example to run locally using Postman:
* GET video list: to get the list of video data
  http://localhost:3000/api/videos
* GET product list: to get the list of product data and use videoID as the request   parameter
  http://localhost:3000/api/video/product/{videoID}
* GET comment list: to get the list of comments from the user and use videoID as     the request parameter
  http://localhost:3000/api/comment/{videoID}
* GET brand list: to get the value of the brand and use the brand as   the request   query from the database collection
  http://localhost:3000/api/search?brand={value}
* POST comment: to add a new comment and use videoID as the request parameter
  http://localhost:3000/api/comment/{videoID}
* POST product: to add new product data to the database
  http://localhost:3000/api/product
* POST video: to add new video data to the database
  http://localhost:3000/api/video
