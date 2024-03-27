<template>
  <div class="flex-1 container-fluid bg-white">
    <nav class="row navbar navbar-expand-lg">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-2">
              <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
                <div class="d-flex flex-column align-items-center ps-5">
                  <img src="..\src\assets\img\1-HomepageLogoTransparent.png" class="rounded-pill" height="175" alt="">
                </div>
              </router-link>
            </div>
            <div class="col-10 pt-4">
              <div class="collapse navbar-collapse pt-3" id="navbarText">
                <ul class="navbar-nav justify-content-right justify-content-end">
                  <ul class="navbar-nav me-auto text-dark volk-font font-30px d-flex flex-row">
                    <div class="row ">
                      <div class="col-8 pt-4">
                        <div class="row text-center pt-4 ps-4">
                          <li class="col-5">
                            <router-link :to="{ name: 'About' }" class="router btn text-dark selectable text-uppercase">
                              About Me
                            </router-link>
                          </li>
                          <li class="col-3">
                            <router-link :to="{ name: 'Books' }" class="router btn text-dark selectable text-uppercase">
                              Books
                            </router-link>
                          </li>
                          <li class="col-3">
                            <router-link :to="{ name: 'Contact' }"
                              class="router btn text-dark selectable text-uppercase">
                              Contact
                            </router-link>
                          </li>
                          <!-- <li class="col-3">
                        <router-link :to="{ name: 'Extras' }" class="router btn text-white selectable text-uppercase">
                          Extras
                        </router-link>
                      </li> -->
                        </div>
                      </div>
                      <div class="col-3 d-flex align-items-center">
                        <li class="mx-2 btn selectable">
                          <a href="https://www.instagram.com/authorkaleenashreeve/"><img width="35"
                              src="..\src\assets\img\1-HomepageInstagramButton.png"></a>
                        </li>
                        <li class="mx-2 btn selectable">
                          <a href="https://www.facebook.com/authorkaleenashreeve"><img width="35"
                              src="..\src\assets\img\1-HomepageFacebookButton.png"></a>
                        </li>
                        <li class="mx-2 btn selectable">
                          <a href="https://www.pinterest.com/authorkaleenashreeve/"><img width="35"
                              src="..\src\assets\img\1-HomepagePinterestButtonHeader.png"></a>
                        </li>
                        <li class=" mx-2 btn selectable">
                          <a href="https://www.youtube.com/"><img width="40"
                              src="..\src\assets\img\1- Homepage Header YouTube Button.png"></a>
                        </li>
                      </div>
                      <div class="col-1">
                        <li>
                          <router-link :to="{ name: 'Contact' }" class="router btn text-dark selectable text-uppercase mx-2">
                            <img src="..\src\assets\img\1-HomepageSweetBitesNewsletterButton.png" width="250">
                          </router-link>
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
</style>