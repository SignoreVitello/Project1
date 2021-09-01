const myNavigator = document.querySelector("#navigator");

let displayUser = document.getElementById("username");
let activeUser = localStorage;

const loginUser = async (event) => {
    // window.onload(() => {
    event.preventDefault();
    const username = document.querySelector("#input-username").value;
    const password = document.querySelector("#input-password").value;

    const login = await fetch(
        // "https://eventio-express-backend-server.herokuapp.com/api/login",
        "http://localhost:5500/api/login",
        // "http://127.0.0.1:5500/api/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }
    );

    console.log(login);
    const loggedUser = await login.json();

    if (!login.ok && login.status !== 405) {
        ons.notification.alert("Wrong username/password combination");
    }
    if (!login.ok && login.status === 405) {
        ons.notification.alert("Login was not allowed for whatever reason...");
    } else {
        console.log(loggedUser);
        activeUser = loggedUser;
        console.log(activeUser);
        // document.getElementById("username").value.innerText =
        //     activeUser.username;
        console.log(displayUser);
        myNavigator.pushPage("splitter.html");
    }
    // });
};

const goToRegister = () => {
    myNavigator.pushPage("page-register.html");
};

const registerUser = async (event) => {
    event.preventDefault();
    const username = document.getElementById("create-username").value;
    const password = document.getElementById("create-password").value;

    console.log(username);
    console.log(password);

    // await fetch("http://localhost:5500/api/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });

    // return;

    try {
        const register = await fetch(
            // "https://eventio-express-backend-server.herokuapp.com/api/register",
            "http://localhost:5500/api/register",
            // "http://127.0.0.1:5500/api/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            }
        );
        const result = await register.json();
        // console.log(result);
        // console.log(register);
        // console.log(register.status);
        if (register.ok) {
            ons.notification.toast("Registration successful!", {
                timeout: 2000,
                animation: "fall",
            });
            myNavigator.popPage();
        } else {
            throw new Error(result.error);
        }
    } catch (err) {
        // console.log(err.message);
        ons.notification.alert(err.message);
    }

    // const register = await fetch(
    //     // "https://eventio-express-backend-server.herokuapp.com/api/register",
    //     "http://localhost:5500/api/register",
    //     // "http://127.0.0.1:5500/api/register",
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             username,
    //             password,
    //         }),
    //     }
    // )
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((res) => {
    //         if (res.code === "001") {
    //             ons.notification.alert("Error:" + res.error);
    //         }
    //         console.log(res);
    //         return;
    //     })
    //     // .then((error) => {
    //     //     console.log(error);
    //     //     if (error.code === 001) {
    //     //         ons.notification.alert("Error:", error.error);
    //     //     }
    //     // })
    //     .then(() => {
    //         ons.notification.toast("Registration successful!", {
    //             timeout: 2000,
    //             animation: "fall",
    //         });
    //     })
    //     .then(() => {
    //         myNavigator.popPage();
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         ons.notification.alert("Error:", error);
    //     });
};

// const openMenu = () => {
//     let menu = document.getElementById("menu");
//     menu.open();
// };

window.fn = {};

window.fn.open = function () {
    var menu = document.getElementById("menu");

    // console.log(document.querySelectorAll("#menu"));
    menu.open();
    console.log("md-menu pressed");
};

window.fn.load = function (page) {
    var content = document.getElementById("content");
    var menu = document.getElementById("menu");
    content.load(page).then(menu.close.bind(menu));
};

window.fn.logOut = function () {
    myNavigator.resetToPage("page-login.html");
    console.log(activeUser);
    activeUser.clear(); // zu behandeln!
    console.log(activeUser);
};
