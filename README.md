# BidMe 
BidMe is all about bids. It's a site where you can upload your staff for a real-time auction. Other users can bid a higher price anytime they want (according to a table of different minimum prices depending  on the latest price), to win the auction and get their desired product. 
As a user, you can be a Seller and Bidder, depending  on the actions you prefer to make. BUT you should be careful not to fall into greediness because we have a few rules to prevent exploitation:

1. The user can end the auction anytime he wants, so bidders will not bid for fun. 
2. You must have Credit card linked to your account in order to bid. 
3. Sellers can't bid to their own product.
4. The higher the price the higher the minimum bid price :

| Price | The minimum difference between bids |
| :----- | :---------: |
| 1-10$ |  1$  |
| 10-100$ | 10$ |
| 100-5000$ | 100$ |
| 5000-10000$ | 500$ |
| 10000-50000$ | 1000$ |
| 50000$ + | 5000$ |


## Table of contents 
- [BidMe](#bidme)
  - [Why was BidMe made](#why-was-bidme-made)
  - [Running the project](#running-the-project)
  - [Screenshots](#screenshots)
    + [Create user / Login](#create-user-and-login)
    + [Home page](#home-page)
    + [Auction](#auction-page)
    + [Add Product](#add-product)
    + [User Page](#user-page)

  - [Technologies](#technologies)
    + [Client-Side](#client-side)
    + [Server-Side](#server-side)
  - [Tools and libraries:](#tools-and-libraries)
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

### Create user and Login
Sign-up page with Yup validation in the front and Jui validation at the back

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188770/Screenshots/singup_jjwan6.jpg" /></p>

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188307/Screenshots/login_nylwtz.jpg" /></p>

### Home page
Welcome page with some useful information about the auctions. In the picture - The three most profitable products on auction.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188307/Screenshots/home_page_ummq0z.jpg"/></p>


### Auction page
Showing a brief of the products on the website, ordered by categories.
1. Filters the products by categories
2. Showing the 4 last uploaded products, if they exist
3. To see more than the 4 last products

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666392365/Screenshots/auction_lbnkxd.jpg"/></p>

### Add Product
On clicking the 'Demo Card' it will open an illustration (on the right bottom), that illustrates how the product page will look like, likewise the Demo Card. 
Adding a name, photo, price, description and amount of days, will appear in the illustration and the demo card.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188283/Screenshots/add_product_nkibas.jpg"/></p>

### User page
On the user page we can find 3 sections:
1. 'My auctions' - Shows all the products that the user uploaded.
2. 'My Bids' - Shows all the products the user has bid on.
3. 'Settings' - Description in the next screenshot.

The next following subjects are numbered on the screenshot:

4. 'Delist' - Deletes the product from the database including the product's image and the bids related to this product.
5. 'End auction' - Like the name implies, this option ends the auction. meaning the highest bid will be accepted and no one will be able to give a new bid.
6. 'Copy Link' feature
7. 'Edit Avatar' - Change the user avatar.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666188306/Screenshots/user_page_ppxpho.jpg"/></p>

1. "Change Credit Card" - For adding and updating the credit card. The changes are saved in the database if they passed the validation and are displayed directly on the card on the right.
2. "Delete Account" - Deletes the account from the DB and everything related to this user, such as the products he uploaded and the bids he made.

<p align="center"><img src="https://res.cloudinary.com/diggwedxe/image/upload/v1666189383/Screenshots/user_settings_xdcyu8.jpg"/></p>

### Product page
On this page, you can see every necessary detail on the product. 
| Product | Bids |
| ------- | ---- |
| Wider image| Number of bids
| Name of the product| Bid's date
| Initial price | Price
| Latest price | Bidder name
| Initial date|
| End auction date |

In the images we can see the end of the auction from two perspectives: 

End of auction from regular users' eyes

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
- [ ] Add Phone number as an alternative option to login.
- [ ] Add 'change password' and 'Delist all my auctions' options in the setting section. 
- [ ] Replace the Credit Card option with Paypal or/and Tranzila instead of saving the user's card details in the DB. 
- [ ] Improve the list of 'Most popular' (on the home page) so it will show the most popular at different times (24 hours, 7 days, 30 days).
- [ ] Link the search output to the product page.
- [ ] Show in the auction page, only the Active products
- [ ] Add skeleton