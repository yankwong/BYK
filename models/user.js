//TODO: set orgID to be a foreign key to model Organization
module.exports = (sequelize, type) => {
    let user = sequelize.define('user', {
        id: { type: type.INTEGER, autoIncrement: true, primaryKey: true },
        email: { type: type.STRING, unique: true, allowNull: false },
        password: { type: type.STRING, allowNull: false },
        firstName: { type: type.STRING, allowNull: true },
        lastName: { type: type.STRING, allowNull: true },
        userName: { type: type.STRING, allowNull: false },
        orgID: { type: type.INTEGER, unique: true }    
    });

    user.associate = function(model) {
        user.belongsTo(model.userRole);
    }

    return user;
}