
            var fname=prompt('please enter your name','Marwan')  ;
            var age = Number(prompt('Please enter your age'));

            if(17 <= age && age  < 35){
                alert('he is a student');
                
        
            }
            else{
                alert('he is not a student');
                
            }

            var order=prompt("What do you want BMW or Mercedes-Benz");
        while (order!=="BMW" && order!=="Mercedes-Benz"){
            order=prompt("What do you want BMW or Mercedes-Benz")
        }

        var item='';
        if(order=='BMW'){
            
            item= '<img src="img/BMW.jpg"/>';
        }else {
             item='<img src="img/Mer.jpg"/>';
        }

        var NumOfCar=prompt("What it is the Number of Cars");
        var result='';
        for(var i=0;i<NumOfCar;i++){
            result=result+item;
        }
        document.write(result);


        var area;
        function Area(width,hight){
            return width*hight;
        }
        area=Area(5,6);


        // var resultf = `<p>${area}</p>`
        var resultf = '<p>'+'<b>'+'<b>'+"The Area = "+'</b>'+ area +'</b>'+ '</p>'
        document.write(resultf);

        


            

        
        
