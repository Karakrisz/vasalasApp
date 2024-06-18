<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const FooterLinks = [
  { name: 'Galéria', path: '/partnerek' },
  { name: 'Rólunk', path: '/szolgaltatasok' },
  { name: 'Ajánlatkérés', path: '/dokumentumok' },
  { name: 'Szolgáltatások', path: '/ajanlatkeres' },
]

const nuxtApp = useNuxtApp()

const form = ref({
  name: '',
  email: '',
  phonenumber: '',
  mobilecall: '',
  subject: '',
  message: '',
})

const isSent = ref(false)

const sendEmail = async () => {
  try {
    await nuxtApp.$mail.send({
      to: 'mualimadnan8@gmail.com',
      subject: `Új üzenetet küldött - ${form.value.name}`,
      html: `
        <p><strong>Name:</strong> ${form.value.name}</p>
        <p><strong>Email:</strong> ${form.value.email}</p>
        <p><strong>Phone Number:</strong> ${form.value.phonenumber}</p>
        <p><strong>Message:</strong></p>
        <p>${form.value.message}</p>
      `,
    })
    isSent.value = true
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Failed to send email.')
  }
}
</script>

<template>
  <footer>
    <div class="footer-content">
      <h3
        class="footer-content__h3 footer-content__h3--mb-format text-center text-transform-uppercase f-700"
      >
        KAPCSOLAT
      </h3>
      <div class="footer-content__flex-box d-flex">
        <div class="footer-content__img-box">
          <NuxtImg
            src="/img/footer/contact.webp"
            alt="Vasalás Mester"
            class="footer-content__img-box__img"
          />
        </div>
        <div class="footer-content__text-box">
          <h6
            class="footer-content__text-box__h6 text-transform-uppercase text-color-w"
          >
            ÍRJON NEKÜNK, HAMAR VÁLASZOLUNK
          </h6>
          <p class="footer-content__text-box__p text-color-w">
            Amennyiben bármilyen kérdése merülne fel, ne habozzon kapcsolatba
            lépni velünk! Írjon nekünk bátran, és csapatunk igyekszik a lehető
            leggyorsabban válaszolni minden érdeklődésre. Várjuk, hogy halljunk
            Öntől!
          </p>
          <div class="contact-form">
            <form @submit.prevent="sendEmail">
              <div class="contact-form">
                <div class="form-group">
                  <input
                    class="form-group__input"
                    placeholder="Név"
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-group__input"
                    placeholder="Email cím"
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-group__input"
                    placeholder="Telefonszám"
                    type="text"
                    id="phonenumber"
                    v-model="form.phonenumber"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-group__input"
                    placeholder="Legalkalmasabb időpont a telefonhívásra"
                    type="text"
                    id="mobilecall"
                    v-model="form.mobilecall"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-group__input"
                    placeholder="Tárgy"
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    rows="9"
                    cols="300"
                    class="form-group__textarea"
                    placeholder="Üzenet..."
                    id="message"
                    v-model="form.message"
                    required
                  ></textarea>
                </div>
              </div>
            </form>
            <div class="contact-form__link-box d-flex">
              <div class="contact-form__link-box__text-box">
                <p class="contact-form__link-box__text-box__p text-color-w">
                  A Küldés gombra való kattintással automatikusan elfogadja az
                  Adatvédelmi Szabályzatot.
                </p>
              </div>
              <div class="contact-form__link-box__NuxtLink">
                <NuxtLink
                  class="page-nuxt-link text-transform-uppercase text-color-w f-700"
                >
                  KÜLDÉS
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-content__bottom d-flex">
        <div class="footer-content__bottom__infoBox">
          <div class="footer-content__bottom__infoBox__header d-flex">
            <div class="footer-content__bottom__infoBox__header__iBox">
              <NuxtImg
                src="/img/header/logo.svg"
                alt="Vasalás Mester"
                class="footer-content__bottom__infoBox__header__iBox__img"
                height="100%"
              />
            </div>
            <div class="footer-content__bottom__infoBox__header__lBox">
              <p>
                <a href="tel:+36707777609">
                  <NuxtImg
                    src="/img/footer/phone.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__lBox__img"
                    height="100%"
                  />
                  +36 70 7777 609
                </a>
              </p>
              <p>
                <a href="tel:+36707777609">
                  <NuxtImg
                    src="/img/footer/phone.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__lBox__img"
                    height="100%"
                  />
                  +36 70 7777 609
                </a>
              </p>
              <p>
                <a href="tel:+36707777609">
                  <NuxtImg
                    src="/img/footer/phone.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__lBox__img"
                    height="100%"
                  />
                  +36 70 7777 609
                </a>
              </p>
            </div>
            <div class="footer-content__bottom__infoBox__header__socialBox">
              <p>
                <a href="#">
                  <NuxtImg
                    src="/img/footer/facebook.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__socialBox__img"
                    height="100%"
                  />
                </a>
              </p>

              <p>
                <a href="#">
                  <NuxtImg
                    src="/img/footer/instagram.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__socialBox__img"
                    height="100%"
                  />
                </a>
              </p>
            </div>
          </div>
          <div>
            <NuxtLink
              v-for="link in FooterLinks"
              :key="link.path"
              :to="link.path"
              :class="['footer-link text-color']"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
          <div>lábléc</div>
        </div>
        <div class="footer-content__bottom__mapIgmBox">
          <NuxtImg
            src="/img/footer/map.webp"
            alt="Vasalás Mester"
            class="footer-content__bottom__mapIgmBox__img"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
