const fs = require("fs");

// 1. Write a file
fs.writeFile("example.txt", "Hello, this is a test file!", (err) => {
    if (err) {
        return console.error("Error writing file:", err);
    }
    console.log("File written successfully!");

    // 2. Read the file
    fs.readFile("example.txt", "utf8", (err, data) => {
        if (err) {
            return console.error("Error reading file:", err);
        }
        console.log("File contents:", data);

        // 3. Append to the file
        fs.appendFile("example.txt", "\nAppending some extra text.", (err) => {
            if (err) {
                return console.error("Error appending file:", err);
            }
            console.log("Data appended successfully!");

            // Read the file again to display updated content
            fs.readFile("example.txt", "utf8", (err, updatedData) => {
                if (err) {
                    return console.error("Error reading updated file:", err);
                }
                console.log("Updated file contents:", updatedData);

                // 4. Rename the file
                fs.rename("example.txt", "renamed_example.txt", (err) => {
                    if (err) {
                        return console.error("Error renaming file:", err);
                    }
                    console.log("File renamed successfully!");

                    // 5. Delete the file
                    fs.unlink("read.txt", (err) => {
                        if (err) {
                            return console.error("Error deleting file:", err);
                        }
                        console.log("File deleted successfully!");
                    });
                });
            });
        });
    });
});
