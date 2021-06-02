const express = require("express");
const router = express.Router();
const programmingLanguages = require("../services/programmingLanguages");

router.get("/", async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (error) {
    console.error(`Error while getting programming languages`, error.message);
    next(error);
  }
});
router.post("/", async function(req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (error) {
    console.error(`Error while creating programming languages`, error.message);
    next(error);
  }
});
router.put("/:id", async function(req, res, next) {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (error) {
    console.error(`Error while updating programming languages`, error.message);
    next(error);
  }
});
router.delete("/:id", async function(req, res, next) {
  try {
    res.json(await programmingLanguages.remove(req.params.id));
  } catch (error) {
    console.error(`Error while deleting programming languages`, error.message);
    next(error);
  }
});

module.exports = router;
