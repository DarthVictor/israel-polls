const fs = require("fs");
const os = require("os");

const csv = fs.readFileSync("polls_23.csv", { encoding: "utf-8" });

const data = csv

    .split(os.EOL)
    .filter(Boolean)
    .map((row) => row.split(","));

const fieldNames = {
    "סמל ועדה": "committeeId",
    "שם ישוב": "settlementName",
    "סמל ישוב": "settlementId",
    בזב: "total",
    מצביעים: "voters",
    פסולים: "invalid",
    כשרים: "valid",
};
const idField = "settlementId";

const result = {};
for (let i = 1; i < data.length; i += 1) {
    let row = { results: {} };

    for (let j = 0; j < data[i].length; j += 1) {
        const rawFieldName = data[0][j];
        const translatedName = fieldNames[rawFieldName];
        const val =
            translatedName === "settlementName"
                ? data[i][j]
                : Number(data[i][j]);
        if (translatedName) {
            row[translatedName] = val;
        } else {
            row.results[rawFieldName] = val;
        }
    }
    result[row[idField]] = row;
}

fs.writeFileSync("polls_23.js", JSON.stringify(result));
