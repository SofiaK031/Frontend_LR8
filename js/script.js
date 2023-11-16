document.addEventListener("DOMContentLoaded", () => {

    let name = prompt("Ваше ім'я:");

    document.body.innerHTML += "<div id='content'></div>"
    //Контейнер даних користувача
    let mainContent = document.getElementById("content");
    mainContent.innerHTML += "<div id='title'>Користувач VS комп'ютер</div>";
    mainContent.innerHTML += "<div id='user'></div>";
    mainContent.innerHTML += "<div id='butt'></div>";
    mainContent.innerHTML += "<div id='computer'></div>";

    // Валідація CSS
    document.body.innerHTML += "<p id='validation'><a href='http://jigsaw.w3.org/css-validator/check/referer'><img style='border:0;width:88px;height:31px' src='http://jigsaw.w3.org/css-validator/images/vcss-blue' alt='Правильний CSS!'/></a></p>";

    //Контейнер user
    let userBox = document.getElementById("user");
    userBox.innerHTML += "<div id='user-name'>User</div>";
    let userName = document.getElementById("user-name");
    userName.innerHTML = name;
    if(!name) {
        name = "User";
        document.getElementById("user-name").innerHTML = name;
    }
    userBox.innerHTML += "<input readonly type='number' id='user-number'>";
    // Рахунок
    userBox.innerHTML += "<div id='count1'></div>";

    //Контейнер butt
    let butt = document.getElementById("butt");
    butt.innerHTML += "<button id = 'button1'>Згенерувати</button>";
    butt.innerHTML += "<div id = 'message'></div>";

    //Контейнер computer
    let computerBox = document.getElementById("computer");
    computerBox.innerHTML += "<div id='comp-name'></div>";
    let computerName = document.getElementById("comp-name");
    computerName.innerText = "Computer";
    computerBox.innerHTML += "<input readonly type='number' id='computer-number'>";
    // Рахунок
    computerBox.innerHTML += "<div id='count2'></div>";

    // Результати
    let computerNumber = document.getElementById("computer-number");
    let userNum = document.getElementById("user-number");
    let answer1 = document.getElementById("count1");    // лічильник користувача
    let userCount = 0;
    answer1.innerHTML = userCount;
    let answer2 = document.getElementById("count2");    // лічильник комп'ютера
    let computerCount = 0;
    answer2.innerHTML = computerCount;

    button1.addEventListener("click", (event) => {
        //Валідація
        function randomNumber(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            if (rand === '-0') {
                Math.abs(rand);
            }
            return Math.round(rand);
        }
        userNum.value = randomNumber(0, 20);
        computerNumber.value = randomNumber(0, 20);
        if (document.getElementById("user-number").value > document.getElementById("computer-number").value) {
            userCount++;
            answer1.innerHTML = userCount;
        }
        else if (document.getElementById("user-number").value < document.getElementById("computer-number").value){
            computerCount++;
            answer2.innerHTML = computerCount;
        }
        else if (document.getElementById("user-number").value === document.getElementById("computer-number").value) {
            alert("Значення однакові!");
        }
        if (userCount === 3 && computerCount < 3) {
            document.getElementById("message").innerHTML = "Гру закінчено! Ви виграли!";
            document.getElementById("button1").disabled = true;
        }
        else if (computerCount === 3 && userCount < 3) {
            document.getElementById("message").innerHTML = "Гру закінчено! Ви програли!";
            document.getElementById("button1").disabled = true;
        }
    });

});
