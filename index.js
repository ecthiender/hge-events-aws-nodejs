// Lambda which just echoes back the event data

exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'hello world'
  }
    callback(null, response);
};
