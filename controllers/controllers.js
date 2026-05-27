function index(request, response) {
    response.json({
        message: "Lista"
    });
};

function show(request, response) {
    const id = request.params.id;

    response.json({
        message: `Dettaglio del post ${id}`
    });
}

function create(request, response) {
    response.json({
        message: "Creazione di un nuovo post"
    });
}

function update(request, response) {
    const id = request.params.id;

    response.json({
        message: `Aggiornamento del post ${id}`
    });
}

export { index, show, create, update };