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
              <p class="footer-content__bottom__infoBox__header__lBox__p">
                <a
                  class="footer-content__bottom__infoBox__header__lBox__p__link text-color-w"
                  href="tel:+36707777609"
                >
                  <NuxtImg
                    src="/img/footer/phone.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__lBox__img"
                    height="100%"
                  />
                  +36 70 7777 609
                </a>
              </p>
              <p class="footer-content__bottom__infoBox__header__lBox__p">
                <a
                  class="footer-content__bottom__infoBox__header__lBox__p__link text-color-w"
                  target="_blank"
                  href="https://www.google.com/maps/place/Budapest,+J%C3%B3zsef+Attila+u.+36,+1042/@47.5615728,19.0831989,17z/data=!3m1!4b1!4m6!3m5!1s0x4741da31219d1d95:0x9681f22116d16e6d!8m2!3d47.5615692!4d19.0857738!16s%2Fg%2F11fwhllv70?authuser=0&entry=ttu"
                >
                  <NuxtImg
                    src="/img/footer/map.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__lBox__img"
                    height="100%"
                  />
                  1042 Budapest, József Attila utca 36.
                </a>
              </p>
              <p class="footer-content__bottom__infoBox__header__lBox__p">
                <a
                  class="footer-content__bottom__infoBox__header__lBox__p__link footer-content__bottom__infoBox__header__lBox__p__link--format text-color-w"
                  href="mailto:kapcsolat@vasalas.net"
                >
                  <NuxtImg
                    src="/img/footer/mail.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__lBox__img"
                    height="100%"
                  />
                  kapcsolat@vasalas.net
                </a>
              </p>
            </div>
            <div class="footer-content__bottom__infoBox__header__socialBox">
              <p class="footer-content__bottom__infoBox__header__socialBox__p">
                <a
                  class="footer-content__bottom__infoBox__header__socialBox__link"
                  href="#"
                >
                  <NuxtImg
                    src="/img/footer/facebook.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__socialBox__img"
                    height="100%"
                  />
                </a>
              </p>

              <p class="footer-content__bottom__infoBox__header__socialBox__p">
                <a
                  class="footer-content__bottom__infoBox__header__socialBox__link"
                  href="#"
                >
                  <NuxtImg
                    src="/img/footer/instagram.svg"
                    alt="Vasalás Mester"
                    class="footer-content__bottom__infoBox__header__socialBox__img footer-content__bottom__infoBox__header__socialBox__img--format"
                    height="100%"
                  />
                </a>
              </p>
            </div>
          </div>
          <div class="footer-content__bottom__infoBox__menuBox">
            <NuxtLink
              v-for="link in FooterLinks"
              :key="link.path"
              :to="link.path"
              :class="[
                'footer-content__bottom__infoBox__link footer-link text-color-w f-600',
              ]"
            >
              {{ link.name }}
            </NuxtLink>

            <div class="footer-content__bottom__infoBox__bodyLinkBox">
              <NuxtLink
                class="footer-content__bottom__infoBox__bodyLinkBox__link text-color-w f-500"
              >
                Gyakran Ismételt Kérdések
              </NuxtLink>
              <NuxtLink
                class="footer-content__bottom__infoBox__bodyLinkBox__link text-color-w f-500"
              >
                Adatvédelmi Szabályzat
              </NuxtLink>
              <NuxtLink
                class="footer-content__bottom__infoBox__bodyLinkBox__link text-color-w f-500"
              >
                Kapcsolat
              </NuxtLink>
              <NuxtLink
                class="footer-content__bottom__infoBox__bodyLinkBox__link text-color-w f-500"
              >
                Árlista
              </NuxtLink>
            </div>
          </div>
          <div class="footer-content__bottom__infoBox__copyRBox bg-color-w">
            <h6 class="footer-content__bottom__infoBox__copyRBox__h6">
              <span class="footer-content__bottom__infoBox__copyRBox__span"
                >2024
              </span>
              DIGITAL SEED STUDIO
            </h6>
          </div>
        </div>
        <div class="footer-content__bottom__mapBox">
          <iframe
            class="footer-content__bottom__mapBox__iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.3196289003286!2d19.0857738!3d47.5615692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741da31219d1d95%3A0x9681f22116d16e6d!2sBudapest%2C%20J%C3%B3zsef%20Attila%20u.%2036%2C%201042!5e0!3m2!1shu!2shu!4v1719140381574!5m2!1shu!2shu"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </footer>
</template>
