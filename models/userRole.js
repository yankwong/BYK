//TODO: set orgID to be a foreign key to model Organization
module.exports = (sequelize, type) => {
    let userRole =  sequelize.define('userRole', {
        id: { type: type.INTEGER, autoIncrement: true, primaryKey: true },
        userRoleName: { type: type.STRING, allowNull: false }
    });

    userRole.associate = function(model) {
        userRole.hasMany(model.user);
    }

    return userRole;
}