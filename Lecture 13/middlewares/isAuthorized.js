const isAuthorized = (req, res, next) => {
    let token = req.headers.cookie

    if (!token || token != 123987) {
        return res.status(401).send("Kon Hai Bhai Tu")
    }
    next()
}

const isLoggedIn = (req, res, next) => {
        let login = true

        if (!login) {
            return res.status(401).send("Tu Phir Aagya")
        }
        next()
}


module.exports = {isAuthorized, isLoggedIn}