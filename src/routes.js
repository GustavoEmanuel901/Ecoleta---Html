const express = require("express")
const routes = express.Router()
const db = require('./database/connection')


routes.get("/", (req, res) =>{
    return res.render("index.html")
})
 
routes.get("/create-point", (req, res) =>{

    return res.render("create-point.html")
})
 
routes.post("/savepoint", (req, res) => {

    const query = `
        insert into places (
            "name", 
            "image",
            "address",
            "address2",
            "state",
            "city",
            "items") values ($1,$2,$3,$4,$5,$6,$7);`

    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if (err){
            console.log(err)
            return res.send("Erro no cadastro")
        }
        return res.render("create-point.html", {saved: true})
    }

    //console.log(values)
    db.query(query, values, afterInsertData)

})

routes.get("/search-results", (req, res) =>{

    const search = req.query.search

    if (search == ""){
        return res.render("search-results.html", {total: 0})
    }
 
    db.query(`select * from places where city like '%${search}%'`, (err, rows) =>{
       if (err) return console.log(err)
 
       const total = rows.rows.length
 
       return res.render("search-results.html", {places: rows.rows, total})
    })
 })

 module.exports = routes