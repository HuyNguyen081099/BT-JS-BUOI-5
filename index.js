
// bài 1
function calcAreaGrade(area) {
    if (area === "A") {
        return 2;
    }
    if (area === "B") {
        return 1;
    }
    if (area === "C") {
        return 0.5;
    }
    return 0;
}


function calcTypeGrade(type) {
    if (type === "1") {
        return 2.5;
    }
    if (type === "2") {
        return 1.5;
    }
    if (type === "3") {
        return 1;
    }
}
btnSubmit.onclick = function exercise1() {
   
    var benchmarks = +document.getElementById("benchmaksInput").value;
    var subject1 = +document.getElementById("subject1Input").value;
    var subject2 = +document.getElementById("subject2Input").value;
    var subject3 = +document.getElementById("subject3Input").value;
    var areaVal = document.getElementById("areaSelect").value;
    var typeVal = document.getElementById("typeSelect").value;
    var result1 = document.getElementById("result1").value;
    var btnSubmit = document.getElementById("btnSubmit").value;


   
    var areaGrade = calcAreaGrade(areaVal)
    
    var typeGrade = calcTypeGrade(typeVal)

   
    var total = subject1 + subject2 + subject3 + areaGrade + typeGrade;


   
    if (
        total >= benchmarks &&
        subject1 !== 0 &&
        subject2 !== 0 &&
        subject3 !== 0
    ) {
        total = "Tổng điểm: " + (subject1 + subject2 + subject3 + areaGrade + typeGrade) + "==> Đậu";

    } else {

        total = "Tổng điểm: " + (subject1 + subject2 + subject3 + areaGrade + typeGrade) + "==> Rớt";

    }
    document.getElementById("result1").innerHTML = total;

};





// bài2

btn2.onclick = function () {
    var name = document.getElementById("nameInput").value;
    var kw = document.getElementById("kwInput").value;
    var result2 = document.getElementById("result2").value;


    if (kw <= 50) {
        total = kw * 500;
    } else if (kw > 50 && kw <= 100) {
        total = kw * 650;
    } else if (kw > 100 && kw <= 200) {
        total = kw * 850;
    } else if (kw > 200 && kw <= 350) {
        total = kw * 1100;
    } else {
        total = kw * 1300;
    }
    total = new Intl.NumberFormat("vn-VN").format(total) + " VNĐ";

    document.getElementById("result2").innerHTML = total;
}


// bài 3
btn3.onclick = function () {
    var name2 = document.getElementById("nameInput").value;
    var TTN = document.getElementById("TTNInput").value;
    var SNPT = document.getElementById("SNPTInput").value;
    var result3 = document.getElementById("result3").value;


    var TTT = TTN - 4e+6 - (SNPT * 1.6e+6);


    if (TTT <= 60e+6) {
        total = TTT * (5 / 100);
    } else if (TTT >= 61e+6 && TTT <= 120e+6) {
        total = TTT * (10 / 100);
    }
    else if (TTT >= 121e+6 && TTT <= 210e+6) {
        total = TTT * (15 / 100);
    }
    else if (TTT >= 121e+6 && TTT <= 384e+6) {
        total = TTT * (20 / 100);
    }
    else if (TTT >= 385e+6 && TTT <= 624e+6) {
        total = TTT * (25 / 100);
    }
    else if (TTT >= 625e+6 && TTT <= 960e+6) {
        total = TTT * (30 / 100);
    } else {
        total = TTT * (35 / 100);
    }
    
    total = new Intl.NumberFormat("vn-VN").format(total) + " VNĐ";

    document.getElementById("result3").innerHTML = total;


}


// bài 4
btn4.onclick = function () {

    var MKH = document.getAnimations("MKHInput").value;
    var sokenh = document.getElementById("sokenhInput").value;
    var soketnoi = document.getElementById("soketnoiInput").value;
    var LK = document.getElementById("loaikhach").value;


    if (LK === "1") {
        phixuly = 4.5;
        phidv = 20.5;
        kenhcc = 7.5 * sokenh;
    } else if (LK === "2") {
        phixuly = 15
        if (soketnoi <= 10) {
            phidv = 75
        } else {
            phidv = 75 + (soketnoi - 10) * 5;
        }
        kenhcc = 50 * sokenh;

    }
    
    var total = phixuly + phidv + kenhcc;


    total = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(total);

    document.getElementById("result4").innerHTML = total;
}