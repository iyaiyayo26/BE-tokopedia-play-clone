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
  "video_url": "https://youtu.be/DMRRcLfzikQ",
  "brand": "brand-name",
  "description": "brand-description",
  "products": [
    {
      "_id": "ref_product_id"
    },
    {
      "_id": "ref_product_id"
    },
    {
      "_id": "ref_product_id"
    }
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
| Method    | Endpoint       | Description      |
|------------|---------------|--------------|
| Sel 1,1    | Sel 1,2       | Sel 1,3      |
| Sel 2,1    | Sel 2,2       | Sel 2,3      |
| Sel 3,1    | Sel 3,2       | Sel 3,3      |

## API request and response
Isi bagian ketiga...

## How to Run in Local
isi bagian keempat
