$(function () {
    Project.init();
});

export class Project {
    static init() {
        console.log(location);
        const pathname = location.pathname;
        const search = location.search;
    }
}