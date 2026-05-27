function index(request, response) {
    response.json({
        message:"Lista"
    });
};

function show(request, response) {
    const id = request.params.id;

    response.json({
        message: `Dettaglio del post ${id}`
    });
}

export {index, show};