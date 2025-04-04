var homeEl = document.getElementById("homeEl");
var guestEl = document.getElementById("guestEl");

var pointsHome = 0;
var pointsGuest = 0;
function pointOneHome() {
    pointsHome ++;
    homeEl.textContent = pointsHome;
}
function pointTwoHome() {
    pointsHome += 2;
    homeEl.textContent = pointsHome;
}
function pointThreeHome() {
    pointsHome += 3;
    homeEl.textContent = pointsHome;
}
function pointOneGuest() {
    pointsGuest ++;
    guestEl.textContent = pointsGuest;
}
function pointTwoGuest() {
    pointsGuest += 2;
    guestEl.textContent = pointsGuest;
}
function pointThreeGuest() {
    pointsGuest += 3;
    guestEl.textContent = pointsGuest;
}
function reset() {
    pointsGuest = 0;
    pointsHome = 0;
    guestEl.textContent = pointsGuest;
    homeEl.textContent = pointsHome;
}