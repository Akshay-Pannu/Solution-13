document.querySelector(".right_upper").innerHTML= prompt("Enter the title")

document.querySelector(".cname").innerHTML= prompt("Enter the channel name")

function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

let a= prompt("Enter the views: ");

document.querySelector(".views").before(nFormatter(a))

document.querySelector(".old").before(prompt("How old video is"))

document.querySelector(".time_duration").innerHTML= prompt("Video time Duration:")