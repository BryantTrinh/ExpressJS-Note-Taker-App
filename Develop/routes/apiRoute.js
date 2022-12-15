// //The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// create const for router and for store

const router = require('express').Router();
const store = require('../db/store');

// use GET method & req/res with the notes from database and from store in db folder

// get notes -> receive notes then return the notes -> catch error(500)

router.get('/notes', (req, res) => {
	store
		.getNotes()
		.then((notes) => {
			return res.json(notes);
		})
		.catch((err) => res.status(500).json(err));
});

// POST to notes, use req res, .addNotes using with req.body
// after adding to body of /notes, res to send json containing note
// end with catch error

router.post('/notes', (req, res) => {
	store
		.addNote(req.body)
		.then((note) => res.json(note))
		.catch((err) => res.status(500).json(err));
});

// For bonus, DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

router.delete('/notes/:id', (req, res, next) => {
	store
		.removeNote(req.params.id)
		.then(() => res.json({ ok: true }))
		.catch((err) => res.status(500).json(err));
});

module.exports = router;
