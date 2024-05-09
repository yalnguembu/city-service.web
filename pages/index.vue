<template>
  <div
    class="w-full bg-white dark:bg-gray-900 text-center lg:text-left mt-12 lg:mt-0"
  >
    <header class="w-full h-fit">

    </header>
    <main class="max-w-screen-lg mx-auto">

    </main>
  </div>
</template>
<i18n lang="json">
{
  "en": {
    "name": "City services",
    "logoAlt": "Infinite notes - logo",
    "title": "Corporate citizenship",
    "subtitle": "L'entreprise pluris disciplinaire au service de la communaute"
  },
  "fr": {
    "name": "City services",
    "logoAlt": "Logo - City services",
    "title": "Entreprise citoyenne",
    "subtitle": "A multi-disciplinary company at the service of the community"
  }
}
</i18n>
<script lang="ts" setup>

const { t } = useI18n({
  useScope: 'local'
});

useServerSeoMeta({
  title: t("title"),
  ogTitle: t("title"),
  description: t("subtitle"),
  ogDescription: t("subtitle"),
  ogImage: '~/public/logo.png',
  ogImageUrl: '~/public/logo.png',
  ogImageAlt: t("logoAlt"),
  robots:{
    notranslate: true,
  },
  ogType: 'website',
  twitterTitle: t("title"),
  twitterDescription: t("subtitle"),
  twitterImage: {
    alt: t("logoAlt"),
    url: '~/public/logo.svg',
  },
})

defineOgImageComponent({
  title: t("title"),
  description: t("subtitle"),
  headline: t("name"),
  alt: t("logoAlt"),
})
</script>
