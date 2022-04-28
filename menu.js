function Menu(id, height, width){
    this.id = id;
    this.height = height;
    this.width = width;
    this.item = [];
}

function ItemMenu(id, text, value, image, isSeparator){
    this.id = id;
    this.text = text;
    this.value = value;
    this.image = image;
    this.isSeparator = isSeparator;
    this.items = [];

    this.isOpen;
    this.elementMenuDiv;
    this.onClick;
}

Menu.prototype.ItemMenu_OnMouseOver = function (element){
    element.style.backgroundColor = "#FFE6A0";
};

Menu.prototype.ItemMenu_OnMouseOut = function (element){
    element.style.backgroundColor = "";
};