//a sequence of asynchronous tasks, such as fetching user data, validating it, saving it to a database, and sending a confirmation email.

function fetchUser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched user data");
        callback(null, { userId: userId, name: "John Doe" });
    }, 1000);
}

function validateUser(user, callback) {
    setTimeout(() => {
        if (user.name) {
            console.log("User validated");
            callback(null, user);
        } else {
            callback("Validation failed");
        }
    }, 1000);
}

function saveToDatabase(user, callback) {
    setTimeout(() => {
        console.log("User saved to database");
        callback(null, { ...user, databaseId: 123 });
    }, 1000);
}

function sendEmail(user, callback) {
    setTimeout(() => {
        console.log("Confirmation email sent to " + user.name);
        callback(null, "Email sent");
    }, 1000);
}

// Callback Hell in Action
fetchUser(1, (err, user) => {
    if (err) {
        console.error(err);
        return;
    }
    validateUser(user, (err, validatedUser) => {
        if (err) {
            console.error(err);
            return;
        }
        saveToDatabase(validatedUser, (err, savedUser) => {
            if (err) {
                console.error(err);
                return;
            }
            sendEmail(savedUser, (err, emailStatus) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("Process complete:", emailStatus);
            });
        });
    });
});
