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
        },
        password:{
            allowNull: false,
            type: Sequelize.STRING
        },
        last_login:{
            type: Sequelize.DATE
        },
        status:{
            type: Sequelize.ENUM('inactive', 'pending', 'active', 'block'),
            defaultValue: 'pending'
        }
    })
    return User
}