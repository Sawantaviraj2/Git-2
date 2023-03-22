Deep// Write code related to Dashboard page here

let course=document.getElementById("course")

let lsdata=JSON.parse(localStorage.getItem("assignments"))||[]

let sprint1=document.getElementById("sprint-1")

let sprint2=document.getElementById("sprint-2")

let sprint3=document.getElementById("sprint-3")

let sprint4=document.getElementById("sprint-4")

display(lsdata)

function display(data)

{

    data.forEach((data)=>{

        console.log(data);

        let div=document.createElement("div")

        let name=document.createElement("p")

        let desc=document.createElement("p")

        let type=document.createElement("p")

        let course=document.createElement("p")

        let schedule=document.createElement("p")

        let sprint=document.createElement("p")

        let select=document.createElement("select")

        let option1=document.createElement("option")

        option1.setAttribute("value","sprint-1")

        let option2=document.createElement("option")

        option2.setAttribute("value","sprint-2")

        

        let option3=document.createElement("option")

        option3.setAttribute("value","sprint-3")

        let option4=document.createElement("option")

        option4.setAttribute("value","sprint-4")

        select.append(option1,option2,option3,option4)

        div.append(name,desc,type,course,schedule,sprint,select)

        if(data.sprint==="sprint-1")

        {

            sprint1.append(div)

        }

        else if(data.sprint==="sprint-2")

        {

            sprint2.append(div)

        }

        else if(data.sprint==="sprint-3")

        {

            sprint3.append(div)

        }

        else if(data.sprint==="sprint-4")

        {

            sprint4.append(div)

        }

    })

}

let filter = lsdata.filter((item)=>{

    if

    {

        

    }

})

// function sprint1()

// {

// }
