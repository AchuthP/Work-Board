
nameController = {
    name: (req, res ,next) => {
        let name = req.params.name;
        res.render('demo', { title: "title"});
    },
    // get about view
    getAbout: (req, res, next) => {
        console.log("function called")
        res.render('about', { title: "title"});
    },
    // get tpost view
    getTpost: (req,res,next) => {
        res.render('tpost', {title:"title"})
    },
    // get login view
    getLogin: (req,res,next) => {
        res.render('login', {title:"title"})
    },
    getSignup: (req,res,next) => {
        res.render('signup', {title:"title"})
    }
} 

module.exports = nameController;