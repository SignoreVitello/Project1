const myNavigator = document.querySelector("#navigator");

const login = () => {
    const username = document.querySelector("#input-username").value;
    const password = document.querySelector("#input-password").value;

    if (username === "" && password === "") {
        // call the navigator to move to the new page
        myNavigator.resetToPage("home.html");
    } else {
        ons.notification.alert("Wrong username/password combination");
    }
};

const goToRegister = () => {
    myNavigator.pushPage("page-register.html", { data: { title: "Register" } });
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
