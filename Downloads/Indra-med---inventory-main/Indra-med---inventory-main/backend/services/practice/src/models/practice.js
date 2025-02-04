const { DataTypes } = require('sequelize');
const {sequelize}=require('../../../../config/sequelize');


//Define a hospital model
const Hospital= sequelize.define('Hospital',{
    hospital_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    hospital_name:{
        type: DataTypes.STRING(255),
        allowNull:false,
    },
    hospital_address:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    
},{ timestamps: true });

//Defining a model for practices

const Practice= sequelize.define('Practice',{
    practice_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    practice_name:{
        type: DataTypes.STRING(255),
        allowNull:false,
    },
    practice_address:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    hospital_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Hospital,  // Reference to the Hospital model
            key: 'hospital_id'  // Column being referenced in Hospital
          },
    }
},{ timestamps: true });

Hospital.hasMany(Practice,{foreignKey: 'hospital_id',sourceKey: 'hospital_id'});
Practice.belongsTo(Hospital,{foreignKey: 'hospital_id',targetKey:'hospital_id'});

sequelize.sync({ force: false })  // Synchronizing the model with the DB
  .then(() => {
    console.log("Practice and hospital tables created successfully.");
  })
  .catch(err => {
    console.error("Error creating table:", err);
  });

module.exports={Hospital,Practice};


  

