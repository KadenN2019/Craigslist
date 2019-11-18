const router = require("express").Router()
const db = require('../db')

router.get("/", (req, res, next) => {
  const sql = `
  select id, name as ItemName1
  from craigslist.categories
  where parent_id = 1;
  `

  const sec2 =`
  select id, name as ItemName2
  from craigslist.categories
  where parent_id = 2;
  `

  db.query(sql, sec2, (err, results, fields) => {
    console.log(results)
    res.json(results)
  })
})

module.exports = router
