import { generateMetaInfo } from '~/plugins/head-meta';

// import 'moment/locale/ru';
// import 'moment/locale/az';

export default function({ app, route, store }, inject) {
    // generate meta tags for seo
    inject('headMeta', ({title, description, image}, product = false) => {
        let locale = app.i18n.locale;
        let path = app.i18n.locales
            .reduce((obj, l) => ({
                ...obj, [l.code]: app.localePath(route.fullPath, l.code)
                    .split('?')[0].replace(/\/$/, '')
            }), {});
        return generateMetaInfo({title, description, image, path, locale, product});
    });
}
