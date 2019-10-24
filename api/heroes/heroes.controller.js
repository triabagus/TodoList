var Heros = require('./heroes.doa');

// create Hero
exports.createHero = function (req, res, next) {
    var hero = {
        icon: req.body.icon,
        sender: req.body.sender,
        title: req.body.title,
        message: req.body.message
    }

    Heros.create(hero, function (err, hero) {

        if (err) {
            res.json({
                error: err
            });
        }

        // res.json({
        //     notification: "Hero created succesfully"
        // });
        res.redirect('/api/get');

    });
}

// get Heros
exports.getHeros = function (req, res, next) {
    Heros.get({}, function (err, heros) {

        if (err) {
            res.json({
                error: err
            });
        }

        // res.json({
        //     heros: heros
        // });

        res.render('index', {
            heros: heros
        });
    });
}

// get Hero
exports.getHero = function (req, res, next) {
    Heros.get({
        icon: req.params.icon
    }, function (err, heros) {

        if (err) {
            res.json({
                error: res
            });
        }

        res.json({
            heros: heros
        });
    });
}

// update Hero
exports.updateHero = function (req, res, next) {
    var hero = {
        icon: req.body.icon,
        sender: req.body.sender,
        title: req.body.title,
        message: req.body.message
    }

    Heros.update({
        _id: req.params.id
    }, hero, function (err, hero) {

        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            notification: "Hero update successfully"
        });
    });
}

// delete Hero
exports.removeHero = function (req, res, next) {
    Heros.delete({
        _id: req.params.id
    }, function (err, hero) {

        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            notification: "Hero delete successfully"
        });
    });
}

// delete many
exports.deleteHero = function (req, res, next) {
    var dataBody = req.body;
    var jsonData = JSON.stringify(dataBody);
    dataBody = jsonData.replace(/:|"|{|}|/g, '');

    var arr = [];
    arr = dataBody.split(",");

    Heros.deleteMany({
        _id: {
            '$in': arr
        }
    }, function (err, hero) {

        if (err) {
            res.json({
                error: err
            });
        }

        // res.json({
        //     notification: "Hero delete successfully"
        // });


    });

    res.redirect('/api/get');
    res.send({
        status: true,
        url: "/api/get"
    });

}