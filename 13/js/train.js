let mess = "Enter num of seat:";
let seat = prompt (mess);

// купе
//let coupe = seat <= 36 ? (seat-1)/4+1 : (54-seat)/2+1;
let coupe = seat <= 36 ? Math.trunc((seat-1)/4+1) : Math.trunc((54-seat)/2+1);

//верхнє чи нижнє
let floor = seat%2 == 0 ? "on the top" : "on the bottom";

//бічне чи ні
let side = seat<=36 ? "in coupe" : "aside";


let res = `Your seat ${floor}, coupe ${coupe}, ${side}.`;

alert(res);
