<script setup lang="ts"></script>
<template>
  <section>
    <div class="slider-content pr">
      <NuxtImg
        src="/img/slider/slider.webp"
        alt="Vasalás Mester"
        class="slider-content__img"
        height="100%"
      />

      <div class="slider-content__tBox pa">
        <h1
          class="slider-content__tBox__h1 text-transform-uppercase text-color-w f-800"
        >
          TISZTA ILLATOS EGYENES
        </h1>
        <h5 class="slider-content__tBox__h5 text-color-w f-500">
          Mi így szeretjük.
        </h5>
        <p class="slider-content__tBox__p text-color-w f-500">
          Cégünk komplex szolgáltatást nyújt magánszemélyeknek és
          cégeknek egyaránt már 35 éve! Akár egy ruhadarabot is elvállalunk,
          vagy akár több ezret is egyszerre - igénytől függően.
        </p>
        <div class="slider-content__tBox__lBox">
          <NuxtLink class="page-link text-color f-600">
            Leadom a rendelésem
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="services-content">
      <div class="services-content__iTextBox grid-3">
        <div class="services-content__iTextBox-content d-flex">
          <div class="services-content__iTextBox-content__iBox">
            <NuxtImg
              src="/img/services/phone.svg"
              alt="Vasalás Mester"
              class="services-content__iTextBox-content__iBox__img"
              height="100%"
            />
          </div>
          <div class="services-content__iTextBox-content__tBox">
            <h2 class="services-content__iTextBox-content__tBox__h2 text-color">
              Kérdése van? Hívjon bizalommal
            </h2>
            <p class="services-content__iTextBox-content__tBox__p">
              <a
                class="services-content__iTextBox-content__tBox__link text-color"
                href="tel:+36707777609"
                >06 70 7777 609</a
              >
            </p>
          </div>
        </div>

        <div class="services-content__iTextBox-content d-flex">
          <div class="services-content__iTextBox-content__iBox">
            <NuxtImg
              src="/img/services/time.svg"
              alt="Vasalás Mester"
              class="services-content__iTextBox-content__iBox__img"
              height="100%"
            />
          </div>
          <div class="services-content__iTextBox-content__tBox">
            <h2 class="services-content__iTextBox-content__tBox__h2 text-color">
              Nyitva vagyunk
            </h2>
            <p class="services-content__iTextBox-content__tBox__p text-color">
              H-P 08:00 - 17:00
            </p>
          </div>
        </div>

        <div class="services-content__iTextBox-content d-flex">
          <div class="services-content__iTextBox-content__iBox">
            <NuxtImg
              src="/img/services/map.svg"
              alt="Vasalás Mester"
              class="services-content__iTextBox-content__iBox__img"
              height="100%"
            />
          </div>
          <div class="services-content__iTextBox-content__tBox">
            <h2 class="services-content__iTextBox-content__tBox__h2 text-color">
              Jöjjön el személyesen
            </h2>
            <p class="services-content__iTextBox-content__tBox__p">
              <a
                class="services-content__iTextBox-content__tBox__link text-color"
                target="_blank"
                href="https://www.google.com/maps/place/Budapest,+J%C3%B3zsef+Attila+u.+36,+1042/@47.5615728,19.0831989,17z/data=!3m1!4b1!4m6!3m5!1s0x4741da31219d1d95:0x9681f22116d16e6d!8m2!3d47.5615692!4d19.0857738!16s%2Fg%2F11fwhllv70?authuser=0&entry=ttu"
                >1042 Budapest, József Attila utca 36.</a
              >
            </p>
          </div>
        </div>
      </div>
      <h3
        class="services-content__h3 text-center text-transform-uppercase f-700"
      >
        SZOLGÁLTATÁSAINK
      </h3>

      <div class="services-content__linkItextBox grid-3">
        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              VASALÁS
            </NuxtLink>
          </div>
        </div>

        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services2.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              VASALÁS
            </NuxtLink>
          </div>
        </div>

        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services3.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              VASALÁS
            </NuxtLink>
          </div>
        </div>

        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services4.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              VARRÁS
            </NuxtLink>
          </div>
        </div>

        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services5.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              JAVÍTÁS
            </NuxtLink>
          </div>
        </div>

        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services6.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              NAGY MENNYISÉG
            </NuxtLink>
          </div>
        </div>

        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services7.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              MÉRETRE SZABÁS IGAZÍTÁS
            </NuxtLink>
          </div>
        </div>

        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services8.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              KÖLCSÖNZÉS
            </NuxtLink>
          </div>
        </div>

        <div class="services-content__linkItextBox__content pr">
          <NuxtImg
            src="/img/services/services9.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            <NuxtLink
              class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
            >
              EGYÉNI IGÉNYEK MEGVALÓSÍTÁSA
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    
  </section>
</template>
