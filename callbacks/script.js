//callback

// function fetchData(callback){
//     setTimeout(()=>{
//         console.log("Data fetched");
//         callback("here is your data");
//     },2000);
// }

// function xyz(){
//     console.log("another function");
// }

// fetchData(xyz);



function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback("Here's your data!");
    }, 2000);
}

function processData(data) {
    console.log("Processing: " + data);
}

fetchData(processData);


//drawbacks of callback -> callback hell ---> when multiple callbacks are nested the code become hard to read and debug

function fetchUserData(callback) {
    setTimeout(() => {
        console.log("Fetched user data");
        callback({ userId: 1, username: "JohnDoe" });
    }, 1000);
}

function processUserData(user, callback) {
    setTimeout(() => {
        console.log(`Processing data for user: ${user.username}`);
        callback({ userId: user.userId, processedData: "Processed Data for JohnDoe" });
    }, 1000);
}

function saveProcessedData(processedData, callback) {
    setTimeout(() => {
        console.log(`Saving data: ${processedData.processedData}`);
        callback(true);
    }, 1000);
}

function sendConfirmationEmail(saved, callback) {
    setTimeout(() => {
        if (saved) {
            console.log("Confirmation email sent to user.");
            callback(true);
        } else {
            callback(false);
        }
    }, 1000);
}

// Callback Hell
fetchUserData((user) => {
    processUserData(user, (processedData) => {
        saveProcessedData(processedData, (saved) => {
            if (saved) {
                sendConfirmationEmail(saved, (emailSent) => {
                    if (emailSent) {
                        console.log("All tasks completed successfully!");
                    } else {
                        console.error("Failed to send confirmation email.");
                    }
                });
            } else {
                console.error("Failed to save data.");
            }
        });
    });
});

