const fs = require("fs");
const os = require("os");

const CONVERT_PATHS = [
    ["polls_21.csv", "polls_21.json"],
    ["polls_22.csv", "polls_22.json"],
    ["polls_23.csv", "polls_23.json"],
    ["polls_25.csv", "polls_25.json"],
];

for (const [readPath, writePath] of CONVERT_PATHS) {
    const csv = fs.readFileSync(readPath, { encoding: "utf-8" });

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

    fs.writeFileSync(writePath, JSON.stringify(result));
}
