'use strict';

let userName = prompt('please enter your name');

document.write(`<h2>${userName}</h2>`);

alert("oh Hi nice to met you  "+ userName);

let favCoffe = prompt("what is your fav coffee House IN Amman ? , please write one of these coffee Houses (DIMITRI’S COFFEE,Almond Coffee House,Astrolabe Coffee House,Rumi Cafe‬‬, the coffee lab‬) ");

let Rate = prompt("how many from 5 you could Rate this place");
while(Rate > 5){
    geameRate = prompt("I Know they deserve more than 5 but you have to enter number less than 5!!");
  }
  if(Rate == 5){
alert("oh wow!! "+ Rate);
}
else 
{alert("come on its deserve more than " +Rate +" !!");}