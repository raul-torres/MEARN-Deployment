const { Pet } = require('../models/pet.models');

module.exports.index = (request, response) => {
    response.json({
        mes : 'Hello World'
    });
}

module.exports.createPet = (request, response) => {
    const { 
        name, 
        type, 
        description,
        skill1,
        skill2,
        skill3,
    } = request.body;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
    
}

module.exports.getAllPets = (request, response) => {
    Pet.find().collation({locale:'en'}).sort({type:1}).exec()
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

module.exports.getOnePet = (request, response) => {
    Pet.findOne({_id: request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.findByIdAndDelete({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators : true})
        .then(updatePet => response.json(this.updatePet))
        .catch(err => response.json(err))
}