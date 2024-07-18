const sql = require("./db.js");

// constructor
const Users = function(user) {
    this.user_id = user.user_id;
    this.user_email = user.user_email;
    this.user_pw = user.user_pw;
};

Users.findByEmail = (email, result) => {
    sql.query(`SELECT * FROM users WHERE username = '${email}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

module.exports = Users;