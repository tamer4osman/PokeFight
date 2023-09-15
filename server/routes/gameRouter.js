// import express from 'express';
// import router from express.Router();
// import Game from '../schemas/gameSchema.js';

// // Save game result
// router.post('/save', async (req, res) => {
//     try {
//       const { winner, loser, turns } = req.body;
//       const game = new Game({ winner, loser, turns });
//       await game.save();
//       res.status(201).json({ message: 'Game result saved successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
//   // Get leaderboard
//   router.get('/leaderboard', async (req, res) => {
//     try {
//       const leaderboard = await Game.find().sort({ turns: 1 }).limit(10); // Adjust the query as needed
//       res.status(200).json(leaderboard);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
// export default router;