function function_all(b,h,a) 
        {
            if (b.value=="")
             {
                  document.getElementById(h).innerHTML="Enter valid "+a;  
                  document.getElementById(h).style.color="red"
            }
            else
            {
                document.getElementById(h).innerHTML="";  
            }
        }