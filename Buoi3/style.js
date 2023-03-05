var PointList = ['Alpha' , 'Beta' , 'Caron' , 'Delta' , 'Echo'];

//PointList.push ('Geto' , 'Hatoi' , 'Ito');
//PointList[7] = "Kyva";
//PointList.splice(1)
//console.log (PointList)
//console.log (PointList.length)

//for (var i = 0; i < PointList.length; i++) {
//   console.log (PointList[i]);
//}

var computer = 
{
    Brand: "Rog Strix G531" ,
    CPU: "AMD Ryzen 7 4800H",
    GPU: "RTX Geforce 3050",
    Color: "Black" ,
    Ram: "8 GB",
}

//computer.SSD = "512 GB"; thêm thuộc tính
//computer.Owner = "Khang"; thêm thuộc tính
//delete computer.Color; xóa thuộc tính

//console.log (computer)
//console.log (computer.Brand)

for ( var x in computer) 
{
    //console.log(x + ": " + computer[x]);
    //console.log(typeof x);
    //console.log(x) đọc thuộc tính
    //console.log(computer[x]) đọc giá trị
}

for (let x in PointList) 
{
    //console.log(x); đọc số index (chỉ mục) của mảng
    //console.log(Pointlist[x]); đọc giá trị
}

var name = "lmao";
for (let x of name) {
    //console.log(x);
}

// for in: Đọc thuộc tính obj
// for of: Đọc giá trị của những thứ lặp lại đc