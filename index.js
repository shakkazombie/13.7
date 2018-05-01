var fs = require("fs");
var StatMode = require("stat-mode");
var colors = require("colors");

fs.stat("./cat.jpg", function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile("./text.txt", "utf-8", function(err, data) {
    console.log("zapisz przed".blue);
    console.log(data);
    fs.appendFile("./text.txt", "\nLorem ipsum dfakfalfdadalk", function(err) {
        if (err) throw err;
        console.log("Zapisano!".blue);
        fs.readFile("./text.txt", "utf-8", function(err, data) {
            console.log("zapisz po".red);
            console.log(data);
        });
    });
});

fs.readdir("./", "utf-8", function(err, files) {
    fs.writeFile("./tekst1.txt", files, "utf-8", function(err) {
        if (err) throw err;
        console.log("Zapisano");
        console.log(files);
    });
});