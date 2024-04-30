var flyWindow;

document.getElementById("generateButton").addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var myText = "<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n";
    myText += "<h3>Name: " + name + "</h3>";
    myText += "<h3>Email: " + email + "</h3>";
    myText += "<h3>Goal: " + goal + "</h3>";

    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (var i = 0; i < daysOfWeek.length; i++) {
        myText += "<h3>" + daysOfWeek[i] + " Meals</h3>";
        var breakfast = document.getElementById(daysOfWeek[i].toLowerCase() + "-breakfast").value;
        var snack1 = document.getElementById(daysOfWeek[i].toLowerCase() + "-snack1").value;
        var lunch = document.getElementById(daysOfWeek[i].toLowerCase() + "-lunch").value;
        var snack2 = document.getElementById(daysOfWeek[i].toLowerCase() + "-snack2").value;
        var dinner = document.getElementById(daysOfWeek[i].toLowerCase() + "-dinner").value;

        if (breakfast || snack1 || lunch || snack2 || dinner) {
            if (breakfast) myText += "<p>Breakfast: " + breakfast + "</p>";
            if (snack1) myText += "<p>Snack: " + snack1 + "</p>";
            if (lunch) myText += "<p>Lunch: " + lunch + "</p>";
            if (snack2) myText += "<p>Snack: " + snack2 + "</p>";
            if (dinner) myText += "<p>Dinner: " + dinner + "</p>";
        } else {
            myText += "<p>No meals planned for " + daysOfWeek[i] + ".</p>";
        }
    }

    myText += "</body>\n</html>";

    flyWindow = window.open('about:blank', 'myPop', 'width=600,height=400,left=200,top=200');
    flyWindow.document.write(myText);
});

document.getElementById("clearButton").addEventListener('click', function() {
    var inputFields = document.querySelectorAll("input[type='text'], input[type='email']");

    inputFields.forEach(function(input) {
        input.value = "";
    });
});

document.getElementById("printButton").addEventListener('click', function() {
    if (flyWindow) {
        flyWindow.print();
    } else {
        alert("Please generate the output first.");
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}