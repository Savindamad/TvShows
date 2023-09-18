import { createI18n } from "vue-i18n";
import { en } from "@/i18n/en";
import { nl } from "@/i18n/nl";

export default createI18n({
  locale: "en",
  legacy: false,
  globalInjection: true,
  messages: {
    en: en,
    nl: nl,
  },
});
