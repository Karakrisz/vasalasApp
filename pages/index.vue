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
        <NuxtImg
          src="/img/slider/slider-elem.svg"
          alt="Vasalás Mester"
          class="slider-content__tBox__topImg pa"
          height="100%"
        />

        <NuxtImg
          src="/img/slider/slider-elem2.svg"
          alt="Vasalás Mester"
          class="slider-content__tBox__nextTopImg pa"
          height="100%"
        />
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
    <div class="services-content pr">
      <div class="services-content__iTextBox grid-3">
        <div class="services-content__iTextBox-content d-flex bg-color-w">
          <div class="services-content__iTextBox-content__iBox">
            <NuxtImg
              src="/img/services/phone.svg"
              alt="Vasalás Mester"
              class="services-content__iTextBox-content__iBox__img"
              height="100%"
            />
          </div>
          <div class="services-content__iTextBox-content__tBox">
            <h2
              class="services-content__iTextBox-content__tBox__h2 f-600 text-color"
            >
              Kérdése van? Hívjon bizalommal
            </h2>
            <p class="services-content__iTextBox-content__tBox__p">
              <a
                class="services-content__iTextBox-content__tBox__link f-300 text-color"
                href="tel:+36707777609"
                >06 70 7777 609</a
              >
            </p>
          </div>
        </div>

        <div class="services-content__iTextBox-content d-flex bg-color-w">
          <div class="services-content__iTextBox-content__iBox">
            <NuxtImg
              src="/img/services/time.svg"
              alt="Vasalás Mester"
              class="services-content__iTextBox-content__iBox__img"
              height="100%"
            />
          </div>
          <div class="services-content__iTextBox-content__tBox">
            <h2
              class="services-content__iTextBox-content__tBox__h2 f-600 text-color"
            >
              Nyitva vagyunk
            </h2>
            <p
              class="services-content__iTextBox-content__tBox__p f-300 text-color"
            >
              H-P 08:00 - 17:00
            </p>
          </div>
        </div>

        <div class="services-content__iTextBox-content d-flex bg-color-w">
          <div class="services-content__iTextBox-content__iBox">
            <NuxtImg
              src="/img/services/map.svg"
              alt="Vasalás Mester"
              class="services-content__iTextBox-content__iBox__img"
              height="100%"
            />
          </div>
          <div class="services-content__iTextBox-content__tBox">
            <h2
              class="services-content__iTextBox-content__tBox__h2 f-600 text-color"
            >
              Jöjjön el személyesen
            </h2>
            <p class="services-content__iTextBox-content__tBox__p">
              <a
                class="services-content__iTextBox-content__tBox__link f-300 text-color"
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
              MOSÁS
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
              TISZTÍTÁS
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
    <div class="page-information-content pr">
      <NuxtImg
        src="/img/page-information/page-information.webp"
        alt="Vasalás Mester"
        class="page-information-content__img"
      />

      <div class="page-information-content__iTextBox bg-color-w pa">
        <h4
          class="page-information-content__iTextBox__h4 text-transform-uppercase f-700"
        >
          RÓLUNK
        </h4>
        <p class="page-information-content__iTextBox__p f-500">
          A vasalás.net 100%-ig magyar tulajdonban álló vállalkozás, amely
          2011-ben jelent meg a ruhatisztító piacon. Fő profiljába tartozik az
          otthonokban felgyülemlett szennyes ruházat mosása, vasalása; a
          különleges kezelést igénylő kabátok, öltönyök, és kosztümök
          tisztítása; valamint a ruhák, huzatok, textilanyagok varrása és
          javítása.
        </p>
        <p class="page-information-content__iTextBox__p f-500">
          Ha már Ön is unja a vasalást, mosást és a házimunkát; ha nincs ideje
          és már jó ideje tornyosul a szennyes; ha egy megbízható ruhatisztítót,
          ruhaklinikát keres, akkor nézze meg a vasalás.net ajánlatát!
        </p>
        <div class="page-information-content__iTextBox__link-box">
          <NuxtLink class="page-link page-link--format text-color f-600">
            Leadom a rendelésem
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="prices-content">
      <h3
        class="prices-content__h3 prices-content__h3--mt0 text-center text-transform-uppercase f-700"
      >
        ÁRAINK
      </h3>

      <div class="prices-content__iTextBox grid-6">
        <div class="prices-content__iTextBox__div bg-color-w pr">
          <NuxtImg
            src="/img/prices/action.svg"
            alt="Vasalás Mester"
            class="prices-content__iTextBox__div__actionImg pa"
          />
          <NuxtImg
            src="/img/prices/prices.svg"
            alt="Vasalás Mester"
            class="prices-content__iTextBox__div__img"
          />
          <h6
            class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
          >
            VEGYES RUHA VASALÁS
          </h6>
          <div
            class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"
          >
            <h3
              class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
            >
              1990 Ft/kg
            </h3>
          </div>
        </div>

        <div class="prices-content__iTextBox__div bg-color-w pr">
          <NuxtImg
            src="/img/prices/prices2.svg"
            alt="Vasalás Mester"
            class="prices-content__iTextBox__div__img"
          />
          <h6
            class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
          >
            ING-BLÚZ VASALÁS
          </h6>
          <div class="prices-content__iTextBox__div__prices-box pa">
            <h3
              class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
            >
              800 Ft/db
            </h3>
          </div>
        </div>

        <div class="prices-content__iTextBox__div bg-color-w pr">
          <NuxtImg
            src="/img/prices/prices3.svg"
            alt="Vasalás Mester"
            class="prices-content__iTextBox__div__img"
          />
          <h6
            class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
          >
            MOSÁS-VASALÁS
          </h6>
          <div class="prices-content__iTextBox__div__prices-box pa">
            <h3
              class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
            >
              2250 Ft/kg
            </h3>
          </div>
        </div>

        <div class="prices-content__iTextBox__div bg-color-w pr">
          <NuxtImg
            src="/img/prices/action.svg"
            alt="Vasalás Mester"
            class="prices-content__iTextBox__div__actionImg pa"
          />
          <NuxtImg
            src="/img/prices/prices4.svg"
            alt="Vasalás Mester"
            class="prices-content__iTextBox__div__img"
          />
          <h6
            class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
          >
            MOSÁS
          </h6>
          <div
            class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"
          >
            <h3
              class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
            >
              1200 Ft/kg
            </h3>
          </div>
        </div>

        <div class="prices-content__iTextBox__div bg-color-w pr">
          <NuxtImg
            src="/img/prices/prices5.svg"
            alt="Vasalás Mester"
            class="prices-content__iTextBox__div__img"
          />
          <h6
            class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
          >
            CIPZÁRCSERE
          </h6>
          <div class="prices-content__iTextBox__div__prices-box pa">
            <h3
              class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
            >
              2000 Ft-tól
            </h3>
          </div>
        </div>

        <div class="prices-content__iTextBox__div bg-color-w pr">
          <NuxtImg
            src="/img/prices/prices6.svg"
            alt="Vasalás Mester"
            class="prices-content__iTextBox__div__img"
          />
          <h6
            class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
          >
            LAKÁSTEXTIL VEGYTISZTÍTÁS
          </h6>
          <div class="prices-content__iTextBox__div__prices-box pa">
            <h3
              class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
            >
              1400 Ft-tól
            </h3>
          </div>
        </div>
      </div>
      <div class="prices-content__lBox text-center">
        <NuxtLink class="page-link page-link--format text-color f-600">
          Teljes árlista
        </NuxtLink>
      </div>
    </div>
  </section>
  <section>
    <div
      class="page-information-content page-information-content--format page-information-content--bg t-end pr"
    >
      <NuxtImg
        src="/img/page-information/page-information2.webp"
        alt="Vasalás Mester"
        class="page-information-content__img"
      />

      <div
        class="page-information-content__iTextBox page-information-content__iTextBox--format bg-color-w pa"
      >
        <h4
          class="page-information-content__iTextBox__h4 text-transform-uppercase f-700"
        >
          HÁZTÓL HÁZIG SZÁLLÍTÁS
        </h4>
        <p class="page-information-content__iTextBox__p f-500">
          Cégünk büszkén kínálja vevőinek a folyamatos, 0-24 órás online
          megrendelési lehetőséget, ami lehetővé teszi, hogy bármikor, bárhol
          leadhassák rendeléseiket. Elkötelezettek vagyunk amellett, hogy
          termékeinket gyorsan és hatékonyan szállítsuk háztól házig, biztosítva
          ezzel, hogy mindenki számára kényelmes és zökkenőmentes legyen a
          vásárlási élmény.
        </p>
        <p class="page-information-content__iTextBox__p f-500">
          A házhozszállításunk rugalmas és megbízható, így ügyfeleink mindig
          időben megkapják a kívánt termékeket, mindezt anélkül, hogy otthonuk
          kényelmét elhagynák.
        </p>
        <div class="page-information-content__iTextBox__link-box">
          <NuxtLink class="page-link page-link--format text-color f-600">
            Leadom a rendelésem
          </NuxtLink>
        </div>
      </div>
      <div class="page-information-content__blog-content">
        <h3
          class="page-information-content__blog-content__h3 text-center text-transform-uppercase f-700"
        >
          BLOG
        </h3>

        <div class="page-information-content__blog-content__gBox pr grid-3">
          <div class="page-information-content__blog-content__gBox__iTextBox">
            <NuxtImg
              src="/img/page-information/blog/blog.jpg"
              alt="Vasalás Mester"
              class="page-information-content__blog-content__gBox__iTextBox__img"
            />
            <div
              class="page-information-content__blog-content__gBox__iTextBox__tBox"
            >
              <h5
                class="page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w"
              >
                A Gyűrődésmentesség Művészete
              </h5>
              <p
                class="page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w"
              >
                Fedezd fel a tökéletesen sima ruhadarabok elérésének titkait!
                Bemutatjuk a legjobb vasalási technikákat és eszközöket, amelyek
                segítenek a gyűrődések nélküli, kifogástalan megjelenés
                elérésében, akár otthon, akár útközben.
              </p>
            </div>
          </div>

          <div class="page-information-content__blog-content__gBox__iTextBox">
            <NuxtImg
              src="/img/page-information/blog/blog2.jpg"
              alt="Vasalás Mester"
              class="page-information-content__blog-content__gBox__iTextBox__img"
            />
            <div
              class="page-information-content__blog-content__gBox__iTextBox__tBox"
            >
              <h5
                class="page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w"
              >
                A Gyűrődésmentesség Művészete
              </h5>
              <p
                class="page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w"
              >
                Fedezd fel a tökéletesen sima ruhadarabok elérésének titkait!
                Bemutatjuk a legjobb vasalási technikákat és eszközöket, amelyek
                segítenek a gyűrődések nélküli, kifogástalan megjelenés
                elérésében, akár otthon, akár útközben.
              </p>
            </div>
          </div>

          <div class="page-information-content__blog-content__gBox__iTextBox">
            <NuxtImg
              src="/img/page-information/blog/blog3.jpg"
              alt="Vasalás Mester"
              class="page-information-content__blog-content__gBox__iTextBox__img"
            />
            <div
              class="page-information-content__blog-content__gBox__iTextBox__tBox"
            >
              <h5
                class="page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w"
              >
                A Gyűrődésmentesség Művészete
              </h5>
              <p
                class="page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w"
              >
                Fedezd fel a tökéletesen sima ruhadarabok elérésének titkait!
                Bemutatjuk a legjobb vasalási technikákat és eszközöket, amelyek
                segítenek a gyűrődések nélküli, kifogástalan megjelenés
                elérésében, akár otthon, akár útközben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
