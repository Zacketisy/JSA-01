// for (var y = 0; y <= 3; y++) {
//     console.log("Lặp được " + y + " lần này") }

//biểu thức 1: var y = 0 là câu lệnh khai báo biển
//biểu thức 2: là điều kiện dừng vòng lặp
//biểu thức 3: là hành động xử lý biến được khai báo ở biểu thức

    //Viết vòng lặp hiển thị từ 1 đến 10

// var sum = 0
// for (var i = 0; i <= 5; i++) { 
//     sum = sum + i;
//     console.log("Total from 1 to 10: " + sum) }

   //Viết chương trình tính tổng từ 0 đến 10

// var i = 0;
// while (i < 5) {
//     console.log("i = " + i);
//     i++;
// }
// do {
//     console.log(" i = " + i);
//     i++;
// } while (i < 5);


// var name_list = [ "Alpha" , "Beta" , "Cyclone" 
// , "Echo" , "Falcon" , "Genoz" ];

//  name_list.push("Hatoi", "Ito"); 
// // push() là phương thức thêm phần tử vào mảng

//  name_list[i] = "Kyva"
// // [i] là phương thức thay đổi tên mảng

//  name_list.splice(i)
// // splice() là phương thức ẩn hoặc xóa 1 phân tử

// for (var i = 0; i <name_list.length; i++) {
//     console.log(name_list[i]);
// }



// var color = ["Red" , "Blue" , "Green" , "Purple"];

// //  //Create
// //  color.push("Yellow");

// //  //Read
// //  console.log(color[1]);

// //  //Update 
// //  color[1] = "Black";

// //  //Delete
// //  color.splice(0, 1);

//  console.log(color);


// var Khang = {
//     age: "15",
//     height: "178cm",
//     weight: "78kg",
// }

// //Create
//  Khang.work = "student";

// //Read
//   console.log(Khang.height);

// //Update
// Khang.height = "175cm";

// //Delete
//  console.log(Khang);

//  delete Khang.weight;

//  console.log(Khang)

var computer = new Object();
computer = {
os: "macOS",
brand: "Apple",
cpu: "m1",
}

console.log(computer)