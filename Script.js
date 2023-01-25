'use strict'

const shit = document.querySelector(`.but`);
const user = {
    name: "Everos",
    age: 18,
    msg() {
        alert("Hello dear : " + this.name);
    }
};
shit.addEventListener("click", () => {
    user.msg.call(user);
    console.log("btn clicked")
});