# Backend Application

For Darpan Stores

## Features:

- User Login/Signup (authentication)
- Add product to database (From owner)
- Get All products from DB (both owner and customer)

## HTTP Status

- 200: All successful responses are of  200
- 201: Successfule (new record added)
- 2XX: Successful responses

- 3XX: Request Redirection

- 400: BAD Request
- 401: un-authorised
- 402: Payment required*
- 403: Forbidden
- 404: Not Found
- 4XX: Server or Data relaled error status codes

- 500: Internal Server Error (Server or process crash)
- 5XX: Server error



## ToDOs

1. Schema for Product: title, description, brand, price, selling_price, quantity, category, created_at
2. Add API for product insertion - POST Method - /product/add
3. Add API for get All products - GET - /product/all
4. Get One Product by product's _id - GET /product/:id
5. Update Product's title, description, price, selling_price - PUT /product/:id 
6. Delete Product - DELETE - /product/:id
7. Revise MongoDB
8. Admin Login