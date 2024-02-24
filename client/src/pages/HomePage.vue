<template>
  <div class="flex-grow-1 container-fluid bg-white">
    <div class="row">
      <div class="col-12"></div>
      <div class="col-12 p-0">
        <img alt="logo" width="100%" src="src\assets\img\StolenHeartfinalimageeditCropped.jpg" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row" id="love-story-text">
          <div class="col-5"></div>
          <div class="col-3 mt-5" id="love-story-font">
            <p class="text-white text-center">LIVE IN</p>
            <p class="text-white text-center">LOVE</p>
          </div>
        </div>
      </div>

      <div class="col-12">
      </div>


    </div>
    <div class="row">
      <div class="col-12 text-center bg-offWhite py-5">
        <span id="FeelTheSighText">Stories that will steal your heart </span>
      </div>
    </div>
    <div class="row">
      <div class="col-4 text-center my-5">
        <div class="row mt-5">
          <div class="col-12 mt-5">
            <span class="cardo large-font">Hi! I'm &nbsp;&nbsp;</span><span class="dancing-script larger-font">Kaleena</span>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-12">
            <span class="cardo large-font">Author</span>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-12">
            <span class="cardo large-font">Lover of Romance</span>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-12">
            <span class="cardo large-font">Seeker of Happines</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="cardo small-font"><a href="http://www.kaleenashreeve.com"><u class="pink-text">GET TO KNOW ME</u></a></span>
          </div>
        </div>
      </div>
      <div class="col-4 mt-5">
        <img src="src\assets\img\KaleenaPortrait.jpg" alt="" width="500">
      </div>
      <div class="col-4 mt-5 text-center">
        <div class="row mt-5">
          <div class="col-12 mt-5">
            <span class="cardo-font large-font">If you like</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-3">
            <span class="cardo-font large-font">enchanting stories,</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="cardo-font large-font">you are in the right</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="cardo-font large-font">place.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-6">
        <div class="row">
          <div class="col-3 text-center">
            <img src="src\assets\img\CowboyBlack.png" width="150">
          </div>
          <div class="col-9 text-center ifStatements px-4">
            <button class="btn text-black rounded-pill pink-button p-1.5 py-2 px-3 rochester" data-toggle="modal"
                            data-target="">c l i c k &nbsp&nbsp h e r e</button>
            <p class="mt-3">if a <b>hot cowboy</b></p>
            <p>staring at you would make you blush</p>
          </div>

        </div>
        
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-9 text-center ifStatements px-4">
            <button class="btn text-black rounded-pill pink-button p-1.5 py-2 px-3 rochester" data-toggle="modal"
            data-target="">c l i c k &nbsp&nbsp h e r e</button>
            <p class="mt-3">if you believe</p>
            <p><b>love and romance</b> is all around you</p>
          </div>
          <div class="col-3">
            <img src="src\assets\img\CoupleKissing.png" width="150">
          </div>
          
        </div>

      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
#directionsToHappinessParent {
  position: relative;
  width: 100vw;
}
#directionsToHappiness {
  position: absolute;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;
}
#imaginationPic {
  width: 88%;
}
#HeroImg {
  background-position: center center;
  width: 100%;
  position: relative;
  height: 25%;
}
#love-story-font {
  position: absolute;
  left: 1.5em;
  top: 3em;
  font-size: 500%;
  font-family: 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.5)
}
#FeelTheSighText {
  font-size: 250%;
  font-family: 'Prata', Times, serif;
}
.bg-offWhite {
  background-color: rgba(246, 246, 235);
}
.ifStatements {
  font-size: x-large;
  font-family:'Courier New', Courier, monospace ;
}
.rochester {
  font-size: larger;
  font-family: 'Rochester', 'Times New Roman', Times, serif;
}
#love-story-text {
  position: relative;
  top: -40em;
}
.heart {
    height: 100px;
    width: 100px;
    background-color: red;
    transform: rotate(-45deg);
    position: relative;
    left: 78rem;
    top: 20rem;
    animation: heartbeat 1s infinite;
    border: 4mm 2px 1px 1px rgb(255, 255, 255)
}

.heart::before, 
.heart::after {
    content: "";
    height: 100px;
    width: 100px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
}

.heart::before {
    top: -50px;
    left: 0px;
}

.heart::after {
    left: 50px;
    top: 0px;
}

@keyframes heartbeat {
    0% {
        transform: scale(1)
            rotate(-45deg);
    }

    25% {
        transform: scale(1.35)
            rotate(-45deg);
    }

    50% {
        transform: scale(1.75)
            rotate(-45deg);
    }

}
div {
  border: 1px dotted pink;
}
p {
  border: 1px solid green;
}
a {
  border: 2px  solid yellow
}
li {
  border: 1px dashed cyan;
}
img {
  border: 1px solid purple;
}
span  {
  border: 1px dashed brown;
}
button {
  border: 1px dashed gray;
}

</style>
