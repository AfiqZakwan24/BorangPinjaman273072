if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    var removeButton = document.getElementsByClassName('Remove');
    for (var i=0; i<removeButton.length; i++){
        var button = removeButton[i];
        button.addEventListener('click', removeAsset);
    }

    var addButton = document.getElementsByClassName('AddAsset');
    for (var i=0; i<addButton.length; i++){
        var button = addButton[i];
        button.addEventListener('click', addAssetClick);
    }

    document.getElementsByClassName('Confirm')[0].addEventListener('click', confirmClick);
    document.getElementsByClassName('Clear')[0].addEventListener('click', ClearAsset);
}

function addAssetClick(event) {
    var button = event.target;
    var AssetItemTitle = button.parentElement.parentElement.parentElement;
    var title = AssetItemTitle.getElementsByClassName('ProductName')[0].innerText;
    var imageSrc = AssetItemTitle.getElementsByClassName('productImage')[0].src;
    var quant = AssetItemTitle.getElementsByClassName('quant')[0].innerText;
    addAssetRow(title, imageSrc, quant);
}

function addAssetRow(title, imageSrc, quant){
    //to add asset into cart
    var Row = document.createElement('div');
    Row.classList.add('row');
    var cartAsset = document.getElementsByClassName('cartItems')[0];
    //to check the item in the cart
    var cartAssetName = cartAsset.getElementsByClassName('cartTitle');
    console.log(cartAssetName, title);
    for (var i=0; i<cartAssetName.length; i++){
        if(cartAssetName[i].innerText == title){
            alert('Please check your cart');
            return;
        }
    }
    var RowContent =`
        <div class="cartItem column"> 
            <img class="cartImage" src="${imageSrc}" style="width:100px; height:100px;">
            <span class="cartTitle">${title}</span>
        </div>
        <div class="cartQuantity column">
            <span class="cartNumber">${quant}</span>
        </div>
        <div class="cartEdit column">
            <button type="button" class="Remove">REMOVE</button>
        </div>`;
    Row.innerHTML = RowContent;
    cartAsset.append(Row);
    Row.getElementsByClassName('Remove')[0].addEventListener('click', removeAsset);
    alert('The asset have been successfully added into your cart below');
}

function removeAsset(event){
    var buttonCLicked = event.target;
    buttonCLicked.parentElement.parentElement.remove();
    console.log("delete");
}

function ClearAsset(event) {
    var buttonClear = event.target;
    var cartList = document.getElementsByClassName('cartItems')[0];
    while (cartList.hasChildNodes){
        cartList.removeChild(cartList.firstChild);
    }
}

function confirmClick(event){
    var FormHtml;
    var button = event.target;
    var AssetItemTitle = button.parentElement.parentElement;
    var cartAsset = document.getElementsByClassName('cartItems')[0];
    var cartAssetName = cartAsset.getElementsByClassName('cartTitle');
    var titleArray = [];
    var imgArray = [];
    var quantArray = [];
    for(var i=0; i<cartAssetName.length; i++){
        var title = AssetItemTitle.getElementsByClassName("cartTitle")[i].innerText;
        var img_src = AssetItemTitle.getElementsByClassName("cartImage")[i].src;
        var quant = AssetItemTitle.getElementsByClassName("cartNumber")[i].innerText;
        titleArray.push(title);
        imgArray.push(img_src);
        quantArray.push(quant);
    }
    console.log(titleArray);
    
    var Form = confirm("Do you want to proceed fill a form?");
    if (Form == true){
        //send array to Form.html
        sessionStorage.setItem("TArray", JSON.stringify(titleArray));
        sessionStorage.setItem("IArray", JSON.stringify(imgArray));
        sessionStorage.setItem("QArray", JSON.stringify(quantArray));
        FormHtml = window.location.assign("form.html");
    }
    else{
        return;
    }
}