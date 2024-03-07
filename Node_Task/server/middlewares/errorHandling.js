export const errorHandling = (err, req, res, next) => {
    console.log(err)
    return res.status(err.statusCode).json({
        msg: err.message ?? "Something went wrong!",
        isSuccess: false,
    })
};
