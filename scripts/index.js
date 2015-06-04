function main() {
    var app = {};
    pager.Href.hash = '#!/';
    pager.extendWithPage(app);
    ko.applyBindings(app);
    pager.start();
    // pager.activePage$().extend({notify: 'always'});
    window.m_site = app;
}

$(main);