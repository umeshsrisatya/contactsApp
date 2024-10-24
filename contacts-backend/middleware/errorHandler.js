function errorHandler(err, req, res, next) {
    const statusCode = req.statusCode || 500;
    res.json({ message: err.message, stackTrace: err.stack });
}
module.exports = errorHandler;
