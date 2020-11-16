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
    document.getElementById('nametag1').innerText = person1.firstname;
    document.getElementById('nametag2').innerText = person2.firstname;
    if (person1.sex == "m"){
        document.getElementById('person1').src = 'img/man.png';
    } else {
        document.getElementById('person1').src = 'img/woman.png';
    }

    if (person2.sex == "m"){
        document.getElementById('person2').src = 'img/man.png';
    } else {
        document.getElementById('person2').src = 'img/woman.png';
    }
})