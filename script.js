$('img').on('click',toggle)
let image = $('img[src="/assets/images/night-mode.png"]')
let click = 0;
function toggle()
{
    click++;
    let body = $('body')
    let border = $('#border')
    let text = $('#text')
    if(click % 2 == 1)
    {
        image.attr('src','/assets/images/brightness.png')
        body.css("backgroundColor","black")
        border.css("border","2px solid white")
        text.css("color","white")     
    }
    else
    {
        image.attr('src','/assets/images/night-mode.png')   
        body.css("backgroundColor","white")
        border.css("border","2px solid black")
        text.css("color","black")
    }
}   
