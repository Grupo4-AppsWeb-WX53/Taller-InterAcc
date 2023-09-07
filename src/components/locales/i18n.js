import { createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'es',
    messages: {
        en: {
            "contact": 'turororial',
        },
        es: {
            "contact": 'FORM DE CONTACTO',
        }
    }
})

export default i18n;