function buttonClick()
{
    document.getElementById("textarea").style.fontSize = "4em";
}

function fancyClicked()
{
    const textarea = document.getElementById("textarea");
    textarea.style.fontWeight = "bold";
    textarea.style.textDecoration = "underline";
    textarea.style.color = "blue";
}

function boringClicked()
{
    document.getElementById("textarea").style.fontWeight = "normal";
}

function mooClicked()
{
    const textarea = document.getElementById("textarea");
    textarea.value = textarea.value.toUpperCase() + "-Moo";
}