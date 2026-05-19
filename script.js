let num = 1; 
        let numc = 1;
        let p = document.querySelector("p");
        let ul = document.querySelector("ul");

        document.getElementById("btnOne").addEventListener(
            "click", () => {
        let inp = document.querySelector("input");
                if(inp.value == ""){
               return alert("Invalid input")
            }
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        ul.appendChild(li);
        p.innerHTML = "You have added " + num + " items";
        num++;        
       
    }  
)
 document.getElementById("clear").addEventListener(
            "click", () =>{
                num = 1;
               
               let oneLi = document.querySelector("li");
               p.innerHTML = "You have deleted " + numc + " items";
        numc++;
               oneLi.remove()     
            }            
        )


document.getElementById("dtall").addEventListener(
    "click" , () => {
            p.innerText = "You have all deleted";
            num = 1;
            numc = 1;
        let lis = document.querySelectorAll("li");
        lis.forEach(
            (i)=>{
                i.remove()
            }
        )
    }
)