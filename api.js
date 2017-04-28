   exports.GetSets = function (user, callback) {
        request.get({
            uri: 'https://api.quizlet.com/2.0/users/' + user + '/sets?client_id=AwhQj4XNRx',

        },
            function (error, response, body) {
                if (error)
                    callback(error);
                else {
                    body = JSON.parse(body);
                    for (var x = 0; x < body.length; x++) {
                        if ((x + 1) == body.length) {
                            // last set
                            sets = sets + body[x].title;
                        } else {
                            sets = sets + body[x].title + ', ';
                        }
                        table[body[x].title] = body[x].id; //creating a hash table to store set names and IDs
                    }
                    console.log('Got sets');
                    exports.Sets = sets;

                }
            })
    }