module.exports = function (restClient) {
    var module = {};
    
    module.create = function (customerData) {
        return restClient.post('/customers', customerData);
    }

    module.token = function (loginData) {
        
        return restClient.consumerToken(loginData)
    }    

    module.me = function (requestToken) {
        
        return restClient.get('/customers/me', requestToken)
    }        
    return module;
}
