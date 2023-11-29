class Auditorium {
    constructor(number, seats, faculty) {
        this.number = number;
        this.seats = seats;
        this.faculty = faculty;
    }
}
class Group {
    constructor(number, students, faculty) {
        this.number = number;
        this.students = students;
        this.faculty = faculty;
    }
}

let auditoriums = [
    new Auditorium('11', 15, 'OOП'),
    new Auditorium('13', 18, 'Математика'),
    new Auditorium('14', 12, 'JavaScript'),
    new Auditorium('1', 1, 'Я'),
    new Auditorium('1', 1, 'Ч'),
    new Auditorium('1', 1, 'А'),
    new Auditorium('1', 1, 'Д')
];

function displayAllAuditoriums() {
    document.write('Все аудитории: ' + '<br>');
    auditoriums.forEach(auditorium => {
        document.write('Номер: ' + auditorium.number + ', Места: ' + auditorium.seats + ', Факультет:' + auditorium.faculty + '<br>');
    });
}
function displayAuditoriumsByFaculty(faculty) {
    document.write('Аудитории для факультета ' + faculty + ': ' + '<br>');
    const filteredAuditoriums = auditoriums.filter(auditorium => auditorium.faculty === faculty);
    filteredAuditoriums.forEach(auditorium => {
        document.write('Номер: ' + auditorium.number + 'Места: ' + auditorium.seats + '<br>');
    });
}
function displayAuditoriumsForGroup(group) {
    document.write('Аудитории для группы ' + group.number + ' (' + group.faculty + '): ' + '<br>');
    const suitableAuditoriums = auditoriums.filter(auditorium => auditorium.faculty === group.faculty && auditorium.seats >= group.students);
    suitableAuditoriums.forEach(auditorium => {
        document.write('Номер: ' + auditorium.number + ', Места: ' + auditorium.seats + '<br>');
    });
}
function sortAuditoriumsBySeats() {
    const sortedAuditoriums = [...auditoriums].sort((a, b) => a.seats - b.seats);
    document.write('Аудитории отсортированы по количеству мест: ' + '<br>');
    sortedAuditoriums.forEach(auditorium => {
        document.write('Номер: ' + auditorium.number + ', Места:' + auditorium.seats + '<br>');
    });
}
function sortAuditoriumsByFaculty() {
    const sortedAuditoriums = [...auditoriums].sort((a, b) => a.faculty.localeCompare(b.faculty));
    document.write('Аудитории отсортированы по факультету: ' + '<br>');
    sortedAuditoriums.forEach(auditorium => {
        document.write('Факультет: ' + auditorium.faculty + ', Места:' + auditorium.seats + '<br>');
    });
}

displayAllAuditoriums();
displayAuditoriumsByFaculty('ООП');
displayAuditoriumsForGroup(new Group('Группа 1', 14, 'Математика'));
sortAuditoriumsBySeats();
sortAuditoriumsByFaculty();
