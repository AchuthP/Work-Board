
nameController = {
    name: (req, res ,next) => {
        let name = req.params.name;
        res.render('demo', { name: name, address: 'Kothanur' });
    }
}

module.exports = nameController;