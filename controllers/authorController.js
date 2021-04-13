const mongoose = require("mongoose")
// import author model
const Author = mongoose.model("Author")


// get all authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find()
    return res.send(authors)
  } catch (err) {
    res.status(400)
    return res.send("Database query failed")
} }


// find one author by their id
const getOneAuthor = async (req, res) => {
    try {
        const oneAuthor = await Author.findOne( {"authorId": req.params.id})
        if (oneAuthor === null) {   // no author found in database
            res.status(404)
            return res.send("Author not found")
        }
        return res.send(oneAuthor)  // author was found
    } catch (err) {     // error occurred
            res.status(400)
            return res.send("Database query failed")
    }
}

const addAuthor = async (req, res) => {
    const author = req.body
    try {
        const author = await Author.create(req.body);
        const authors = await Author.find()
        return res.send(authors)
    } catch (err) {     // error occurred
            res.status(400)
            return res.send("Database add failed")
    }
}
// remember to export the functions
module.exports = {
  getAllAuthors,
  getOneAuthor, 
  addAuthor
}





// // handle requests to add an author
// const addAuthor = (req, res) => {
//     // assemble a new author
//     newAuthor = req.body
//     // add to database
//     authors.push(newAuthor)
//     // return entire authors list to browser as a check that it worked
//     res.send(authors)
// }

// module.exports = {
//     getAllAuthors,
//     getAuthorByID, 
//     addAuthor
// }

