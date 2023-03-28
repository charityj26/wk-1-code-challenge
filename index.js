//write that prompts the user to input student marks.The input should be between 0 and 100.Then output the correct grade.
//A>79,B-60 to 79,c-59 to 49,D-40 to 49,E- less 40.
    //grading
    let a = 80
    function assignGrade(a){
      if (a >= 79){
          console.log(`scored A with marks ${a}`)
        }else if(a<=50 && a>=60){
          console.log(`scored B with marks ${a}`)
        }else if (a<=40 && a>=50){
          console.log(`scored c with marks ${a}`)
        }else {
          console.log("E")
        }
    }
    assignGrade(a)
// spped limit

function checkLimit(speed){
  let points=(speed-70)/5
  if(speed <= 70) {
      console.log('OK');
  } else if( points <= 12){
      console.log('points '+points);
} else if(points > 12) {
 console.log('License suspended');
}

}

checkLimit(900)

           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
        
           
          
        
    












    
