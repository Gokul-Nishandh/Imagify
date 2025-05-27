import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login again." });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.userId = tokenDecode.id;
            console.log(req.userId) 
            next();
        } else {
            return res.json({ success: false, message: "Invalid Token. Login again." });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default userAuth;
