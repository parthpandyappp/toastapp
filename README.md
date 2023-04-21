# Toast App

### What's this all about?
The project is a result of the frontend task assigned by the Toast app. It's a React app, designed pixel perfect in accordance with the given figma design viewable with ease in any mobile device.

### How it still stands out?
1. Highly scalable folder structure.
2. Modular code, more components.
3. Implementation of ***Barrels*** in ReactJs.
4. Up to date ***version control*** with `git`
5. Proper ***segregation*** of `components` and `pages` in the application.

### Early preview
![sc-home](https://user-images.githubusercontent.com/34797335/233628586-35d112d8-92cd-4b8e-b156-6b7b38d8f584.png)
![sc-home-2](https://user-images.githubusercontent.com/34797335/233628641-4d564cd1-7420-45e7-9b73-1bc57e7b25ed.png)
![sc-main](https://user-images.githubusercontent.com/34797335/233628571-59b9648b-b863-4954-9c78-77b5bd1bae10.png)
![sc-placeorder](https://user-images.githubusercontent.com/34797335/233628681-f512c689-b8d6-48be-ba35-1c7269fd1ba5.png)
![sc-placeorder-2](https://user-images.githubusercontent.com/34797335/233628695-a21865bf-ed2c-44fc-ad3e-00cab04459ba.png)


### Directory Structure
<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <meta name="Author" content="Made by 'tree'">
 <meta name="GENERATOR" content="$Version: $ tree v1.8.0 (c) 1996 - 2018 by Steve Baker, Thomas Moore, Francesc Rocher, Florian Sesser, Kyosuke Tokoro $">
</head>
<body>
	├── <a href="baseHREF/netlify.toml">netlify.toml</a><br>
	├── <a href="baseHREF/package.json">package.json</a><br>
	├── <a href="baseHREF/package-lock.json">package-lock.json</a><br>
	├── <a href="baseHREF/postcss.config.js">postcss.config.js</a><br>
	├── <a href="baseHREF/public/">public</a><br>
	│   ├── <a href="baseHREF/public/favicon.ico">favicon.ico</a><br>
	│   ├── <a href="baseHREF/public/index.html">index.html</a><br>
	│   ├── <a href="baseHREF/public/logo192.png">logo192.png</a><br>
	│   ├── <a href="baseHREF/public/logo512.png">logo512.png</a><br>
	│   ├── <a href="baseHREF/public/manifest.json">manifest.json</a><br>
	│   └── <a href="baseHREF/public/robots.txt">robots.txt</a><br>
	├── <a href="baseHREF/src/">src</a><br>
	│   ├── <a href="baseHREF/src/App.css">App.css</a><br>
	│   ├── <a href="baseHREF/src/App.js">App.js</a><br>
	│   ├── <a href="baseHREF/src/assets/">assets</a><br>
	│   │   ├── <a href="baseHREF/src/assets/banner.png">banner.png</a><br>
	│   │   └── <a href="baseHREF/src/assets/cafe.png">cafe.png</a><br>
	│   ├── <a href="baseHREF/src/components/">components</a><br>
	│   │   ├── <a href="baseHREF/src/components/CurrentOrder.jsx">CurrentOrder.jsx</a><br>
	│   │   ├── <a href="baseHREF/src/components/DishCard.jsx">DishCard.jsx</a><br>
	│   │   ├── <a href="baseHREF/src/components/Footer.jsx">Footer.jsx</a><br>
	│   │   ├── <a href="baseHREF/src/components/index.js">index.js</a><br>
	│   │   ├── <a href="baseHREF/src/components/MainDishCard.jsx">MainDishCard.jsx</a><br>
	│   │   ├── <a href="baseHREF/src/components/Nav.jsx">Nav.jsx</a><br>
	│   │   └── <a href="baseHREF/src/components/PreviousOrder.jsx">PreviousOrder.jsx</a><br>
	│   ├── <a href="baseHREF/src/data/">data</a><br>
	│   │   ├── <a href="baseHREF/src/data/dishes.js">dishes.js</a><br>
	│   │   └── <a href="baseHREF/src/data/index.js">index.js</a><br>
	│   ├── <a href="baseHREF/src/features/">features</a><br>
	│   │   ├── <a href="baseHREF/src/features/dishSlice.js">dishSlice.js</a><br>
	│   │   ├── <a href="baseHREF/src/features/index.js">index.js</a><br>
	│   │   └── <a href="baseHREF/src/features/ordersSlice.js">ordersSlice.js</a><br>
	│   ├── <a href="baseHREF/src/helpers/">helpers</a><br>
	│   │   ├── <a href="baseHREF/src/helpers/index.js">index.js</a><br>
	│   │   └── <a href="baseHREF/src/helpers/orderhelpers.js">orderhelpers.js</a><br>
	│   ├── <a href="baseHREF/src/index.css">index.css</a><br>
	│   ├── <a href="baseHREF/src/index.js">index.js</a><br>
	│   ├── <a href="baseHREF/src/pages/">pages</a><br>
	│   │   ├── <a href="baseHREF/src/pages/Beverages.jsx">Beverages.jsx</a><br>
	│   │   ├── <a href="baseHREF/src/pages/Desserts.jsx">Desserts.jsx</a><br>
	│   │   ├── <a href="baseHREF/src/pages/index.js">index.js</a><br>
	│   │   ├── <a href="baseHREF/src/pages/Main.jsx">Main.jsx</a><br>
	│   │   ├── <a href="baseHREF/src/pages/PlaceOrder.jsx">PlaceOrder.jsx</a><br>
	│   │   └── <a href="baseHREF/src/pages/Special.jsx">Special.jsx</a><br>
	│   ├── <a href="baseHREF/src/routes/">routes</a><br>
	│   │   ├── <a href="baseHREF/src/routes/Endpoints.jsx">Endpoints.jsx</a><br>
	│   │   └── <a href="baseHREF/src/routes/index.js">index.js</a><br>
	│   └── <a href="baseHREF/src/store/">store</a><br>
	│   &nbsp;&nbsp;&nbsp; └── <a href="baseHREF/src/store/index.js">index.js</a><br>
	├── <a href="baseHREF/tailwind.config.js">tailwind.config.js</a><br>
	<br><br>
	</p>
	<p>

10 directories, 41 files
	<br><br>
	</p>
	<hr>
	
</body>
</html>
