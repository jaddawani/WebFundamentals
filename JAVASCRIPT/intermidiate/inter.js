function sigma(x){ 
               
    var sigma=0;
      
      for(var i = 0; i<=x; i++){
      sigma= sigma+i;
        
         }
         
          
          console.log(sigma);
          return sigma ;
  }
 sigma(6);




 function factorial(x){ 
               
    var fact=1;
      
      for(var i = 1; i<=x; i++){
      fact = fact*i;
       
         }
         
          console.log(fact);
          return fact  ;

  
  }
 factorial(5);





 function ferbo(n){ 
               
    var arr=[0,1]
    
    for(var i =2 ; i<=6 ; i++){
    arr.push (arr[i-2] + arr[i-1]);
    
    
    }
              console.log(arr);
     
          
      
      }
     ferbo();
      


 function secondd(){ 
               
    var arr=[1,2,'hello',4];
    
      /* for(var i = 0; i<=arr.length; i++){ */
      /* newarr=(arr[arr.length-2]);  */
     /*  newarr.push(arr[arr.length-2])
      } */
     

          console.log(arr[arr.length-2]);
 
  }
 secondd();




//  function nth(n){ 
               
//     var arr=[5,2,3,4,1];
//     n=arr.length-n;
    
//           console.log(arr[n]); 
//   }
//  nth(4);







 function secondlargest(){ 
               
    var arr=[5,2,3,4,7,10];
    var max=arr[0];
    var max2=arr[0];
    for(var i =1 ; i<arr.length ; i++){
    
    if(arr[i]>max){
    max=arr[i];
    }
   
    
       }
       
       for(var i =1 ; i<arr.length ; i++){
       if(arr[i]>max2 && arr[i]<max){
       max2=arr[i];
       }
       }
       

    console.log(max,max2);
     

          /* console.log(max2,max);
            */
  }
 secondlargest();




 function double(arr) {  
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    console.log(newArr);
    return newArr; 
}
double([4, 2.14, "ulissess", "hello"]);
[4, 4, 2.14, 2.14, "ulissess", "ulissess", "hello", "hello"]













  
  
  