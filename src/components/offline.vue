<template>
  <div id="offline-container" v-if="isOffline">
    <!-- Night Sky Animation -->
    <div id="body">
      <div id="moon">
        <div id="filled-moon">
          <div id="trans-moon"></div>
        </div>
      </div>
      <div class="planets">
        <div id="venus"></div>
        <div id="star1"></div>
        <div id="star2"></div>
        <div id="star3"></div>
        <div id="star4"></div>
        <div id="star5"></div>
        <div id="star6"></div>
        <div id="star7"></div>
        <div id="star8"></div>
        <div id="star9"></div>
      </div>
      <div id="sun"></div>
      <div class="mountains">
        <div id="mountain1"></div>
        <div id="mountain2"></div>
        <div id="mountain3"></div>
        <div id="mountain4"></div>
        <div id="mountain5"></div>
        <div id="mountain6"></div>
        <div id="mountain7"></div>
        <div id="mountain8"></div>
      </div>
      <div class="meteor-cont">
        <div class="meteor-ani">
          <div id="meteor"></div>
        </div>
      </div>
      <div class="stars">
      
        
    </div>
  </div>

    
         
    <!-- Offline Message -->
    <div class="offline-content">
      <h2>You're Offline</h2>
      <p>Please check your internet connection and try again.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOffline = ref(!navigator.onLine);

const updateOnlineStatus = () => {
  isOffline.value = !navigator.onLine;
};

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus);
  window.removeEventListener('offline', updateOnlineStatus);
});
</script>

<style scoped>
/* Fullscreen container */
#offline-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(21, 0, 61);
  z-index: 1000;
}

/* Offline message box */
.offline-content {
  position: absolute;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: white;
  animation: fadeIn 0.5s ease-in-out;
}

/* Headline */
h2 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Description */
p {
  font-size: 16px;
  color: #b0b0b0;
}

/* Background Night Sky Animation */
:root {
  --skyColor: rgb(21, 0, 61);
  --mountainColor: linear-gradient(90deg, rgb(6, 0, 43) 0%, rgb(13, 0, 38) 100%);
}

#body {
  position: absolute;
  width: 100%;
  height: 100vh;
  background:rgb(21, 0, 61);
  overflow: hidden;
}

#venus {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background: #fff;
  border-radius: 50%;
  bottom: 30%;
  right: 25%;
  box-shadow: 0.1rem 0.1rem 15px #fff, 0rem 0rem 30px #fff;
}

#sun {
  position: absolute;
  width: 8rem;
  height: 8rem;
  background: radial-gradient(#F17022 50%, #fcb100 200%);
  border-radius: 50%;
  bottom: 10%;
  right: 45%;
  box-shadow: 0px 0px 70px #ffb60d4f;
}

#moon {
  height: 100vh;
  width: 100%;
  position: relative;
  transform: rotate(-30deg);
}

#filled-moon {
  position: absolute;
  width: 8rem;
  height: 8rem;
  background-color: rgb(230, 230, 230);
  border-radius: 50%;
  left: 35%;
  top: 30%;
}

#trans-moon {
  position: relative;
  width: 10rem;
  height: 10rem;
  background-color: rgb(21, 0, 61);
  border-radius: 50%;
  left: 28%;
  top: -15%;
}

.mountains {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  background:linear-gradient(90deg, rgb(6, 0, 43) 0%, rgb(13, 0, 38) 100%);
  
}
#mountain1,
#mountain2,
#mountain3,
#mountain4,
#mountain5,
#mountain7,
#mountain8,
#mountain6{
    position: absolute;
    bottom: -20%;
    width: 20rem;
    border-radius: 10px 0px 0px 0px;
    height: 20rem;
    transform: rotate(45deg);
    background: linear-gradient(90deg, rgb(6, 0, 43) 0%, rgb(13, 0, 38) 100%);
    z-index: 10000;
}

#mountain1{
    left: 0%;
}

#mountain2{
    left: 25%;
}

#mountain3{
    left: 45%;
}

#mountain4{
    left: 60%;
}

#mountain5{
    left: 80%;
}

#mountain6{
    left: 10%;
}

#mountain7{
    left: 35%;
}

#mountain8{
    left: 70%;
}
.meteor-cont {
  position: absolute;
  top: 0%;
  left: 50%;
  height: 100%;
  width: 10%;
  transform: translate(-50%, -20%);
  transform: rotate(65deg);
  display: flex;
  justify-content: center;
}

.meteor-cont #meteor {
  height: 10vh;
  width: 10px;
  background: linear-gradient(to top, #fff 0%, transparent 80%);
  backdrop-filter: blur(60%);
  border-radius: 10px 10px;
  opacity: 0.7;
  z-index: 600;
  position: relative;
}

.meteor-cont #meteor::after {
  content: '';
  position: absolute;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  opacity: 1;
  bottom: 0%;
  right: 0%;
  box-shadow: 10px 10px 20px #fff, -10px -10px 20px #fff, -15px -15px 50px #fff;
  z-index: 600;
}

.meteor-ani {
  position: relative;
  top: -60%;
  left: 60%;
  height: 1200vh;
  width: 10%;
  display: flex;
  justify-content: center;
  animation: meteor 4s linear infinite;
}
#star1,
#star2,
#star3,
#star4,
#star5,
#star6,
#star7,
#star8,
#star9
{
    position: absolute;
    border-radius: 50%;
    width: .5rem;
    height: .5rem;
    background-color: rgb(208, 224, 255);
    animation: venus .1s ease 0s infinite normal forwards;

}

#star1{
    top: 30%;
    left: 20%;
}

#star2{
    top: 36%;
    left: 12%;
}

#star3{
    top: 45%;
    left: 29%;
}

#star4{
    top: 21%;
    left: 23%;
}

#star5{
    top: 55%;
    left: 24%;
}

#star6{
    top: 10%;
    right: 17%;
}

#star7{
    top: 16%;
    right: 57%;
}

#star8{
    top: 45%;
    right: 29%;
}

#star9{
    top: 55%;
    right: 24%;
}

.clouds{
    height: 100vh;
    width: 100%;
    top: 0%;
    left: 0%;
    border: 2px solid #fff;
    
}

.clouds-ani{
    width: 110%;
    height: 100vh;
    animation: clouds 5s ease 0s infinite normal forwards;

}

#cloud1,
#cloud2,
#cloud3,
#cloud4,
#cloud5
{
    position: absolute;
    background-color: rgb(230, 230, 230);
    opacity: .7;
    backdrop-filter: blur(70%);

}

#cloud1{
    height: 10rem;
    width: 20rem;
    top: 50%;
    left: 50%;
    border-radius: 50% 50% 45% 45%;

}

#cloud2{
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    top: 45%;
    left: 55%;
    overflow: hidden;
}

#cloud3{
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    top: 45%;
    left: 60%;
}

#cloud4{
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    top: 45%;
    left: 51%;
}

@keyframes meteor {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
