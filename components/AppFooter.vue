<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const FooterLinks = [
  { name: 'Galéria', path: '/galeria' },
  { name: 'Rólunk', path: '/rolunk' },
  { name: 'Ajánlatkérés', path: '/ajanlatkeres' },
  { name: 'Szolgáltatások', path: '/szolgaltatasok' },
]

const nuxtApp = useNuxtApp()

const form = ref({
  name: '',
  email: '',
  phonenumber: '',
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
    <div class="footer-content pr">
      <h3 class="footer-content__h3 text-center text-transform-uppercase f-700">
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
        <div class="footer-content__flex-box__blank-div"></div>
      </div>

      <div
        class="footer-content__text-box footer-content__text-box--formating pa z-100 bg-color-w"
      >
        <h6
          class="footer-content__text-box__h6 text-transform-uppercase text-color"
        >
          KÉRJEN ÁRAJÁNLATOT
        </h6>
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
              <p class="contact-form__link-box__text-box__p">
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
  </footer>
</template>
