function totalcost(x, y) {
    y = parseFloat(document.getElementById("famount").value);
    var answer = document.getElementById("fresult");
    answer.value = 150.95 * y;
    x = parseFloat(document.getElementById("mamount").value);
    var answer1 = document.getElementById("mresult");
    answer1.value = 180.95 * x;
  
    a = parseFloat(document.getElementById("fresult").value);
    b = parseFloat(document.getElementById("mresult").value);
    var answer = document.getElementById("result");
    answer.value = a + b;
    }