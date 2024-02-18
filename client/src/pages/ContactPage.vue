<template>
    <div class="about container-fluid my-5">
      <div class="row">
        <div class="col-12 mt-5">
          <div class="row">
            <div class="col-12 text-center hover">
              <div class="card bg-dark text-white">
                <img class="card-img" src="src\assets\img\OpenEnvelopeCrop1.png" alt="Card image">
                <div class="card-img-overlay">
                  <h5 class="card-title"><span class="text-dark">Thanks for stopping by!</span></h5>
                  <button @click="submitInfo">Let's keep in touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  export default {
    name: 'Contact'
  }
  </script>