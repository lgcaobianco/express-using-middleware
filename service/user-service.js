const users = [
    {
        "username": "lgcaobianco",
        "password": "123"
    },
    {
        "username": "gucaobianco",
        "password": "123456"
    }
]

const findUserByUsername = username => {
    return users.filter(user => user.username === username)[0];
}


const authenticate = user => {
    const userFound = findUserByUsername(user.username);
    return user.password === userFound.password;
}

const getToken = () => {
    const now = Date.now();
    const expirationDate = now + (1000 * 60);
    const token = {
        expirationDate: expirationDate
    }
    return Buffer.from(JSON.stringify(token)).toString('base64');
}

const isTokenExpired = (token) => {
    const now = Date.now();
    const decodedToken = JSON.parse(Buffer.from(token, 'base64'));
    return now > decodedToken.expirationDate;
}

module.exports ={
    authenticate,
    getToken,
    isTokenExpired
}