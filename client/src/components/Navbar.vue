<template>
  <div class="container-fluid bg-white">
    <nav class="row navbar navbar-expand-lg">
      <div class="col-12">
        <div class="row">
          <div class="col-3 p-2 offset-9" id="SweetBites">
            <img src="src\assets\img\Arrow.png" id="Arrow">
            <span class="text-start rochester-font" id="SBText">Sweet Bites</span>
          </div>
        </div>
        <div class="row">
          <div class="col-2 ms-5">
            <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
              <div class="d-flex flex-column align-items-center ps-5">
                <img src="src\assets\img\1-Homepage Logo Transparent.png" class="rounded-pill" height="150" alt="">
              </div>
            </router-link>
          </div>
          <div class="col-9">
            <div class="collapse navbar-collapse pt-3" id="navbarText">
              <ul class="navbar-nav justify-content-right justify-content-end">
                <ul class="navbar-nav me-auto text-dark volk-font font-30px d-flex flex-row">
                  <div class="row ">
                    <div class="col-9 d-flex">
                      <Div class="row">
                      <li class="col-3">
                        <router-link :to="{ name: 'About' }" class="router btn text-dark selectable text-uppercase">
                          About Me
                        </router-link>
                      </li>
                      <li class="col-2">
                        <router-link :to="{ name: 'Books' }" class="router btn text-dark selectable text-uppercase">
                          Books
                        </router-link>
                      </li>
                      <li class="col-3">
                        <router-link :to="{ name: 'Journeys' }" class="router btn text-dark selectable text-uppercase">
                          Journeys
                        </router-link>
                      </li>
                      <li class="col-2">
                        <router-link :to="{ name: 'Blog' }" class="router btn text-dark selectable text-uppercase">
                          Blog
                        </router-link>
                      </li>
                      <li class="col-2">
                        <router-link :to="{ name: 'Contact' }" class="router btn text-dark selectable text-uppercase">
                          Contact
                        </router-link>
                      </li>
                    </Div>
                    </div>
                    <div class="col-2 d-flex ms-5">
                      <li>
                        <a href="https://www.facebook.com/kaleena.shreeve"><img width="35"
                            src="src\assets\img\f_logo_RGB-Black_144.png"></a>
                      </li>
                      <li class="mx-2">
                        <a href="https://www.instagram.com/kaleenashreeve1/"><img width="35"
                            src="src\assets\img\Instagram_Glyph_Black.png"></a>
                      </li>
                      <li class="me-2">
                        <a href="https://www.pinterest.com/kaleenashreeve/"><img width="35"
                            src="src\assets\img\P-Badge-Cosmicore-Black-900.png"></a>
                      </li>
                      <li>
                        <span class="p-1 ">
                          <button class="btn text-white pink-button rounded-pill volk-font font-30px p-1.5 ms-3" data-toggle="modal"
                            data-target="#newsletterModal">Newsletter</button>
                        </span>
                      </li>
                    </div>
                  </div>
                </ul>
              </ul>
            </div>
          </div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.font-30px {
  font-size: 30px;
}
.router {
  font-size: 85%;
}
button {
  font-family: cursive;
}
#SweetBites {
  position: relative;
}
#Arrow {
  position: absolute;
  top: .5em;
  left: 8em;
  width: 15%;
}
#SBText {
  position: absolute;
  top: -0.25em;
  left: 5.25em;
  font-size: xx-large;
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
</style>