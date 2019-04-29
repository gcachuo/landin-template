import * as Mustache from 'mustache';

export class Project {
    static locale = localStorage.getItem('locale') || 'es';

    static init() {
        const pathname = location.pathname.substr(1) || 'dashboard';
        const params = searchToObject(location.search);
        this.navigate(pathname, params);

        function searchToObject(search: string) {
            var pairs = search.substring(1).split("&"),
                obj = {},
                pair,
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
        const url = `/${page}.html`;
        $.get(url, params).done(async html => {
            const language = require(`../../locale/${page}.json`)[Project.locale];
            const output = Mustache.render(html, {language});
            $(".container").html(output);
        }).fail(data => {
            $(".container").html('Not Found.');
        });
    }
}