const categories = [
    {
        name: "Обои",
        imageSrc: "https://static.insales-cdn.com/images/collections/1/4141/1462317/large_%D0%9E%D0%B1%D0%BE%D0%B8_%D0%BE%D0%B1%D1%89%D0%B0%D1%8F_1.jpg",
         href: "wallpaper.html",
        alt: "Обои"
    },
    {
        name: "Сантехника",
        imageSrc: "https://sun9-38.userapi.com/impg/P3E-sIB3dzOTAxXO6BAnmj6TNesX_DwiAxCN0w/LASCQcZpPh4.jpg?size=604x403&quality=96&sign=5560e8d61bb26c66f44694e701bd06b5&type=album",
         href: "categorysantexnica.html",
        alt: "Сантехника"
    },
     {
        name: "Напольные покрытия",
        imageSrc: "https://www.plitkanadom.ru/image/new_design/napol_for_error.jpg",
        href: "floor.html",
        alt: "Напольные покрытия"
    },
    {
  name: "Мебель",
  imageSrc: "https://static.tildacdn.com/tild3434-3862-4533-b965-363034613834/10.jpeg",
  href: "furniture.html", 
  alt: "Мебель"
 },
 {
  name: "Посуда",
  imageSrc: "https://avatars.mds.yandex.net/i?id=12bbbaffed6df6a04c38e88aa8aa3769_l-10878270-images-thumbs&n=13",
  href: "dishes.html",
  alt: "Посуда"
 },
 {
  name: "Текстиль",
  imageSrc: "https://www.buro247.ru/images/ulya/hotel/MAST_CLASSIC_160lettoplaid.jpg",
  href: "textile.html",
  alt: "Текстиль"
 },
 {
  name: "Бытовая техника",
  imageSrc: "https://avatars.mds.yandex.net/i?id=4c27fcaef9b8c9a0e47d9784a06e4185_l-3577741-images-thumbs&n=13",
  href: "householdappliances.html",
  alt: "Бытовая техника"
 },
 {
  name: "Декор",
  imageSrc: "https://mebel-complect.ru/wp-content/uploads/5/6/c/56ce64dd2fbbc3984c472f716565dc0c.jpeg",
  href: "decor.html",
  alt: "Декор"
 },
 {
  name: "Интсрументы",
  imageSrc: "https://i0.wp.com/grupocasalima.com/wp-content/uploads/caja-de-herramientas-de-madera-casa-lima.jpg?fit=1000%2C706&ssl=1",
  href: "tools.html",
  alt: "Инструменты"
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
