const Blog = require('../models/Blog');

class SiteController {
    index(req, res, next) {
        Blog.find({})
            .then((blog) => res.render('home', { blog }))
            .catch(next);
        // res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
