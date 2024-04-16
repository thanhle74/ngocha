$(document).ready(function () {
    $(window).resize(action);
    action();

    $(".song").click(function () {
        $("#audio")[0].play();
        $("#text").show();
        $(this).hide();
        $("body").css("background-image", 'url("./ngocha.jpg")');
        runText();
        const height = window.innerHeight;
        $(".main").css("height", height);
        $(".heart").removeClass("active");
        $('button').addClass('active');
    });
});

function action() {
    $(document).ready(function () {
        $("#text").hide();
    });

    const container = document.querySelector("body");
    const heart = document.querySelector(".heart");

    setInterval(function () {
        const newHeart = heart.cloneNode(true);
        newHeart.style.left = Math.random() * (container.offsetWidth - 150) + "px";
        newHeart.style.top = Math.random() * (container.offsetHeight - 150) + "px";
        container.appendChild(newHeart);
        setTimeout(function () {
            container.removeChild(newHeart);
        }, 5000);
    }, 200);
}

function runText() {
    const text = "My baby love you so much forever you and I. I love you oh! I love you so much forever you and I.";
    const textContainer = document.getElementById("text");

    let index = 0;
    function displayText() {
        textContainer.textContent += text[index];
        index++;
        if (index < text.length) {
            setTimeout(displayText, 100);
        }
    }
    displayText();
}
