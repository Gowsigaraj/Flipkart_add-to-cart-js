let mobiles = [ 
				
				{
				id:1,
				model:"Apple Iphone 14", 
				brand:"Apple",
				price:70999,
				qty:1,
				color:"Midnight",
				imgPic:"../img/iphone14.jpg"
				},
				
				{
				id:2,
				model:"Apple Iphone 14 Pro Max",
				brand:"Apple",
				price:127999,
				qty:1,
				color:"Prime Blue",
				imgPic:"../img/iphone14-pro-max.jpg"
				},
				
				{
				id:3,
				model:"Apple Iphone 14 Pro",
				brand:"Apple",
				price:119999,
				qty:1,
				color:"Space Black",
				imgPic:"../img/iphone14-pro.jpg"
				},
				
				{
				id:4,
				model:"Redmi A2",
				brand:"Redmi",
				price:5699,
				qty:1,
				color:"Aqua Blue",
				imgPic:"../img/redmi-a2.jpg"
				},
				
				{
				id:5,
				model:"Redmi Note 12 5G",
				brand:"Redmi",
				price:16999,
				qty:1,
				color:"Mystique Blue",
				imgPic:"../img/redmi-note-12.jpg"
				},

				{
				id:6,
				model:"OnePlus Nord CE 3",
				brand:"OnePlus",
				price:19000,
				qty:1,
				color:"Pastel Lime",
				imgPic:"../img/nord-ce-3.jpg"
				},
				
				{
				id:7,
				model:"Narzo N55",
				brand:"Realme",
				price:10999,
				qty:1,
				color:"Prime Blue",
				imgPic:"../img/narzo-n55.jpg"
				},
				
				{
				id:8,
				model:"OnePlus 11 5G",
				brand:"OnePlus",
				price:56999,
				qty:1,
				color:"Eternal Green",
				imgPic:"../img/oneplus-11.jpg"
				},
				
				{
				id:9,
				model:"Samsung M14 5G",
				brand:"Samsung",
				price:14490,
				qty:1,
				color:"ICY Silver",
				imgPic:"../img/samsung-m14.jpg"
				},
				
				{
				id:10,
				model:"Samsung S20 FE 5G",
				brand:"Samsung",
				price:34999,
				qty:1,
				color:"Cloud Navy",
				imgPic:"../img/samsung-s20-fe.jpg"
				},
				
				
				{
				id:11,
				model:"Oppo A78 5G",
				brand:"Oppo",
				price:18999,
				qty:1,
				color:"Glowing Blue",
				imgPic:"../img/oppo-a78.jpg"
				},
				
				{
				id:12,
				model:"Oppo F23 5G",
				brand:"Oppo",
				price:24999,
				qty:1,
				color:"Cool Black",
				imgPic:"../img/oppo-f23.jpg"
				},
				
				{
				id:13,
				model:"Vivo Y22",
				brand:"Vivo",
				price:16499,
				qty:1,
				color:"Starlit Blue",
				imgPic:"../img/vivo-y22.jpg"
				},
				
				{
				id:14,
				model:"Vivo Y100 5G",
				brand:"Vivo",
				price:23999,
				qty:1,
				color:"Pacific Blue",
				imgPic:"../img/vivo-y100.jpg"
				},
				
				{
				id:15,
				model:"Lava Blaze 2",
				brand:"Lava",
				price:8999,
				qty:1,
				color:"glass Black",
				imgPic:"../img/lava-blaze2.jpg"
				},
				
				{
				id:16,
				model:"Redmi 12C",
				brand:"Redmi",
				price:8499,
				qty:1,
				color:"Mint Green",
				imgPic:"../img/redmi-12c.jpg"
				},
				
				{
				id:17,
				model:"Iqoo Z7s 5G",
				brand:"Iqoo",
				price:19999,
				qty:1,
				color:"Norway Blue",
				imgPic:"../img/iqoo-z7s.jpg"
				},
				
				{
				id:18,
				model:"Iqoo Neo 7 5G",
				brand:"Iqoo",
				price:28999,
				qty:1,
				color:"Front Blue",
				imgPic:"../img/iqoo-neo7.jpg"
				},
				
				{
				id:19,
				model:"Iqoo Neo 6 5G",
				brand:"Iqoo",
				price:24999,
				qty:1,
				color:"Dark Nova",
				imgPic:"../img/iqoo-neo6.jpg"
				},
				
				{
				id:20,
				model:"Oneplus 11R",
				brand:"Oneplus",
				price:39999,
				qty:1,
				color:"Sonic Black",
				imgPic:"../img/oneplus-11r.jpg"
				}
				
				]
				
				
		// <div class="flex_container" id="flex_con">
			// <div class="flex_item4">
				// <div class="card_container">
						// <div class="image_sec">
							// <div class="mobile_Image">
							
							// </div>
							// <div class="image_con">
									// <p class="brand">Apple</p>
								    // <p class="model">Apple Iphone 14</p>
									// <p class="price">Rs.70999</p>
									// <a href="#" class="buttons">Add cart</a>
							// </div>
						// </div>
						
						
						
				// </div>
			// </div>  
		// </div>
				
				
   let flexCon = document.getElementById("flex_con");
  mobiles.forEach(function(elm,index){
	
	let flexItem = document.createElement("div");
	let cardContainer = document.createElement("div");
	let imageSec = document.createElement("div");
	let mobileImage = document.createElement("div");
	let imageContent = document.createElement("div");
	let brand = document.createElement("p");
	let model = document.createElement("p");
	let price = document.createElement("p");
	let buttons = document.createElement("button");
	
	
	
	flexItem.setAttribute("class","flex_item4 mar-top-30p");
	cardContainer.setAttribute ("class","card_container");
	imageSec.setAttribute  ("class","image_sec");
	mobileImage.setAttribute ("class","mobile_Image");
	imageContent.setAttribute  ("class","image_con");
	brand.setAttribute  ("class","brand"); 
	model.setAttribute ("class","model");
	price.setAttribute ("class","price");
	buttons.setAttribute  ("class","buttons");
	buttons.setAttribute  ("data-btns",elm.id);
	
	
	mobileImage.style.backgroundImage ="url("  +   elm.imgPic +")";
	brand.innerText = elm.brand;
	model.innerText = elm.model;
	price.innerText = "Rs. "+elm.price+" ";
	buttons.innerText = "Add Cart";
	
	
imageContent.append(brand,model,price,buttons);
imageSec.append(mobileImage,imageContent);
cardContainer.append(imageSec);
flexItem.appendChild(cardContainer);
flexCon.appendChild(flexItem);
	
})



let cartItems = [];
let countBtn = document.getElementById("count_btn");
let cardId= document.getElementById("cardid");
let decbtn= document.getElementById("decbtn");
let incbtn= document.getElementById("incbtn");


countBtn.addEventListener("click",function(g){
	//alert("cart btn");
	cardId.style.display = "block";
})

let closeBtn = document.getElementById("closebtn");
closeBtn.addEventListener("click", function(c){
	// alert("close btn");
	cardId.style.display = "none";
})





function addCart(parmId){
	//find in product data
	let findById = cartItems.find(function(item){
		return item.id === Number(parmId);
	});
	
	// check if id is finded
	if(findById){
		let updatecartItem = cartItems.map(function(item, indx){
			if(item.id === Number(parmId)){
				item.qty +=1;
				item.qtyPrice = item.price*item.qty;
			}
			return item;
			});
			cartItems= updatecartItem;
			updateCart(cartItems);
			quty(cartItems);
				}
				
			else{
				let proItem = mobiles.find(function(prod){
					return prod.id === Number(parmId);
					
				})
				proItem.qty = 1;
				proItem.qtyPrice = proItem.price;

				if(proItem){
					cartItems.push(proItem);
				}
				updateCart(cartItems);
				quty(cartItems);
			}
		}
	
		//event start
	let cartBtns = document.getElementsByClassName("buttons");
	for(let i=0; i < cartBtns.length; i++){
		cartBtns[i].addEventListener("click",function(e){
			addCart(this.dataset["btns"]);
		})

	}
	
	let newCard =document.getElementById("new_card")
	function updateCart(cartObj){
		newCard.innerHTML="";
		cartObj.forEach(function(elm){
			
			// <div id="new_card">
			// 	<div class="card_detail">
			// 		<div class="images">
			// 			<img src="../img/apple-iphone14.webp" height="120px" width="120px">
			// 			<div class="addbtn">
			// 				<button class="add_btn">-</button>
			// 				<input type="number" value="0" class="inputs" name="form">
			// 				<button class="add_btn">+</button>
			// 			</div>
			// 		</div>

			// 		<div class="mobile_con">
						
			// 			<p class="mbrand">Brand:Apple</p>
			// 			<p class="mcolor">Color:Midnight</p>
			// 			<p class="mmodel">Model:Apple Iphone 14</p>
			// 			<p class="mamount">Amount:Rs.70999/-</p>
			// 		</div>
			// 	</div>

			// </div>

			let cardDetail = document.createElement("div");
			let images = document.createElement("div");
			let img = document.createElement("img");
			let addBtn = document.createElement("div");
			let dbutton = document.createElement("button");
			let input = document.createElement("input");
			let ibutton = document.createElement("button");
			let mobileCon = document.createElement("div");
			let brand = document.createElement("p");
			let color = document.createElement("p");
			let model = document.createElement("p");
			let amount = document.createElement("p");
		


			cardDetail.setAttribute("class","card_detail");
			images.setAttribute("class","images");
			img.setAttribute("height","120px");
			img.setAttribute("width","120px");
			addBtn.setAttribute("class","addbtn");
			dbutton.setAttribute("class","add_btn");
			input.setAttribute("type","number");
			input.setAttribute("value","0");
			input.setAttribute("class","inputs");
			input.setAttribute("name","form");
			ibutton.setAttribute("class","add_btn");
			mobileCon.setAttribute("class","mobile_con")
			brand.setAttribute("class","mbrand");
			color.setAttribute("class","mcolor");
			model.setAttribute("class","mmodel");
			amount.setAttribute("class","mamount");
			

			img.src =elm.imgPic;
			dbutton.innerText = "-";
			ibutton.innerText = "+";
			brand.innerText= elm.brand;
			color.innerText=elm.color;
			model.innerText=elm.model;
			amount.innerText="Rs. "+elm.qtyPrice+" ";
			input.value=elm.qty;

			dbutton.onclick=subitem.bind(null,elm.id);
			ibutton.onclick=additems.bind(null,elm.id);



			mobileCon.append(brand,color,model,amount);
			addBtn.append(dbutton,input,ibutton);
			images.append(img,addBtn);
			cardDetail.append(images,mobileCon);
			newCard.appendChild(cardDetail);








		})
	}

	function subitem(btnid){
		// alert("subraction");
		let findById = cartItems.find(function(item){
			return item.id === Number(btnid);
		});
		
		// check if id is finded
		if(findById){
			let updatecartItem = cartItems.map(function(item, indx){
				if(item.qty==0){
					let dbutton = document.createElement("button");
					dbutton.setAttribute("disabled",'');
				}
				else{
					// if(item.id === Number(btnid)){
						item.qty -=1;
						item.qtyPrice = item.price*item.qty;
					// }
				}
				return item;

				});
				cartItems= updatecartItem;
				updateCart(cartItems);
				quty(cartItems);
					}
					
				else{
					let proItem = mobiles.find(function(prod){
						return prod.id === Number(btnid);
						
					})
					proItem.qty = 1;
					proItem.qtyPrice = proItem.price;
	
					if(proItem){
						cartItems.push(proItem);
					}
					updateCart(cartItems);
					quty(cartItems);
				}
		
			

	
	}

	function additems(btnid){
		addCart(btnid);
	}
	let totalqty = 0;

	function quty(cartItems){
		totalqty = 0;
		cartItems.forEach(function(elm,indx){
			totalqty = totalqty+elm.qty;

		})
	
		overAll.innerHTML ="Total Items:"+ " " + totalqty;
		carts.innerHTML=cartItems.length;

	}
	let overAll = document.getElementById("overall");

	
	let carts = document.getElementById("carts");
	  