module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name:{
            notEmpty: true,
            type: Sequelize.STRING
        },
        email:{
            notEmpty: true,
            validate:{
                isEmail: true
            },
            type: Sequelize.STRING
        },
        username:{
            notEmpty: true,
            type: Sequelize.STRING
        }
    })
    return User
}