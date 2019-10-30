

// module.exports = function (sequelize, DataTypes) {
//     var questions = sequelize.define("questions", {
//         question_description: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         question_description: {
//             type: DataTypes.STRING,
//             allowNull: true
//           },
//           question_type: {
//             type: DataTypes.STRING,
//             allowNull: true
//           }
//         },{
//           classMethods: {
//             associate: function(models) {
//               Question.hasMany(models.Option, {
//                 foreignKey: {
//                   name: 'question_id',
//                   allowNull: false
//                 }
//               }),
//               Question.belongsToMany(models.Task, {
//                   through: {
//                       model: models.TaskQuestion
//                   },
//                   foreignKey: 'question_id'
//               })
//             }
//         }
//     });
//     return questions
// };