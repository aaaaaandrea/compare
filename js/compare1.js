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

function percent() {
    if (person1.height < person2.height) {
        document.getElementById('person1').style.width = (person1.height * 100) / person2.height + '%';
    } else if (person1.height > person2.height) {
        document.getElementById('person2').style.width = (person2.height * 100) / person1.height + '%';
    } else if (person1.height == person2.height) {
        document.getElementById('person1').style.width = '100%';
    document.getElementById('person2').style.width = '100%';
    }
}

document.getElementById('btn').addEventListener('click', function () {
    document.getElementById('person1').style.width = '100%';
    document.getElementById('person2').style.width = '100%';
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
    if (person1.sex == "m") {
        document.getElementById('person1').src = 'img/man.png';
    } else {
        document.getElementById('person1').src = 'img/woman.png';
    }

    if (person2.sex == "m") {
        document.getElementById('person2').src = 'img/man.png';
    } else {
        document.getElementById('person2').src = 'img/woman.png';
    }
    percent()
})