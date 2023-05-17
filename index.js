
// tham số: area  trả ra: điểm
function calcAreaGrade(area) {
    if (area === "A") {
        return 2;  // khi gặp lệnh return thì function coi như xong, toàn bộ code nằm dưới return ẽ không được thực thi
    }
    if (area === "B") {
        return 1;
    }
    if (area === "C") {
        return 0.5;
    }
    return 0;
}

// tham só: type   trả ra: điểm
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
    // lấy input
    var benchmarks = +document.getElementById("benchmaksInput").value;
    var subject1 = +document.getElementById("subject1Input").value;
    var subject2 = +document.getElementById("subject2Input").value;
    var subject3 = +document.getElementById("subject3Input").value;
    var areaVal = document.getElementById("areaSelect").value;
    var typeVal = document.getElementById("typeSelect").value;
    var result1 = document.getElementById("result1").value;
    var btnSubmit = document.getElementById("btnSubmit").value;


    // tính điểm khu vực
    var areaGrade = calcAreaGrade(areaVal)
    // tính điểm đối tượng
    var typeGrade = calcTypeGrade(typeVal)

    // tính tổng điểm
    var total = subject1 + subject2 + subject3 + areaGrade + typeGrade;
    

    // check kết quả
    if (
        total >= benchmarks &&
        subject1 !== 0 &&
        subject2 !== 0 &&
        subject3 !== 0
    ) {
        total = "Tổng điểm: " + (subject1 + subject2 + subject3 + areaGrade + typeGrade) + "==> Đậu";
       
    }else {
        
        total = "Tổng điểm: " + (subject1 + subject2 + subject3 + areaGrade + typeGrade) + "==> Rớt";
 
    }
    document.getElementById("result1").innerHTML = total;

};





// bài2

btn2.onclick = function () {
    var name = document.getElementById("nameInput").value;
    var kw = document.getElementById("kwInput").value;
    var result2 = document.getElementById("result2").value;


    if (kw <= 50){
        total = kw * 500;
    }else if (kw > 50 && kw <= 100){
        total = kw * 650;
    }else if (kw > 100 && kw <= 200){
        total = kw * 850;
    }else  if (kw > 200 && kw <= 350){
        total = kw * 1100;
    }else {
        total = kw * 1300;
    }
 
    document.getElementById("result2").innerHTML = total + " vnđ";
}


