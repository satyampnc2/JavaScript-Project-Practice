var div = document.querySelector('.section2 div');
var img = document.querySelector('.section2 img')
const options = {
    threshold : .3
}
var observer1 = new IntersectionObserver(fun1,options);
var observer2 = new IntersectionObserver(fun2,options);
function fun1(entries){
    console.log(entries)
    entries.forEach(entry => {
        console.log(entry);
    });
}

function fun2(entries){
    entries.forEach(entry => {
        console.log(entry.target.src);
        if(entry.isIntersecting)
        entry.target.src = "PicsArt_07-18-01.50.01.jpg";
    });
}

observer1.observe(div);
observer2.observe(img);