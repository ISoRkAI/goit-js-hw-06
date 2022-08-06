const listWithId = document.querySelector("#categories");
console.dir(`Number of categories: ${ listWithId.children.length }`);
[...listWithId.children].forEach((elem) => {
    console.dir(`Category: ${elem.children[0].textContent}`);
    console.dir(`Elements: ${elem.children[1].children.length}`)
})