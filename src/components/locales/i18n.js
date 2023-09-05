import { createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'es',
    messages: {
        en: {
            "category": 'category',
            "contact": 'turororial',
            "greet": 'Hello, {user}'
        },
        es: {
            "category": 'Categoria',
            "contact": 'FORM DE CONTACTO',
            "greet": 'Hola, {user}'
        }
    }
})

export default i18n;