const getAll = (request, response) => {
    return response.status(200).json( { message: 'controller ok!' } );
};

module.exports = {
    getAll
};