const User = {
    name:"fahd",
    email:"fahd@gmail.com",
    Id:12345,
    Avaiable:false,
    cheekaviable:function(){
        return this.Avaiable
    },
     adress:{neighborhood:"alzahrih",street:"abogalab"
    },
    city:{
        name:"riydh"
    },
    skils:["frontend","backend","database"]

    }

   console.log(User);
   console.log(User.name);
   console.log(User.id=11111);
   delete User.email;
   console.log(User.email);
   console.log(User.adress.neighborhood);
   console.log(User.skils[2]);
   console.log(User.skils.join,",")





   const characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];
  
  const Blue = characters.find(character => character.eye_color === "blue").name;
  console.log(' blue eyes:', Blue);

  const Over = characters.find(character => character.mass > 50).gender;
console.log('mass over 50:', Over);
const heightless200 = characters.filter(character => character.height <200 )
console.log('less 200:', heightless200);
const male = characters.filter(character => character.gender === "male" )
console.log('male:', male);

const allnames = characters.map(character => character.name);
console.log(' all names:', allnames);
const allhight = characters.map(character => character.height);
console.log(' allhight:', allhight);

const sorttohight =characters.sort((a,b)=> a.mass - b.mass);
console.log("low to height",sorttohight)

const sortlow =characters.sort((b,a)=> b.mass - a.mass);
console.log("low ",sortlow)

const every40 = characters.every(character => character.mass);
console.log(' 40?:', every40);

const every200 = characters.every(character => character.height);
console.log(' 200?:', every200);

const someblue = characters.some(character => character.eye_color === "blue");
console.log(' blue?:', someblue);