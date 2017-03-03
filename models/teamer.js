// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.js");

// Creates a "event" model that matches up with DB
var Teams = sequelize.define("project", {
    team_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    creator: {
        type: Sequelize.INTEGER
    },
    project_name: {
        type: Sequelize.STRING
    },
    team_name: {
        type: Sequelize.STRING
    },
    users: {
        type: Sequelize.STRING
    },
    p_description: {
        type: Sequelize.TEXT
    },
    roles: {
        type: Sequelize.STRING
    },
    event_id: {
        type: Sequelize.INTEGER
    }
}, {
    classMethods: {
        associate: function (models) {
            Teams.belongsTo(Event, {
                as: "Event",
                foreignKey: "event_id"
            });
            Teams.belongsToMany(User, {
                through: userTeams
            });
        },
    },
}, {
    timestamps: false
});
console.log(Projects);
// Syncs with DB
Projects.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Projects;