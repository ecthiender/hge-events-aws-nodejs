# AWS lambda

## response

Docs says you can return strings in callbacks: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html#nodejs-prog-model-handler-callback

Put that code. Click Test. Correct results come up.

Execute outside with an actual curl. 500 error.

Turns out response has to be object with statusCode, and body field. body is
string.

## request data
docs says event is the actual request data.

In test mode: console.log(event) shows actual request data. Code works.

In real: Code doesn't work.

Turns out. event is a big object:
```
{"resource":"/hasura-events-demo-echo-nodejs","path":"/hasura-events-demo-echo-nodejs","httpMethod":"POST","headers":{"accept":"*/*","content-type":"application/json","Host":"pe7ccxs90c.execute-api.us-east-1.amazonaws.com","User-Agent":"curl/7.61.0","X-Amzn-Trace-Id":"Root=1-5b892066-76cf02a10752b947c4156bb8","X-Forwarded-For":"116.75.89.70","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"queryStringParameters":null,"pathParameters":null,"stageVariables":null,"requestContext":{"resourceId":"a3hg5k","resourcePath":"/hasura-events-demo-echo-nodejs","httpMethod":"POST","extendedRequestId":"MfH_-Ge4IAMFdIQ=","requestTime":"31/Aug/2018:11:03:02 +0000","path":"/default/hasura-events-demo-echo-nodejs","accountId":"278348662807","protocol":"HTTP/1.1","stage":"default","requestTimeEpoch":1535713382268,"requestId":"6dc61bc3-ad0d-11e8-83ce-c525c8c8a2a9","identity":{"cognitoIdentityPoolId":null,"accountId":null,"cognitoIdentityId":null,"caller":null,"sourceIp":"116.75.89.70","accessKey":null,"cognitoAuthenticationType":null,"cognitoAuthenticationProvider":null,"userArn":null,"userAgent":"curl/7.61.0","user":null},"apiId":"pe7ccxs90c"},"body":"{\"op\": \"INSERT\", \"data\": {\"id\": 1, \"note\": \"first note\"}, \"table\": \"notes\", \"schema\": \"public\"}","isBase64Encoded":false}
```

event.body is the actual request data.
