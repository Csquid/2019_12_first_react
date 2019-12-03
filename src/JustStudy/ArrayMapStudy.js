//윈도우키 + . = 이모지
const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

const addSmile = (day) => `😊 ${day}`;
//const smilingDays = days.map(potato => console.log(potato));
//Array Function은 기본적으로 return을 가지고있고 그렇기에 새로운 배열이 만들어진다.
//const smilingDays = days.map(potato => `😊 ${potato}`);
//const smilingDays = days.map(addSmile);
const smilingDays = days.map((day, index) => `#${index + 1} ${day}`);
console.log(smilingDays);