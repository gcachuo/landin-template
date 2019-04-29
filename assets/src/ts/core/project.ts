export class Project {
    static init() {
        const pathname = location.pathname.substr(1) || 'dashboard';
        const params = this.searchToObject(location.search);
        this.navigate(pathname, params);
    }

    static navigate(page: string, params?: object) {
        const url = `/${page}.html`;
        $.get(url, params).done(html => {
            $(".container").html(html);
        }).fail(data => {
            $(".container").html('Not Found.');
        });
    }

    private static searchToObject(search: string) {
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