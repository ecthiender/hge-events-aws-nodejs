exports.handler = (event, context, callback) => {
    // TODO implement
    let request = JSON.parse(event.body);
    let response = {
        statusCode: 200,
        body: JSON.stringify('cannot parse hasura event')
    };

    if (request.table === 'notes' && request.op === 'INSERT') {
        response.body = `New note ${request.data.id} inserted, with data: ${request.data.note}`;
    }
    else if (request.table === 'notes' && request.op === 'UPDATE') {
        response.body = `Note ${request.data.id} updated, with data: ${request.data.note}`;
    }
    else if (request.table === 'notes' && request.op === 'DELETE') {
        response.body = `Note ${request.data.id} deleted, with data: ${request.data.note}`;
    }

    callback(null, response);
};
