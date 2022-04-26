function magNumber(info) {
  // const info = 
  const ammo = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5
  };

  // console.log(info[0])
  // console.log(ammo[info[0]])
     ammo[info[0]] //кол-во патронов  30 
   let  totalShot = info[1] * 3;    //кол во выстрелов    57 
    for (let i = 1; i < 100 ; ) {
      if ( (i* ammo[info[0]]) < totalShot) {
          i = i+1;
      } else {
        return i;
      }
    }


  console.log(ammo.M16A2)
  // console.log(info)



}
console.log(magNumber(["M16A2", 19]));