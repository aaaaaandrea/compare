
let person = [{
        firstname: '',
        height: 0,
        sex: '',
    },
    {
        firstname: '',
        height: 0,
        sex: '',
    }
]

function percent() {
    if (person[0].height < person[1].height) {
        document.getElementById('person1').style.width = (person[0].height * 100) / person[1].height + '%';
    } else if (person[0].height > person2.height) {
        document.getElementById('person2').style.width = (person[1].height * 100) / person[0].height + '%';
    } else if (person[0].height == person[1].height) {
        document.getElementById('person1').style.width = '100%';
        document.getElementById('person2').style.width = '100%';
    }
}

document.getElementById('btn').addEventListener('click', function () {
    for (i = 0; i < 2; i++) {
        console.log('a' + [i + 1])
        document.getElementById('person' + [i + 1]).style.width = '100%';
        person[i].firstname = document.getElementById('firstname' + (i + 1)).value;
        person[i].height = document.getElementById('height' + (i + 1)).value;
        person[i].sex = document.getElementById('women' + (i + 1)).checked ? 'w' : 'm';
        console.log(person)
        document.getElementById('nametag' + (i + 1)).innerText = person[i].firstname;
        if (person[i].sex == "m") {
            document.getElementById('person' + (i + 1)).src = 'img/man.png';
        } else {
            document.getElementById('person' + (i + 1)).src = 'img/woman.png';
        }
    }
    percent()
    
})