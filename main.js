fetch("http://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        showData(data);
    });



function showData(jsonData) {
    console.log(jsonData);

    jsonData.forEach(addCourses);

}


function addCourses(course) {

    const sections = [];
    sections[0] = document.querySelector("#starters");
    sections[1] = document.querySelector("#mains");
    sections[2] = document.querySelector("#sides");
    sections[3] = document.querySelector("#desserts");
    sections[4] = document.querySelector("#drinks");

    console.log(course.id);
    const courseTemplate = document.querySelector("#courseTemplate").content;
    const courseClone = courseTemplate.cloneNode(true);
    const imagePath = "https://kea-alt-del.dk/t5/site/imgs/";

    courseClone.querySelector("h3").textContent = course.name;
    if ((course.price - course.discount) == course.price) {
        courseClone.querySelector(".price.price-discount").style.display = "none";
    } else {
        courseClone.querySelector(".price.price-full").textContent = course.price - course.discount;
        courseClone.querySelector(".price.price-discount").textContent = course.price;
    }
    if (course.soldout) {
        courseClone.querySelector(".course .soldout").style.display = "block";
    }
    courseClone.querySelector(".course img").src = imagePath + "small/" + course.image + "-sm.jpg";
    courseClone.querySelector(".info p").textContent = course.shortdescription;

    if(course.category == "starter"){
    sections[0].appendChild(courseClone);
    } else if (course.category == "main"){
            sections[1].appendChild(courseClone);
    } else if (course.category == "sideorders"){
            sections[2].appendChild(courseClone);
    } else if (course.category == "dessert"){
            sections[3].appendChild(courseClone);
    } else if (course.category == "drinks"){
            sections[4].appendChild(courseClone);
    }
}
