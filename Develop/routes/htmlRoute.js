// - Things we need to do GET /notes should return the notes.html file.
// - GET * should return the index.html file.

// we need to do a path and a router in order to use the route.
const path = require('path');
const router = require('express').Router();

// router.get the /notes path and the file. Use path.join dirname + notes.html path

router.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// We use * to make all other routes we have .. apiRoute to respond (res) with index.html

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

// module export this to use

module.exports = router;

