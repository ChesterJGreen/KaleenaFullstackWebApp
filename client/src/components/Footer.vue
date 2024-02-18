<template>
    <div class="container-fluid mt-5">
        <div class="row pinkSquareBorder">
            <div class="col-10 offset-1 pinkBorder">
                <div class="row">
                    <div class="col-3 p-5">
                        <img src="src\assets\img\LogoTransparentEnlargedCropped.png" width="300">
                    </div>
                    <div class="col-6 p-5 text-center">
                        <div class="row">
                            <div class="col-12 pt-5" id="SweetBites">
                                <p class="ThanksText cardo-font">Thanks for stopping by!</p>
                                <button class="btn rounded p-4 keepInTouch cardo-font" data-toggle="modal"
                                    data-target="#newsletterModal">Let's keep in touch</button>
                                <img src="src\assets\img\Arrow.png" id="Arrow">
                                <p id="SBText" class="rochester-font">Sweet Bites</p>
                                <p id="NewsLetter" class="volk-font">Newsletter</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 pt-5">
                        <img src="src\assets\img\StampPic.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <ul class="navbar justify-content-center justify-content-end">
                    <ul>
                        <a href="https://www.facebook.com/kaleena.shreeve"><img width="25"
                                src="src\assets\img\f_logo_RGB-Black_144.png"></a>
                    </ul>
                    <ul>
                        <a href="https://www.instagram.com/kaleenashreeve1/"><img width="25"
                                src="src\assets\img\Instagram_Glyph_Black.png"></a>
                    </ul>
                    <ul>
                        <a href="https://www.instagram.com/kaleenashreeve1/"><img width="25"
                                src="src\assets\img\PinterestLogo.png"></a>
                    </ul>
                </ul>
            </div>
        </div>
        <div class="row footer-text volk-font">
            <div class="col-9 offset-1">
                <div class="row">
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
                        <router-link :to="{ name: 'Journeys' }" class=" text-dark selectable text-uppercase">
                            Extras
                        </router-link>
                    </ul>
                    <ul class="col-2 text-center">
                        <router-link :to="{ name: 'Blog' }" class="text-dark selectable text-uppercase">
                            Blog
                        </router-link>
                    </ul>
                    <ul class="col-1">
                        <router-link :to="{ name: 'Contact' }" class="text-dark selectable text-uppercase">
                            Contact
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="col-2">
                <span class="copyright-text">© 2023 Kaleena Shreeve</span>
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