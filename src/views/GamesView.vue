<template>
  <div class="games">
    <div class="header">
      <h1>Experience the Magic of the Woods!</h1>
    </div>
    <div class="break">
      <br />
      <br />
    </div>
    <div class="books-grid" v-show="griffinScreen">
      <div class="buttons">
        <button id="joke" v-on:click="fetchJoke">Tell me a joke!</button
        ><br /><button id="fact" v-on:click="fetchFact">How are you?</button
        ><br />
        <div>
          <input
            id="question"
            type="text"
            placeholder="Ask a yes or no question!"
          /><button id="submit" v-on:click="fetchQuote">Ask</button>
        </div>
        <br />
        <br />
        <button v-on:click="back">Back</button>
      </div>
      <div class="griffin">
        <p></p>
        <img
          src="https://easydrawingguides.com/wp-content/uploads/2020/06/Griffin-Step-10.png"
        />
      </div>
    </div>
    <div class="books-grid" v-show="trollScreen">
      <div class="gameEvents">
        <p>It's dark.<br />It's cold.<br />Do you...</p>
      </div>
      <div class="gameButtons">
        <div id="a">
          <button v-on:click="decisionA">
            {{ choiceA }}
          </button>
        </div>
        <div id="b">
          <button v-on:click="decisionB">{{ choiceB }}</button>
        </div>
        <input id="s" type="text" v-show="secret" v-on:keyup.enter="submit" />
      </div>
    </div>
    <div class="books-grid" v-show="homeScreen">
      <figure>
        <button id="gameGriffin" v-on:click="gameGriffin">
          <img
            src="https://easydrawingguides.com/wp-content/uploads/2020/06/Griffin-Step-10.png"
          />
        </button>
        <figcaption>Talk to a Griffin</figcaption>
      </figure>
      <figure>
        <button id="gameTroll" v-on:click="gameTroll">
          <img src="../../public/troll-removebg-preview.png" alt="It" />
        </button>
        <figcaption>Cave Troll</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesView",

  data() {
    return {
      homeScreen: true,
      griffinScreen: false,
      trollScreen: false,
      choiceA: "A. Look for your flashlight?",
      choiceB: "B. Walk forward?",
      secret: false,
    };
  },

  methods: {
    back() {
      this.homeScreen = true;
      this.griffinScreen = false;
    },

    gameGriffin() {
      this.homeScreen = false;
      this.griffinScreen = true;
    },

    fetchJoke() {
      let childNode = document.querySelector(".books-grid .griffin p");
      let urlJoke = "https://geek-jokes.sameerkumar.website/api?format=json";
      fetch(urlJoke)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          childNode.innerHTML = json.joke + " hahahahaha";
        });
    },

    fetchFact() {
      let childNode = document.querySelector(".books-grid .griffin p");
      let urlFact = "https://asli-fun-fact-api.herokuapp.com/";
      fetch(urlFact)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          childNode.innerHTML =
            "I'm doing great! Did you know that " + json.data.fact + "?";
        });
    },

    fetchQuote() {
      let childNode = document.querySelector(".books-grid .griffin p");
      let urlSubmit = "https://quoteclear.web.app/api/random";
      fetch(urlSubmit)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          let random = Math.floor(Math.random() * 4);
          if (random == 0) {
            childNode.innerHTML = "No, " + json.text;
          } else if (random == 1) {
            childNode.innerHTML = "Yes! " + json.text;
          } else if (random == 2) {
            childNode.innerHTML = "Maybe... " + json.text;
          } else {
            childNode.innerHTML = "Ask again later.";
          }
        });
    },

    gameTroll() {
      this.homeScreen = false;
      this.trollScreen = true;
    },

    decisionA() {
      if (this.choiceA == "A. Look for your flashlight?") {
        this.choiceA = "A. Follow the noise?";
        this.choiceB = "B. Walk forward?";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>No Flashlight.<br>It's getting warmer.<br>It's getting louder.<br>Do you...</p>";
      } else if (this.choiceA == "A. Follow the noise?") {
        this.choiceA = "";
        this.choiceB = "";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>It's hot.<br>It's breathing down your neck.<br>It got you.</p>";
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      } else if (this.choiceA == "A. Check to the left for a key?") {
        this.choiceA = "A. Unlock the door?";
        this.choiceB = "B. Turn around?";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>It's hot.<br>It's breathing down your neck.<br>There's a key on the floor.<br>Do you...</p>";
      } else if (this.choiceA == "A. Unlock the door?") {
        this.choiceA = "";
        this.choiceB = "";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>You run out into a bright open field.<br>You let out a sigh of relief.<br>You are free.<br>But so is It.</p>";
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      } else if (this.choiceA == "A. Call for help?") {
        this.choiceA = "";
        this.choiceB = "";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>Nobody heard.<br>It covers your mouth.<br>It got you.</p>";
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      }
    },

    decisionB() {
      if (this.choiceA == "A. Look for your flashlight?") {
        this.choiceA = "A. Check to the left for a key?";
        this.choiceB = "B. Bang on the door?";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>There's a door.<br>The door is locked.<br>It's Hot.<br>Do you...</p>";
      } else if (this.choiceA == "A. Check to the left for a key?") {
        this.choiceA = "";
        this.choiceB = "";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>It's loud.<br>It's breathing down your neck.<br>It got you.</p>";
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      } else if (this.choiceA == "A. Follow the noise?") {
        this.choiceA = "A. Call for help?";
        this.choiceB = "B. Bang on the door?";
        this.secret = true;
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>There's a door.<br>The door is locked.<br>It's Hot.<br>Do you...</p>";
      } else if (this.choiceA == "A. Call for help?") {
        this.choiceA = "";
        this.choiceB = "";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>It's loud.<br>It's breathing down your neck.<br>It got you.</p>";
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      } else if (this.choiceA == "A. Unlock the door?") {
        this.choiceA = "";
        this.choiceB = "";
        document.querySelector(".books-grid .gameEvents").innerHTML =
          "<p>It's horrifying.<br>You stab it with the key.<br>It screeches.<br>Your ears bleed.<br>It got you.</p>";
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      }
    },

    submit() {
      if (document.getElementById("s").value == "wwssadadba") {
        this.choiceA = "";
        this.choiceB = "";
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
          document.querySelector(".books-grid .gameEvents").innerHTML =
            "<p>There's a key on the floor.<br>You unlock the door.<br>You wake up! Your fit of sleep paralysis is over!<br>It's a great day to cool down and go to a BYU football game.</p>";
        } else if (random == 1) {
          document.querySelector(".books-grid .gameEvents").innerHTML =
            "<p>It climbs on top of you.<br>You can't move as the shadow holds you to the ground, removing all eyesight.<br>The pain is excruciating. Or is It?<br>Will this never end?</p>";
          setTimeout(function () {
            window.location.reload();
          }, 2500);
        } else if (random == 2) {
          document.querySelector(".books-grid .gameEvents").innerHTML =
            "<p>This dream keeps on looping.<br>You realize there must be a way out.<br>I know you are scared, but It can't last forever.<br>You're so close, stay determined!</p>";
          setTimeout(function () {
            window.location.reload();
          }, 2500);
        }
      } else {
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      }
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

.break {
  background-color: #e0c4ba;
}

#gameGriffin img {
  width: 340px;
  height: 340px;
  border: solid 2px black;
}

#gameTroll img {
  width: 340px;
  height: 340px;
  border: solid 2px black;
}

figcaption {
  font-size: 20px;
}

.books-grid .griffin img {
  width: 340px;
  height: 340px;
}
.books-grid .griffin p {
  border: solid 2px black;
  width: 340px;
  height: 100px;
  background-color: #d4d4d4;
}
.books-grid .griffin {
  float: right;
  padding-right: 20px;
}

.books-grid .buttons #joke {
  margin: 10px;
}
.books-grid .buttons #fact {
  margin: 10px;
}
.books-grid .spacer {
  width: 100px;
}
.books-grid .gameEvents {
  font-size: 26px;
  border: 2px dashed black;
  height: 340px;
  width: 340px;
  padding: 10px;
}
</style>
