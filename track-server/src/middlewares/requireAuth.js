  const jwt = require('jsonwebtoken');
  const mogoose = require('mongoose');
  const User = mogoose.model('User');

  module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // authorization == 'bearer jhdfkldshfdhflkhslk

    if(!authorization)
    {
      console.log(authorization);
        return res.status(401).send({ error : 'You must logged in 1.'});
    }
    
    const token = authorization.replace('Bearer ', '');

    jwt.verify(token, 'Your_Secret_Key', async (err, payload) => {
        if(err)
        {
            return res.status(401).send({ error: 'You must logged in 2'});
        }

        const {userId} = payload;

        const user = await User.findById(userId)
        req.user = user
        next();

    })


  }