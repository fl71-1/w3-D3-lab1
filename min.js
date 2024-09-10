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


