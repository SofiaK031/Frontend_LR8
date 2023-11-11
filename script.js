document.addEventListener("DOMContentLoaded", () => {

    let name = prompt("Ваше ім'я:");

	document.body.innerHTML += "<div id='content'></div>"
	//Контейнер даних користувача
	let mainContent = document.getElementById("content");
    mainContent.innerHTML += "<div id='title'>Користувач VS комп'ютер</div>";
	mainContent.innerHTML += "<div id='user'></div>";
    mainContent.innerHTML += "<div id='butt'></div>";
    mainContent.innerHTML += "<div id='computer'></div>";

    //Контейнер user
    let userBox = document.getElementById("user");
    userBox.innerHTML += "<div id='user-name'></div>";
    let userName = document.getElementById("user-name");
    userName.innerHTML = name;
	userBox.innerHTML += "<input type='number' id='user-number'>";
    // Введення числа
    let numberInput = document.getElementById("user-number");
    //numberInput.value = '5';
    // Рахунок
    userBox.innerHTML += "<div id='count1'></div>";

    //Контейнер butt
    let butt = document.getElementById("butt");
    butt.innerHTML += "<button id = 'button1'>Згенерувати</button>";


	//Контейнер computer
    let computerBox = document.getElementById("computer");
    computerBox.innerHTML += "<div id='comp-name'></div>";
    let computerName = document.getElementById("comp-name");
    computerName.innerText = "Computer";
	//userBox.innerHTML += "<input type='number' id='user-number'>";
    computerBox.innerHTML += "<input readonly type='number' id='computer-number'>";
    // Рахунок
	computerBox.innerHTML += "<div id='count2'></div>";

/*
	//Контейнер для кулі
	let ballContainer = document.getElementById("magic-ball");
	ballContainer.innerHTML += "<a href='#'><img id='ball' src = 'images/magic_ball.png' alt='The magic ball'></a>";
	ballContainer.innerHTML += "<div id='answer'></div>";
	//Куля
	let ball = document.getElementById("ball");*/
	//Відповідь
    let computerNumber = document.getElementById("computer-number");
    let userNum = document.getElementById("user-number");
    let answer1 = document.getElementById("count1");    // лічильник користувача
    let userCount = 0;
    answer1.innerText = userCount;
    let answer2 = document.getElementById("count2");    // лічильник комп'ютера
    let computerCount = 0;
    answer2.innerText = computerCount;
	//Адаптація сторінки
	//adaptability();

	butt.addEventListener("click", (event) => {
		//Валідація
		let num = numberInput.value;
        function randomNumber(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            if (rand === '-0') {
                Math.abs(rand);
            }
            return Math.round(rand);
        }
        //userNum.innerText = num;
        computerNumber.value = randomNumber(0, 50);
        //let newCompNum = computerNumber.value;
        if(document.getElementById("user-number").value == "") {
            alert('Ви не ввели число!');
            computerNumber.value = "";
			return;
        }
        //alert("Введіть нове значення");
        //document.getElementById("user-number").value === "";
		if (document.getElementById("user-number").value > document.getElementById("computer-number").value) {
            userCount++;
            answer1.innerText = userCount;
        }
        else if (document.getElementById("user-number").value < document.getElementById("computer-number").value){
            computerCount++;
            answer2.innerText = computerCount;
        }
        else if (document.getElementById("user-number").value === document.getElementById("computer-number").value) {
            alert("Значення однакові!");
        }

        if (userCount === 3 && computerCount < 3) {
            alert("Гру закінчено! Ви виграли!");
            computerNumber.value = "";
            userNum.value = "";
            answer1.innerText = "0";
            answer2.innerText = "0";
            return;
        }
        else if (computerCount === 3 && userCount < 3) {
            alert("Гру закінчено! Ви програли!");
            computerNumber.value = "";
            userNum.value = "";
            answer1.innerText = "0";
            answer2.innerText = "0";
            return;
        }
	});

	//Подія для адаптивності
	addEventListener("resize", (event) => {
		adaptability();
	});
		
	//Функція для адаптивності
	function adaptability() {
		let mainContentWidth = mainContent.getBoundingClientRect().width;
		let mainContentHeight = mainContent.getBoundingClientRect().height;
		
		if (mainContentWidth <= 1000) {
            document.getElementById("user").width = "25%";
            document.getElementById("butt").width = "20%";
            document.getElementById("computer").width = "25%";
            document.getElementById("user-name").style.fontSize = "20px";
            butt.style.fontSize = "18px";
            document.getElementById("comp-name").style.fontSize = "20px";
            document.getElementById("user-number").style.fontSize = "18px";
			document.getElementById("count1").style.fontSize = "20px";
            document.getElementById("count2").style.fontSize = "20px";
			mainContent.style.width = "50%";
            mainContent.style.height = "90%";
            document.getElementById("butt").height = "20%";
			document.getElementById("butt").width = "75%";
            document.getElementById("count1").width = "45%";
            document.getElementById("count1").height = "30%";
            document.getElementById("count2").width = "45%";
            document.getElementById("count2").height = "30%";
            document.getElementById("button1").style.fontSize = "20px";
		}
		if (mainContentWidth <= 800) {
            document.getElementById("title").style.fontSize = "20px";
            document.getElementById("user-name").style.fontSize = "20px";
            document.getElementById("user").width = "25%";
            document.getElementById("butt").width = "20%";
            document.getElementById("computer").width = "25%";
            document.getElementById("comp-name").style.fontSize = "20px";
            document.getElementById("user-number").style.fontSize = "18px";
			document.getElementById("count1").style.fontSize = "18px";
            document.getElementById("count2").style.fontSize = "18px";
			mainContent.style.width = "50%";
			mainContent.style.height = "90%";
            document.getElementById("butt").height = "20%";
			document.getElementById("butt").width = "75%";
            document.getElementById("count1").width = "45%";
            document.getElementById("count1").height = "25%";
            document.getElementById("count2").width = "45%";
            document.getElementById("count2").height = "25%";
            document.getElementById("butt").style.marginLeft = "10px";
            document.getElementById("button1").style.fontSize = "16px";
		}
		if (mainContentWidth <= 650) {
            document.getElementById("title").style.fontSize = "18px";
            document.getElementById("user-name").style.fontSize = "18px";
            document.getElementById("user").width = "25%";
            document.getElementById("butt").width = "20%";
            document.getElementById("computer").width = "25%";
            butt.style.fontSize = "15px";
            document.getElementById("comp-name").style.fontSize = "18px";
            document.getElementById("user-number").style.fontSize = "17px";
			document.getElementById("count1").style.fontSize = "16px";
            document.getElementById("count2").style.fontSize = "16px";
			mainContent.style.width = "50%";
			mainContent.style.height = "80%";
            document.getElementById("butt").height = "20%";
			document.getElementById("butt").width = "75%";
            document.getElementById("count1").width = "45%";
            document.getElementById("count1").height = "25%";
            document.getElementById("count2").width = "45%";
            document.getElementById("count2").height = "25%";
            document.getElementById("butt").style.marginLeft = "10px";
            document.getElementById("button1").style.fontSize = "12px";
		}
		if (mainContentWidth <= 600) {
            document.getElementById("title").style.fontSize = "16px";
            document.getElementById("user-name").style.fontSize = "16px";
            document.getElementById("user").width = "20%";
            document.getElementById("butt").width = "20%";
            document.getElementById("computer").width = "20%";
            document.getElementById("comp-name").style.fontSize = "16px";
            document.getElementById("user-number").style.fontSize = "16px";
			document.getElementById("count1").style.fontSize = "15px";
            document.getElementById("count2").style.fontSize = "15px";
			mainContent.style.width = "50%";
			mainContent.style.height = "70%";
            document.getElementById("butt").height = "20%";
			document.getElementById("butt").width = "75%";
            document.getElementById("count1").width = "35%";
            document.getElementById("count1").height = "20%";
            document.getElementById("count2").width = "35%";
            document.getElementById("count2").height = "20%";
            document.getElementById("count1").style.marginLeft = "10px";
            document.getElementById("count2").style.marginLeft = "10px";
            document.getElementById("butt").style.marginLeft = "10px";
            document.getElementById("button1").style.fontSize = "10px";
		}
		if (mainContentWidth <= 400) {
            document.getElementById("title").style.fontSize = "14px";
            document.getElementById("user-name").style.fontSize = "15px";
            document.getElementById("user").width = "20%";
            document.getElementById("butt").width = "20%";
            document.getElementById("computer").style.width = "20%";
            document.getElementById("comp-name").style.fontSize = "15px";
            document.getElementById("user-number").style.fontSize = "15px";
			document.getElementById("count1").style.fontSize = "14px";
            document.getElementById("count2").style.fontSize = "14px";
			mainContent.style.width = "50%";
			mainContent.style.height = "50%";
            document.getElementById("butt").height = "20%";
			document.getElementById("butt").width = "75%";
            document.getElementById("count1").width = "35%";
            document.getElementById("count1").height = "20%";
            document.getElementById("count2").width = "30%";
            document.getElementById("count2").height = "15%";
            document.getElementById("count1").style.marginLeft = "10px";
            document.getElementById("count2").style.marginLeft = "10px";
            document.getElementById("butt").style.marginLeft = "10px";
            document.getElementById("button1").style.fontSize = "8px";
		}
		if (mainContentWidth <= 300) {
            document.getElementById("title").style.fontSize = "13px";
            document.getElementById("user-name").style.fontSize = "12px";
            butt.style.fontSize = "13px";
            document.getElementById("comp-name").style.fontSize = "12px";
            document.getElementById("user-number").style.fontSize = "14px";
			document.getElementById("count1").style.fontSize = "12px";
            document.getElementById("count2").style.fontSize = "12px";
			mainContent.style.width = "50%";
			mainContent.style.height = "35%";
            document.getElementById("butt").height = "20%";
			document.getElementById("butt").width = "75%";
            document.getElementById("count1").width = "25%";
            document.getElementById("count1").height = "10%";
            document.getElementById("count2").width = "25%";
            document.getElementById("count2").height = "10%";
            document.getElementById("count1").style.marginLeft = "8px";
            document.getElementById("count2").style.marginLeft = "8px";
            document.getElementById("button1").style.fontSize = "8px";
		}
		if (mainContentWidth <= 200) {
            document.getElementById("title").style.fontSize = "10px";
            document.getElementById("user-name").style.fontSize = "7px";
            butt.style.fontSize = "7px";
            document.getElementById("comp-name").style.fontSize = "7px";
            document.getElementById("user-number").style.fontSize = "8px";
			document.getElementById("count1").style.fontSize = "7px";
            document.getElementById("count2").style.fontSize = "7px";
			mainContent.style.width = "50%";
			mainContent.style.height = "35%";
            document.getElementById("butt").height = "20%";
			document.getElementById("butt").width = "75%";
            document.getElementById("count1").width = "18%";
            document.getElementById("count1").height = "8%";
            document.getElementById("count2").width = "18%";
            document.getElementById("count2").height = "10%";
            document.getElementById("count1").style.marginLeft = "5px";
            document.getElementById("count2").style.marginLeft = "5px";
            document.getElementById("button1").style.fontSize = "7px";
		}
		if (mainContentWidth <= 100) {
            document.getElementById("title").style.fontSize = "8px";
            document.getElementById("user-name").style.fontSize = "7px";
            butt.style.fontSize = "6px";
            document.getElementById("comp-name").style.fontSize = "7px";
            document.getElementById("user-number").style.fontSize = "7px";
            document.getElementById("count1").style.fontSize = "6px";
            document.getElementById("count2").style.fontSize = "6px";
			mainContent.style.width = "50%";
			mainContent.style.height = "35%";
            document.getElementById("butt").height = "20%";
			document.getElementById("butt").width = "22%";
            document.getElementById("count1").width = "10%";
            document.getElementById("count1").height = "10%";
            document.getElementById("count2").width = "10%";
            document.getElementById("count2").height = "10%";
            document.getElementById("count1").style.marginLeft = "5px";
            document.getElementById("count2").style.marginLeft = "5px";
            document.getElementById("button1").style.fontSize = "5px";
		}
		
		//Адаптація кулі
		mainContentWidth = mainContent.getBoundingClientRect().width;
		mainContentHeight = mainContent.getBoundingClientRect().height;
		let userNumberHeight = userNum.getBoundingClientRect().height;
		userBox.style.margin = 0;
        computerBox.style.margin = 0;
		let newUserContainerHeight = mainContentHeight - userNumberHeight - 4;
		/*let newballContainerWidth = mainContentWidth;
		ballContainer.style.height = newballContainerHeight + "px";
		ballContainer.style.width = newballContainerWidth + "px";
		//Масштабування за коротшою стороною
		if (newballContainerWidth < newballContainerHeight) {
			ball.style.height = newballContainerWidth * 0.85 + "px";
			ball.style.width = newballContainerWidth * 0.85 + "px";
		}
		else {
			ball.style.height = newballContainerHeight * 0.85 + "px";
			ball.style.width = newballContainerHeight * 0.85 + "px";
		}*/
	}
    
});