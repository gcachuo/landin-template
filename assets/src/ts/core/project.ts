import * as Mustache from 'mustache';

export class Project {
    static locale: string = localStorage.getItem('locale') || 'es';

    static init() {
        const pathname: string = location.pathname.substr(1) || 'dashboard';
        const params: object = searchToObject(location.search);
        this.navigate(pathname, params);

        function searchToObject(search: string) {
            const pairs = search.substring(1).split("&"),
                obj = {};
            let pair,
                i;

            for (i in pairs) {
                if (pairs[i] === "") continue;

                pair = pairs[i].split("=");
                obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }

            return obj;
        }
    }

    static navigate(page: string, params?: object) {
        const url: string = `/${page}.html`;
        $.get(url, params).done(async html => {
            const language: object = require(`../../locale/${page}.json`)[Project.locale];
            const output: string = Mustache.render(html, {language});
            $(".container").html(output);
        }).fail(() => {
            $(".container").html('Not Found.');
        });
    }
}