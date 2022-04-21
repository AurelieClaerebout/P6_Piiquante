const jwt = require("jsonwebtoken");
const Sauce = require("../models/sauce");


module.exports = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
  .then((sauce) => {
      console.log(req.params.id)
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    const userId = decodedToken.userId;
    if (sauce.userId !== userId) {
      return res.status(401).json({error: "Requête non autorisée"});
    } else {
      next();
    }
  })
  .catch (error => res.status(401).json({error: 'Sauce non trouvée'}))
};
