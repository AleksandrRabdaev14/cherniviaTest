<template>
  <div class="p3">
    <div class="dorian flexcol jcc">
      <p class="pt15 fbtn dorian-title">Accomodation</p>
      <p class="pt05 pb15">La tua attività fa parte di questa categoria?</p>
      <VueSlickCarousel v-bind="settings">
        <div class="slider-item-card">
          <div class="slide-inner flex">
            <div class="slider-icon">

            </div>
            <div class="slide-text">
              <div class="slider-title">
                Hotel, B&B Affitacamere
              </div>
              <div class="slider-desc">
                Strutture di tipo alberghi, Affittacamere, Ostelli, Rifugi alpini etc.
              </div>
            </div>
          </div>
        </div> 
        <div class="slider-item-card">
          <div class="slider-icon">

          </div>
          <div class="slider-title">
              Hotel, B&B Affitacamere
          </div>
          <div class="slider-desc">
            Strutture di tipo alberghi, Affittacamere, Ostelli, Rifugi alpini etc.
          </div>

        </div>
      </VueSlickCarousel>
      <p class="pt15">Registrati subito e partecipa alla creazione dell’offerta turistica locale.</p>
    </div>
  </div>
</template>

<script>
// import gsap from "gsap"
// import SplitText from "@/plugins/gsap/SplitText.min"
// gsap.registerPlugin(SplitText)

// export default {
//   name: 'TextStyles',
//   data() {
//     return {
//       settings: {
//         "centerMode": true,
//         "centerPadding": "0px",
//         "focusOnSelect": true,
//         "infinite": false,
//         "slidesToShow": 1,
//         "rows": 1,
//         "speed": 500,
//         "arrows": false,
//       },
//     }
//   },
//   mounted () {
// var tl = gsap.timeline(), 
//     mySplitText = new SplitText(".dorian-title", {type:"words,chars"}), 
//     chars = mySplitText.chars; //an array of all the divs that wrap each character

// gsap.set(".dorian-title", {perspective: 400});

// tl.from(chars, {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");


//   }
// }
</script>

<style lang="scss">
p {
  color: #fff;
}
--image-url {

}
.dorian {
  width: 100%;
  height: 216px;

  position: relative;
  background: rgba(0,0,0,0.5);
  background-image: url(./img/1.jpg);
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  & p {
    margin: 0;
  }
}

.slider-item-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */
  width: 277px !important;
  height: 91px;
  border-radius: 4px;

}


</style>
