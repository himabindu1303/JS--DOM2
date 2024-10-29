let divcontainer=document.createElement("div")

let image=document.createElement("img")
image.setAttribute("src","https://theartisticcook.com/wp-content/uploads/2024/01/Vegetablebiryani1.jpg")
image.style.width="400px"

let foodname=document.createElement("p")
foodname.textContent="Veg Biryani"

let pricetag=document.createElement("span")
pricetag.textContent="Price : 350Rs"

let ordernow=document.createElement("button")
ordernow.textContent="Order Now"
ordernow.style.display="block"
ordernow.style.marginTop="10px"
ordernow.style.backgroundColor="lightcoral"


divcontainer.append(image,foodname,pricetag,ordernow)
divcontainer.style.backgroundColor="aqua"
divcontainer.style.display="inline-block"
divcontainer.style.padding="10px"

document.body.append(divcontainer)











