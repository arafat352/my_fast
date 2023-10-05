let id = 0;

function addStudent(){
    id += 1;
    let name = document.getElementById('name').value;
    let classRoll = document.getElementById('classRoll').value;
    let boardRoll = document.getElementById('boardRoll').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;

    document.getElementById('studentList').innerHTML += "<tr><td>"+id+"</td><td>"+name+"</td><td>"+classRoll+"</td><td>"+boardRoll+"</td><td>"+phone+"</td><td>"+ address +"</td>";
}
