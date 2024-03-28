<template>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-12 text-center">
            <img src="/src/assets/img/FooterEnvelope.png" width="1400vh">
        </div>
      </div>
        <div class="row mt-3">
            <div class="col-12">
                <ul class="navbar justify-content-center justify-content-end">
                    <ul>
                        <a href="https://www.facebook.com/authorkaleenashreeve"><img width="25"
                                src="/src/assets/img/HomepageFacebookButton.png"></a>
                    </ul>
                    <ul>
                        <a href="https://www.instagram.com/authorkaleenashreeve/"><img width="25"
                                src="/src/assets/img/HomepageInstagramButton.png"></a>
                    </ul>
                    <ul>
                        <a href="https://www.pinterest.com/authorkaleenashreeve/"><img width="25"
                                src="/src/assets/img/HomepagePinterestButtonHeader.png"></a>
                    </ul>
                    <ul>
                        <a href="https://www.youtube.com/channel/UCQuVNKgXpWyfUo8CmevMWNA"><img width="25"
                                src="/src/assets/img/HomepageHeaderYouTubeButton.png"></a>
                    </ul>
                </ul>
            </div>
        </div>
        <div class="row volk-font x-large">
            <div class="col-8 offset-2">
                <div class="row justify-content-center">
                    <ul class="col-2 offset-2 text-end">
                        <router-link :to="{ name: 'About' }" class="text-dark selectable text-uppercase">
                            About Me
                        </router-link>
                    </ul>
                    <ul class="col-2 text-center">
                        <router-link :to="{ name: 'Books' }" class="text-dark selectable text-uppercase">
                            Books
                        </router-link>
                    </ul>
                    <ul class="col-1">
                        <router-link :to="{ name: 'Contact' }" class="text-dark selectable text-uppercase">
                            Contact
                        </router-link>
                    </ul>
                    <ul class="col-2 text-center">
                        <router-link :to="{ name: 'Extras' }" class="text-white selectable text-uppercase">
                            Extras
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="col-2">
                <span class="large">© 2024 Kaleena Shreeve</span>
            </div>
        </div>

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
button {
    font-size: x-large;
}
.pinkBorder {
    border: solid 12px;
    border-color: rgb(250, 183, 224);
    border-radius: 12px;
}

.ThanksText {
    font-size: 300%;
}

#SweetBites {
    position: relative;
}

#Arrow {
    position: absolute;
    top: 10em;
    left: 6em;
    width: 21%;
    transform: scaleY(-1);
}

#SBText {
    font-size: 400%;
}

.keepInTouch {
    background-color: rgb(201 210 188);
    font-size: xx-large;
}

#NewsLetter {
    font-size: 300%;
}

.footer-text {
    font-size: 175%;
}

.copyright-text {
    font-size: 70%;
}
</style>