const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        classroom_id: { type: DataTypes.STRING, allowNull: false },
        room_number: { type: DataTypes.STRING, allowNull: false },
        building: { type: DataTypes.STRING, allowNull: false },
        capacity: { type: DataTypes.STRING, allowNull: false },
        has_projector: { type: DataTypes.STRING, allowNull: false },
        class_type: { type: DataTypes.STRING, allowNull: false },
       
    };
    
    const options = {
        defaultScope: {
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            withHash: { attributes: {} }
        }
    };
    
    return sequelize.define('User', attributes, options);
}