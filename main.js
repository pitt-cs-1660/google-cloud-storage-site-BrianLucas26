function sayOuch() {
    var shame = document.getElementById("shame");
    shame.style.display = "block";

    setTimeout(function () {
        shame.style.display = "none";
    }, 2000); // Hide the speech bubble after 2 seconds
}