<script setup lang="ts">
import { fetchPosts, truncateContent } from '~/utils/js/utils'

const itemsPost = await fetchPosts()
</script>
<template>
  <section>
    <div class="supage-content supage-content--blog-format position-relative">
      <div class="page-information-content__blog-content">
        <h3
          class="page-information-content__blog-content__h3 text-center text-transform-uppercase f-700"
        >
          BLOG
        </h3>

        <div class="page-information-content__blog-content__gBox pr grid-3">
          <div
            v-for="post in itemsPost"
            :key="post.slug"
            class="page-information-content__blog-content__gBox__iTextBox"
          >
            <NuxtLink
              class="blog-box__link-box__Nuxtlink"
              :to="`/posts/${post.slug}`"
            >
              <NuxtImg
                height="100%"
                loading="lazy"
                class="page-information-content__blog-content__gBox__iTextBox__img"
                :src="`${$config.public.apiBaseUrl}/storage/${post.image}`"
                alt="{{ post.title }}"
              />
              <div
                class="page-information-content__blog-content__gBox__iTextBox__tBox"
              >
                <h5
                  class="page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w"
                >
                  {{ post.title }}
                </h5>
                <p
                  class="page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w"
                  v-html="truncateContent(post.body, 150)"
                ></p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
