const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffSet(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, release_year, github_rank
        FROM programming_languages LIMIT ?, ?`,
    [offset, config.listPerPage],
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return { data, meta };
}

async function create(programmingLanguage) {
  const result = await db.query(
    `INSERT INTO programming_languages
        (name, release_year, github_rank)
        VALUES
        (?, ?, ?)
        `,
    [
      programmingLanguage.name,
      programmingLanguage.release_year,
      programmingLanguage.github_rank,
    ],
  );
  let message = "Error in creating programming language";
  result.affectedRows
    ? (message = "Programming language added successfully")
    : { message };
}

async function update(id, programmingLanguage) {
  const result = await db.query(
    `UPDATE programming_languages SET name=?, release_year=?, github_rank=? WHERE id=?`,
    [
      programmingLanguage.name,
      programmingLanguage.release_year,
      programmingLanguage.github_rank,
    ],
  );
  let message = "Error in updating programming language";
  result.affectedRows
    ? (message = "Programming language updated successfully")
    : { message };
}
async function remove(id) {
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id=?`,
    [id],
  );
  let message = "Error in removing programming language";
  result.affectedRows
    ? (message = "Programming language removed successfully")
    : { message };
}

module.exports = { getMultiple, create, update, remove };
