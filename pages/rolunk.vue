<script setup>
useHead({
  title: 'Rólunk',
})
</script>

<template>
  <section>
    <div
      class="page-information-content page-information-content--subpage-about pr"
    >
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
</template>
