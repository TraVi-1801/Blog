class NewsController {
    index(req, res) {
        res.render('news');
    }
    show() {
        res.send('New Detail!');
    }
}

module.exports = new NewsController();
