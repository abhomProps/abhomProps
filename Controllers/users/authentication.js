const register = async (req, res) => {
    res.status(200).json({msg: "your registration is successfull"})
}

const login = async (req, res) => {
    res.status(200).json({msg: "your login attempt is successfull"})
}

module.exports = {
    register,
    login
}