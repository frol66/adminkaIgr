// routes/games.js

const { sendAllGames, sendUpdateGames } = require("../controllers/games");
const { findGameById, deleteGame, getAllGames, updateGamesFile, checkIstitleInArray, updateGamesArray} = require("../middlewares/games");


const gamesRouter = require("express").Router(); // Создали роутер




gamesRouter.get("/games", getAllGames ,sendAllGames)
gamesRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGamesFile, sendUpdateGames);
gamesRouter.post("/games", getAllGames, checkIstitleInArray, updateGamesArray ,updateGamesFile, sendUpdateGames);

module.exports = gamesRouter;