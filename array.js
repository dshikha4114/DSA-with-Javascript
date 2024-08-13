const arr1=[2, 5, 10, 201,  1 , 6, 200,  7, 3, 25, 75, 100];

let varMax=0;

for(let i=0; i<arr1.length; i++)
    {
               
                if(varMax< arr1[i])
                    {
                            varMax=arr1[i];
                    }
           
    }


    
    
    
    
    console.log(varMax)