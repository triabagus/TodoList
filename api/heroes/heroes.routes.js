var Heros = require('./heroes.controller');

module.exports = function (router) {
    router.post('/create', Heros.createHero);
    router.get('/get', Heros.getHeros);
    router.get('/get/:icon', Heros.getHero);
    router.put('/update/:id', Heros.updateHero);
    router.delete('/delete/:id', Heros.removeHero);
}