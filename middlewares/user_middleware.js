function firstMiddleware(req, res, next) {
    const datenow = `${Date.now()} + ${req.ip} + ${req.url}`;
    console.log('I am the first middleware ' + datenow);
    req.datenow = datenow; // Store datenow in the req object
    next();
}

function secondMiddleware(req, res, next) {
    console.log('I am the second middleware');
    next();
}

module.exports = {
    firstMiddleware,
    secondMiddleware
};
