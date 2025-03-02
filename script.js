console.log("check");
document.addEventListener('DOMContentLoaded', function(event) {
    const datetEl = document.getElementById('current-date');
    const dataobj = new Date();
    datetEl.innerHTML = dataobj.toDateString();
});
