<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="playlist-font large-4x">Secret Song</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <img class="" src="src\assets\img\1-Homepage Heart Divider.png" width="1000">
            </div>
        </div>
        <div class="row px-5">
            <div class="col-12 prata-font text-center mt-5">
                <div class="row">
                    <div class="col-1 offset-3 text-end">
                        <a href="https://www.youtube.com/watch?v=C3tpA5VMgZg"><img
                                src="src\assets\img\1- Homepage Header YouTube Button.png" width="50"></a>
                    </div>
                    <div class="col-4">
                        <h5>Dustin Lynch: Rock You Sweet</h5>
                    </div>
                    <div class="col-1">
                        <a href="https://open.spotify.com/track/56d3jpqDJiU7PS5toypLn0"><img width="50"
                                src="data:image/jpeg;base64,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">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-8 offset-2 volk-font mt-3 px-5 text-center">
                <h5 class="px-5">
                    <p class="px-5">Dustin Lynch is my all time favorite male singer.
                        His voice is so rich and deep just like this song.
                        Picture Gavin holding Sarah while they slow dance dripping
                        wet holding each other close. The intimacy from this
                        moment captures Sarah’s heart even more . . . and mine too!</p>
                </h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QR21FY'
}
</script>
<style scoped lang="scss"></style>