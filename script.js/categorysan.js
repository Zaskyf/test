const categories = [
    {
        name: "Ванны и комплектующие",
        imageSrc: "https://belbagno.ru/upload/iblock/e46/e460ace5053cca596b9ef71b25f5f431.jpg",
        href: "bathroom.html",
        alt: "Ванны и комплектующие"
    },
    {
        name: "Раковины",
        imageSrc: "https://vodopadoff.ru/image/cache/catalog/1/2019/Bez_otverstiya/94.2-900x900.jpg", 
        href: "rakovin.html",
        alt: "Раковины"
    },
    {
        name: "Смесители",
        imageSrc: "https://sales-santehnika.ru/components/com_jshopping/files/img_products/full_A35-22U_interior.jpg",
        href: "kran.html",
        alt: "Смесители"
    },
    {
        name: "Душевые кабины и поддоны",
        imageSrc: "https://stroymarkt.ru/upload/iblock/431/41u05is97xhi10b0hwmhs1tiyqffsx20.jpg", 
        href: "showercabins.html",
        alt: "Душевые кабины и поддоны"
    },
    {
        name: "Унитазы",
        imageSrc: "https://static.onlinetrade.ru/img/items/b/vitra_komplekt_pristennyy_unitaz_zentrum_60_sm_s_sidenem_mikrolift_i_mekhanizmom_smyva_geberit_1787684_2.jpg",
        href: "toilet.html", 
        alt: "Столы"
    },
    {
        name: "Сантехника для отопления",
        imageSrc: "https://etalon-bt.ru/upload/iblock/151/641/b.jpg",
        href: "brick.html",
        alt: "Кресла"
    },
    {
        name: "Аксессуары и дополнительные элементы",
        imageSrc: "https://www.tedericglobal.com/images/SOLUTIONS/N/pvc-ppr-pipe-fittings_2.jpg",
        href: "drymix.html",
        alt: "Диваны"
    }
];

const categoryContainer = document.getElementById("categorycontainer");

categories.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";

    const innerDiv = document.createElement("div");
    innerDiv.className = "bocategory";

    // Создаем ссылку и добавляем в нее изображение
    const link = document.createElement("a");
    link.href = category.href;

    const image = document.createElement("img");
    image.src = category.imageSrc;
    image.alt = category.alt;
    image.className = "imges";
    image.style = "align-items: center;";

    link.appendChild(image);
    innerDiv.appendChild(link); // Сначала добавляем изображение

    // Затем добавляем текст
    const paragraph = document.createElement("p");
    paragraph.textContent = category.name;
    innerDiv.appendChild(paragraph);

    categoryDiv.appendChild(innerDiv);
    categoryContainer.appendChild(categoryDiv);
});