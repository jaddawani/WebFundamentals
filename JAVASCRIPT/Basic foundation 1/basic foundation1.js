function get_arr(){
    var arr=[];
    for (var i =1 ; i< 256; i++){
    arr.push(i);
    
    
    }
    console.log (arr);
    return arr;
    }
    
    get_arr();






function sum_even_numbers(){
    var sum=0;
for(i=0; i<1001 ; i++){
            if(i%2==0){
            sum+=i;
            }
         
         
        }
         console.log(sum);
         return sum;
         
        
        }
        
        sum_even_numbers();



        function sum_odd_numbers(){
            var sum=0;
            for(i=0; i<=5000 ; i++){
                if(i%2==1){
                sum+=i;
                }
             
             
            }
             console.log(sum);
             return sum;
             
            
            }
            
            sum_odd_numbers();


            function iterate(){
                var sum=0;
                var arr=[1,2,3];
                for(i=0; i<arr.length; i++){
                sum= sum + arr[i];
                }
                console.log(sum);
                return(arr);
                
                }
                
                iterate();






                function find_max(){

                    var arr=[9,2,3,1,1,1];
                    var max=arr[0];
                    for(var i =0; i<arr.length ; i++){
                    if(max<arr[i]){
                    max=arr[i];
                    }
                    
                    }
                    console.log(max);
                    return max;
                    }
                    
                    find_max();






 function find_avg(){
     var avg=0;
     var arr=[9,2,3,1,1,1];
     var sum=0;
     for(var i =0; i<arr.length ; i++){
     sum= sum + arr[i];
     avg = sum/arr.length;
     
                        
 }
 
 
 console.log(avg);
 return (avg) ;
 }
 
 find_avg();

 function arr_odd(){
     arr=[];
     
     for(var i =1; i< 50 ; i++){
     if( i%2==1){
     arr.push(i);
     }
     
     }
     console.log(arr);
     return arr;
     }
     arr_odd()
 function greater_y(){
     arr=[1,2,4,7,9,1];
     var y=4;
     var count=0;
     
     
     for(var i =0; i< arr.length ; i++){
     
     if(arr[i]>y){
     count= count+1
     }
    }
    console.log(count);
    return arr;
    
    }
    
    greater_y();
    
                     

                               
                               
    function square(){
        arr=[7,9,1];
        
        for(var i =0; i< arr.length ; i++){
        arr[i]=arr[i]*arr[i];
        
        }
        
        console.log(arr);
        return arr ;
        
        }
        
        square();



    function negatives(){
        arr=[7,9,-1];
        
        for(var i =0; i< arr.length ; i++){
        if(arr[i]<0){
        arr[i]=0;
        }
        
        
        }
        
        console.log(arr);
        return arr ;
        
        }
        
        negatives();
        
    




    function find_avg_max_m
            
    var arr=[9,1,3,1,-1,1];
    var sum=0;
    var avg=0;
    var min=arr[0];
    var max=arr[0];
    for(var i =0; i<arr.length ; i++){
    
      if(max<arr[i]){
     max=arr[i];
      
      }
      if(min>arr[i]){
      min=arr[i];
      }
      
     sum= sum+arr[i];
     
     avg= sum/arr.length;
     
    var newarr=[max,min,avg]
      }
      console.log(newarr);
      return newarr;
      }
      
      find_avg_max_min()
              
                                              







  function swapvalue(){
            
            
    var arr=[9,1,3,1,-1,1];
    var temp=0;
  
     temp= arr[0]; 
    arr[0] =arr[arr.length-1];
    arr[arr.length-1]=temp;
    
    
    
      
      
     console.log(arr);
      return arr ;
      }
      
     swapvalue()
      
     
     
     
     
                    
                                                 
 function string(){
            
            
    var arr=[9,-1,-3,1,-1,1];
    for(var i =0; i<arr.length; i++){
    
     if(arr[i]<0){
     arr[i] ='dojo'
     
     }
    
    }
    
 console.log(arr);
  return arr ;
  }
  
 string()




 
                                                                                          


                
            
            
        
        
