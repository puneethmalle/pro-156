AFRAME.registerComponent("game",{
    schema:{
        elId:{type:"string",default:"fish"}
    },
    update:function(){
        this.isCollide(this.data.elId)
    },
    isCollide:function(elId){
        const element = elId
        element.addEventListener("collide",()=>{
            if(elId.includes("#fishs")){
                
            }
            else if(elId.includes("#ring")){
                
            }
        })
    },
    updateScore:function(){
        var element = document.querySelector("#Score")
        var count = element.getAttribute("text").value
        var score = parseInt(count)
        score = score+1
        element.setAttribute("text",{value:score})
    },
    updateTarget:function(){
        var element = document.querySelector("#Targets")
        var count = element.getAttribute("text").value
        var currentTargets = parseInt(count)
        currentTargets = currentTargets-1
        element.setAttribute("text",{value:currentTargets})
    },
    Gameover:function(){
        var person = document.querySelector("##diver")
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
        person.setAttribute("dynamic-body",{mass:1})
    },
})