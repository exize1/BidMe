# BidMe 
Add about

## Table of contents 
- [BidMe](#bid-me)
  - [Why was BidMe made](#Why-was-BidMe-made)
  - [Running the project](#running-the-project)
  - [Screenshots](#screenshots)
    + [Create user / Login](#create-user-/-login)
    + [Home page](#home-page)
    + [Auction](#auction)
    + [Add Product](#add-product)
    + [User Page](#user-page)

  - [Technologies](#technologies)
    + [Client-Side](#client-side)
    + [Server-Side](#server-side)
  - [Whats Next](#whats-next)
  
## Why was BidMe made

1. This web application was made as part of an assignment we got for the holidays.  
2. Showing our fullstack abilities with MERN stuck.
3. Practice coding as individuals and independents.

## Running the project

1. Clone the repo.
2. Open two terminals.
3. Enter the server folder in one terminal and the client folder in the other.
4. Run `npm install` in both terminals.
4. Run 'npm start' in both terminals.
5. Navigate to `http://localhost:3000`.

## Screenshots

### Create user / Login
Sign up page with Yup validation in the front and Jui validation at the back

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188770/Screenshots/singup_jjwan6.jpg" /></p>

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188307/Screenshots/login_nylwtz.jpg" /></p>

### Home page
Welcome page with some usefull information about the auctions. In the picture - Three most profitable products on auction.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188307/Screenshots/home_page_ummq0z.jpg"/></p>


### Auction page
Showing a brief of the products in the site, ordered by categories.
1. Filters the products by categories
2. Showing the 4 last uploaded products, if they exist
3. For see more than the 4 last products

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666189539/Screenshots/Auction_ypjn7p.jpg"/></p>

### Add Product
On clicking the 'Demo Card' it will open illustration (on the right bottom), that illustrate how the product page will look like, likewise the Demo Card. 
Adding name, photo, price, description and amount of days, will apear in the illustration and the demo card.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188283/Screenshots/add_product_nkibas.jpg"/></p>

### User page
In the user page we can find 3 section:
1. 'My auctions' - Shows all the products that the user uploaded.
2. 'My Bids' - Shows all the products the user have bid on.
3. 'Settings' - Description in the next screenshot.

The next following subjects are numbered on the screenshot:
4. 'Delist' - Deletes the product from the database including the product's image and the bids related to this product.
5. 'End auction' - Like the name implies, this option ending the auction. meaning the highest bid will be accepted and no one will be able to give a new bid.
6. 'Copy Link' feature
7. 'Edit Avatar' - Change the user avatar.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188306/Screenshots/user_page_ppxpho.jpg"/></p>

1. "Change Credit Card" - For adding and update the credit card. The changes are saved in the database if they passed the validation and are displayed directly on the card on the right.
2. "Delete Account" - Deletes the account from the DB and everything related to this user, such as the products he uploaded and the bids he made.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666189383/Screenshots/user_settings_xdcyu8.jpg"/></p>

### Product page
In this page you can see every necessary detail on the product. Such as:
- Wider image
- Name of the product
- Intial price
- Lates priive 
- Initial date
- End auction date 
- All the product's bids:
  - Number of bids
  - Bid's date
  - Price
  - Bider name

In the images we can see the end of the auction from two prespective: 
End of auction from regular users eyes

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188289/Screenshots/End-auction_pept91.jpg"/></p>

End of auction from the product owner's eyes

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188288/Screenshots/End-auction-product-owner_rgmca7.jpg"/></p>

## Technologies:

### Client-side:
* React.JS
* Cloudinary

### Server-side:
* Node.JS
* Cloudinary
* MongoDB

## Tools and libraries:

### Client-side:
  * react-redux
  * react-router
  * bootstrap
  * axios
  * formik and yup

### Server-side:
  * Express
  * bcrypt
  * JWS
  * mongoose
  * Joi

## What's next:
1. improve swiper page by sending new clothes every 30 swipes.
2. Improve algorithm for recommendations
3. add more parameters for recommendation. 
3. Adding affiliation to the app (because why not :))
4. Buy clothes the way its meant to be. 
