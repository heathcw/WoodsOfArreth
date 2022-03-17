<template>
  <div class="book">
    <div v-show="main">
      <div class="header">
        <h1>Discover the story of the Woods Family</h1>
      </div>

      <div class="break">
        <br />
      </div>

      <div class="books-grid">
        <div class="book-container">
          <button class="book-one" v-on:click="bookOne">
            <img
              src="https://m.media-amazon.com/images/I/51T760IabVL.jpg"
              height="500px"
              width="333px"
            />
          </button>
          <div class="book-caption">
            <p>Book One: The Woods of Arreth</p>
          </div>
        </div>
        <div class="book-container">
          <button class="book-two" v-on:click="bookTwo">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51KYeEnAODL.jpg"
              height="500px"
              width="333px"
            />
          </button>
          <div class="book-caption">
            <p>Book Two: The Dwarves of Ancor</p>
          </div>
        </div>
        <div class="book-container">
          <button class="book-three" v-on:click="bookThree">
            <img
              src="https://m.media-amazon.com/images/I/517hZ41HVTL._SY300_.jpg"
              height="500px"
              width="333px"
            />
          </button>
          <div class="book-caption">
            <p>Book Three: The Guardians of Griffinholme</p>
          </div>
        </div>
        <div class="book-container">
          <button class="book-four" v-on:click="bookFour">
            <img
              src="https://m.media-amazon.com/images/I/41Dt7E2qrnL._SY300_.jpg"
              height="500px"
              width="333px"
            />
          </button>
          <div class="book-caption">
            <p>Book Four: The Children of Calsinor</p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="one">
      <div class="header">
        <h1>The story that started it all...</h1>
      </div>
      <div class="content">
        <div class="content-image">
          <img src="https://m.media-amazon.com/images/I/51T760IabVL.jpg" />
        </div>
        <div class="content-p">
          <p>The first book in an exciting epic family adventure series!</p>
          <hr />
          There is one cardinal rule in the Woods Family: stay out of the woods
          surrounding the house. Heath, the third of the four children, has
          always had the most difficulty following rules. <br /><br />
          Today, he will break the One Rule and accidentally lead two of his
          siblings between two odd trees and into the fantastical world of
          Arreth. There they will be chased by trolls, ride on the backs of
          enormous griffins, meet an eccentric old wizard, a fairy, and a
          cat-sized dragon, all while struggling to reunite their family and
          learning about a Prophecy that says one of them may or may not be the
          one to end the Ultimate Evil plaguing this world that is so much like
          our own and yet so completely different.<br /><br />
          The Woods of Arreth is an epic Fantasy adventure that at its heart is
          a story about the importance of Family.<br />
          <button v-on:click="back">Back</button>
        </div>
      </div>
    </div>
    <div v-show="two">
      <div class="header">
        <h1>Book Two: The Dwarves of Ancor</h1>
      </div>
      <div class="content">
        <div class="content-image">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51KYeEnAODL.jpg"
          />
        </div>
        <div class="content-p">
          <p>
            The epic family adventure that began with The Woods of Arreth
            continues!
          </p>
          <hr />
          Three months have passed since the Woods children discovered the world
          of Arreth and learned that one of them may be the prophesied child who
          can bring about the downfall of King Malved Winham and free the
          kingdom of Calsinor from his evil rule.But before they can go to war
          against Winham, they need an army. While Caleb Woods travels with
          their father to enlist the aid of the Dwarves of Ancor, his sister and
          brothers travel with their mother deep under the surface on an
          important mission of their own. Unknown to the Woods family, however,
          someone close to them is not what they seem to be. <br /><br />
          Journey with the Woods family as they continue their adventures, full
          of mythical creatures, adventure, and betrayal.<br />
          <button v-on:click="back">Back</button>
        </div>
      </div>
    </div>
    <div v-show="three">
      <div class="header">
        <h1>Secrets begin to unfold...</h1>
      </div>
      <div class="content">
        <div class="content-image">
          <img
            src="https://m.media-amazon.com/images/I/517hZ41HVTL._SY300_.jpg"
          />
        </div>
        <div class="content-p">
          <p>
            The War to free the kingdom of Calsinor and bring Light back to the
            Western Kingdoms draws nearer!
          </p>
          <hr />
          House Wudsaress has its army, a combination of the Griffin Riders, the
          Haven Guard, and the armies of Middonai and Ancor. But before the War
          for Calsinors freedom can begin, tragedy strikes! The Woods Family
          finds itself divided once again, falling prey to Malved Winhams evil
          schemes. While Matthew and Rebecca race to rescue two of their
          children, the other two undertake a secret quest to find the one part
          of their army still missing, joined by some old friends and a few new
          ones.<br /><br />
          The Final Battle for Calsinor draws closer, but to win, the Woods
          children will need to find courage in themselves, trust in family, and
          the aid of The Guardians of Griffinholme!<br />
          <button v-on:click="back">Back</button>
        </div>
      </div>
    </div>
    <div v-show="four">
      <div class="header">
        <h1>The Epic Battle comes to an end!</h1>
      </div>
      <div class="content">
        <div class="content-image">
          <img
            src="https://m.media-amazon.com/images/I/41Dt7E2qrnL._SY300_.jpg"
          />
        </div>
        <div class="content-p">
          <p>The War for Calsinor nears its end!</p>
          <hr />
          But, it is evil King Malved Winham who stands on the edge of triumph,
          not the Griffin Riders and the Forces of Arreth Haven! The magical
          barrier protecting Arreth Vale has fallen and evil King Malved Winham
          sits in control of Griffin Keep. His victory seems all but sure. Even
          the once powerful sorcerer Pyrofius, now revealed to be the dragon
          PyroFugarBranndantesInferius, has been forced to bow to Winhams will,
          and the armies of Griffin General John Wudsaress stand on the edge of
          defeat. <br />
          The only hope lies in the courage of the defenders of Calsinor and the
          Wudsaress children, Kyra, Caleb, Heath, and Wil. But they are
          separated from Calsinor and Arreth Vale, their father has fallen, and
          the children still do not know which of them is the prophesied One
          Child destined to defeat Winham and restore freedom to Calsinor.<br /><br />
          All hope lies with the children. For the prophesy to be fulfilled, the
          Children of Calsinor must rise.<br />
          <button v-on:click="back">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BooksView",

  data() {
    return {
      main: true,
      one: false,
      two: false,
      three: false,
      four: false,
    };
  },

  methods: {
    back() {
      this.main = true;
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = false;
    },

    bookOne() {
      this.main = false;
      this.one = true;
    },
    bookTwo() {
      this.main = false;
      this.two = true;
    },
    bookThree() {
      this.main = false;
      this.three = true;
    },
    bookFour() {
      this.main = false;
      this.four = true;
    },
  },
};
</script>

<style scoped>
.books-grid {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr;
  grid-column-gap: 200px;
  grid-row-gap: 50px;
  background-color: #e0c4ba;
  justify-items: center;
}

.books-grid .book-conatiner {
  font-family: "Sedgwick Ave", cursive;
  text-align: center;
}

.books-grid .book-container img {
  border: 2px solid black;
}

.books-grid .book-container .book-caption p {
  padding: 15px;
  font-size: 20px;
  font-family: "Sedgwick Ave", cursive;
  text-align: center;
}

.break {
  background-color: #e0c4ba;
}

@media only screen and (max-width: 400px) {
  .books-grid {
    grid-template: auto auto auto auto auto / 1fr;
    grid-column-gap: 72px;
    grid-row-gap: 18px;
  }
}
</style>
