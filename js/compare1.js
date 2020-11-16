let person1 = {
    firstname: '',
    height: 0,
    sex: '',

}

let person2 = {
    firstname: '',
    height: 0,
    sex: '',

}

document.getElementById('btn').addEventListener('click', function () {
    person1.firstname = document.getElementById('firstname1').value;
    person2.firstname = document.getElementById('firstname2').value;
    person1.height = document.getElementById('height1').value;
    person2.height = document.getElementById('height2').value;
    person1.sex = document.getElementById('women1').checked ? 'w' : 'm';
    person2.sex = document.getElementById('women2').checked ? 'w' : 'm';
    console.log(person1)
    console.log(person2)
})