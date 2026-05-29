![Wallpaper de patitos de goma](/docs/assets/Readme/rubber-duck-readme.jpg)
  
# DuckStore 🦆

## DuckStore is going to launch its products and has asked us to build their website. Our work will consist of creating the low-fidelity wireframes and the mockups using Figma and Stitch, and then developing the website with HTML5 and CSS3

## Functional Requirements ✅

* The catalog of all the ducks must be consumed and rendered from an array of objects.

* The website debe have filters by category (minimum 3).

* The website must allow the user to select the ducks they want to buy and add them to a shopping cart.

* The website must allow the user to specify the quantity of each duck.

* The website must allow the user to decrease the quantity of each duck.

* The website must remove items from the shopping cart when the selected quantity is 0.

* The website must display the subtotal for each duck in the shopping cart, based on the selected quantity.

* The website must display the total of all selected products in the shopping cart.

* The website must allow the user to remove products from the shopping cart.

* The website must allow the user to proceed to payment, which will display a receipt with the details of the products and prices. 

* The website must allow payment, which will return a successful purchase message (no payment gateway or credit card information should be entered; this will be fictitious).

* The website must allow users to leave a message via the contact form (the entered information will be collected in a console.log file).

* The website must not allow adding the same item to the shopping cart twice.
 
* The website must not allow users to decrease the quantity by negative values.


## Non Functional Requirements ☑️

* Mockups of new pages must be created to help visualize how the page should look with its user flow (prototype).

* The semantic HTML5 structure must be implemented according to the mockups.

* The CSS must be modularized and use variables.

* Accessibility principles must be applied.

* Styling with CSS3 must be applied to match the mockups exactly.

* CSS3 animations and transitions must be used.

* Try to use ECMAScript 6 functionalities (map, filter, sort, reduce, forEach). Use only template strings; avoid using the old variable and string concatenation.

* Use ESModules to import and export files while maintaining modularity.

* Git and GitHub must be used as version control systems under the Gitflow methodology.

* It must be responsive. At least one unit test for a feature is required (using Vitest as the test library).

* At least one end-to-end test with Playwright is required.

* Product deployed on GitHub Pages.

## Wireframe ✏️

- [Wireframe desktop and mobile version](https://www.figma.com/design/kbVcU0fq6IzW5I7otljLbQ/DuckStore?node-id=118-445&p=f&t=MosLVW0ySpPCvHi4-0)

## Mockups 🎨

- [Mockups desktop] (https://www.figma.com/design/kbVcU0fq6IzW5I7otljLbQ/DuckStore?node-id=0-1&p=f&t=aqCKdOI0Bf0WRxrl-0)

- [Mockups mobile] (https://www.figma.com/design/kbVcU0fq6IzW5I7otljLbQ/DuckStore?node-id=864-3441&t=HrE3ficuMPCNRZmK-1)


## Project Structure 📁

├── index.html
├── README.md
├── css/
│   ├── reset.css
    ├── cart.css
    ├── checkout.css
    ├── order-review.css
│   ├── style.css
│   ├── nav-header.css
│   ├── footer.css
│   ├── catalog.css
│   ├── product.css
│   └── contact.css
├── pages/
│   ├── catalog.html
    ├── cart.html
    ├── checkout.html
    ├── order-review.html
│   ├── product.html
│   └── contact.html
├── img/
│   ├── catalog patos/
│   ├── collect happiness/
├   ├── curates curiosities/
│   ├── contact/
│   ├── wky duckstore/
│   └── test/
├── js/
    ├── cart.js
    ├── catalog-data.js
    ├── catalog-filter.js
    ├── checkout.js
    ├── order-review.js
    ├── product.js
    ├── script.js
 
│── docs/
    └── icons/
    ├── logo/
    └── user flow/
│── test/
    ├── playwright/
    ├── vitest/

## Toosl and software 🔧

- **Figma**
- **Jira**
- **Visual Studio**
- **Vitest**

## Technologies 💻
- **HTML5**
- **CSS3**
- **JAVASCRIPT**


## Typography 🔠

* The project uses the following fonts:

- **Plus Jakarta Sans(regular, semibold)**   
- **Montserrat(semibold, bold)** 


## Test e2e con Playwright 🧪

* Test performed on the cart page:

![Test web](/docs/assets/Readme/test1.PNG)


* Basic test performed on the web site:

![Test web](/docs/assets/Readme/test2.PNG)


## Project Developers 

- 👩 [Ioana](https://github.com/Alexapop)

- 👱‍♀️ [Hanna](https://github.com/hannafr14)

- 🧑 [Jose Javier](https://github.com/JawiCoder)


