function fetchGithubInformation(event) {

    var usernames = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="/workspace/bootstrap-resume2/06-moving_the_code_into_its_own_script/assets/css/loader.gif" alt="loading..." />
        </div>`);

}