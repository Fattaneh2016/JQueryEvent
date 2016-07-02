






function init() {
    document.getElementById('mybutton').addEventListener('click', myfunction);
    $('#mybutton').on('click', myfunction);
}

function myfunction() {
    alert('hi there');
}