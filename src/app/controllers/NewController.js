class NewController {
    index(req, res) {
        res.send('day la new');
    }
    show(req, res) {
        res.send('New detail');
    }
}
module.exports = new NewController();
