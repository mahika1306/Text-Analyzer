uppercase.addEventListener("click",()=>{
    console.log("Transforming to Uppercase");
    inpText.value=inpText.value.toUpperCase();
})


lowercase.addEventListener("click",()=>{
    console.log("Transforming to Lowercase");
    inpText.value=inpText.value.toLowerCase();
})

removespaces.addEventListener("click",()=>{
    console.log("Removing Extra Spaces");
    inpText.value=inpText.value.replace(/\s+/g,' ').trim();
})


removelines.addEventListener("click",()=>{
    console.log("Removing Extra Spaces");
    inpText.value=inpText.value.replace(/\n+/g,'\n').trim();
})

inpText.addEventListener("input",()=>{
    console.log("changed");
    charCount.innerText=inpText.value.length;
    wordCount.innerText=inpText.value.trim().split(" ").length
})