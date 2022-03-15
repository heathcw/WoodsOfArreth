<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&family=UnifrakturCook:wght@700&display=swap"
      rel="stylesheet"
    />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/author">Author</router-link> |
      <img src="https://m.media-amazon.com/images/I/51T760IabVL.jpg" />
      | <router-link to="/books">Books</router-link> |
      <router-link to="/games">Games</router-link>
    </nav>
    <div
      class="background-image"
      style="
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/b/b2/Dark_Hedges_near_Armoy%2C_Co_Antrim_%28cropped%29.jpg');
      "
    >
      <h1>The Woods of Arreth</h1>
    </div>
    <router-view />
    <div class="footer">
      <a class="git-link" href="https://github.com/heathcw/WoodsOfArreth"
        ><strong>GitHub</strong></a
      >
      <a
        class="buy-link"
        href="https://www.amazon.com/Woods-Arreth-Matt-Woodruff/dp/1521886806"
        ><strong>Buy</strong></a
      >
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: fixed;
  width: 100%;
  background-color: #669147;
  border: 2px solid black;
  padding: 15px;
  z-index: 950;
}

nav a {
  font-weight: bold;
  font-family: "Sedgwick Ave", cursive;
  color: #2d33b3;
  padding: 30px;
}

nav img {
  height: 50px;
  width: 33px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.background-image {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/b/b2/Dark_Hedges_near_Armoy%2C_Co_Antrim_%28cropped%29.jpg");
  color: #2d33b3;
  background-size: cover;
  height: 600px;
}

.background-image h1 {
  position: relative;
  z-index: 900;
  color: #2d33b3;
  text-align: center;
  vertical-align: center;
  font-family: "UnifrakturCook", cursive;
  background-color: #94de62;
  border: 5px solid #669147;
  font-size: 40px;
  width: 400px;
  top: 50%;
  left: 450px;
}
.footer {
  display: flex;
  background-color: #669147;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  width: 100%;
  color: black;
  text-decoration: none;
  border: 2px solid black;
}

.footer .git-link {
  padding-left: 10px;
  color: #2d33b3;
}

.footer .buy-link {
  padding-right: 10px;
  color: #2d33b3;
}
.header {
  font-family: "Sedgwick Ave", cursive;
  font-size: 30px;
  width: 99%;
  text-align: center;
  padding: 5px;
  background-color: #94de62;
  color: #2d33b3;
}
.content {
  display: flex;
  padding: 100px;
  font-family: "Sedgwick Ave", cursive;
  background-color: #e0c4ba;
}

.content .content-p {
  padding: 100px;
  font-size: 20px;
}

.content-image img {
  height: 500px;
  width: 333px;
  border: 2px solid black;
}

@media only screen and (max-width: 400px) {
  .background-image {
    width: 100%;
    height: 216px;
  }

  .background-image h1 {
    width: 144px;
    font-size: 20px;
    left: 118px;
  }

  .content {
    padding: 36px;
    display: block;
  }

  .content-image img {
    height: 180px;
    width: 120px;
  }
  .content .content-p {
    padding: 36px;
  }

  .books-grid {
    grid-template: auto auto auto auto auto / 1fr;
    grid-column-gap: 72px;
    grid-row-gap: 18px;
  }
}
</style>
