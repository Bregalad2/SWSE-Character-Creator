species = JSON.parse(speciesstring)
classes = JSON.parse(classstring)

function clickchange (name) {
    document.getElementById('namediv').style.display = 'none'
    document.getElementById('classdiv').style.display = 'none'
    document.getElementById('skillsdiv').style.display = 'none'
    document.getElementById('featsdiv').style.display = 'none'
    document.getElementById('abilitiesdiv').style.display = 'none'
    document.getElementById('pdfdiv').style.display = 'none'
    document.getElementById(name+"div").style.display = 'revert'
    document.getElementById('name').style.background = '#c0bfdf'
    document.getElementById('class').style.background = '#c0bfdf'
    document.getElementById('skills').style.background = '#c0bfdf'
    document.getElementById('feats').style.background = '#c0bfdf'
    document.getElementById('abilities').style.background = '#c0bfdf'
    document.getElementById('pdf').style.background = '#c0bfdf'
    document.getElementById(name).style.background = "#9b96ca"


}

function nameclick () {
    clickchange("name")
    save()
    document.getElementById("characterform").value = localStorage.getItem("character")
    document.getElementById("playerform").value = localStorage.getItem("player")
    document.getElementById("speciesform").value = localStorage.getItem("species")
    document.getElementById("weightform").value = localStorage.getItem("weight")
    document.getElementById("heightform").value = localStorage.getItem("height")
    document.getElementById("ageform").value = localStorage.getItem("age")
    document.getElementById("sexform").value = localStorage.getItem("sex")
    changespecies()
}
function classclick () {
    clickchange("class")
    save()
    document.getElementById("classform").value = localStorage.getItem("class")
    changeclass()
    document.getElementById("levelform").value = localStorage.getItem("level")
    document.getElementById("creditform").value = localStorage.getItem("credits")
}
function skillsclick () {
    clickchange("skills")
    if (classes[localStorage.getItem("class")]["classfeatures"]["starting-skills"] <= localStorage.getItem("skills").split(",").length-1) {
        document.getElementById("skilllabel").innerHTML = "Skills (you have reached your maximum, make sure you are leveling yourself up correcly before continueing):"
    } else {
        document.getElementById("skilllabel").innerHTML = "Skills (you have "+classes[localStorage.getItem("class")]["classfeatures"]["starting-skills"]+" by default):"
    }
    for (const skill of localStorage.getItem("skills").split(",")){
        if (skill) {
            document.getElementById(skill+"-checkbox").checked = true
        }
    }
    save()
}
function abilitiesclick () {
    clickchange("feats")
    save()
}
function abilitiesclick () {
    clickchange("abilities")
    save()
}
function pdfclick () {
    clickchange("pdf")
    document.getElementById("character").innerHTML = localStorage.getItem("character")
    document.getElementById("player").innerHTML = localStorage.getItem("player")
    document.getElementById("species").innerHTML = species[localStorage.getItem("species")]["name"]
    document.getElementById("height").innerHTML = localStorage.getItem("height")
    document.getElementById("weight").innerHTML = localStorage.getItem("weight")
    document.getElementById("age").innerHTML = localStorage.getItem("age")
    document.getElementById("sex").innerHTML = localStorage.getItem("sex")
    document.getElementById("speed").innerHTML = ""
    if (isNaN(species[currentspecies]["species-traits"]["speed"])) {
        document.getElementById("speed").innerHTML += "Land: "+species[currentspecies]["species-traits"]["speed"]["land"]+", <br>"
        document.getElementById("speed").innerHTML += "Swim: "+species[currentspecies]["species-traits"]["speed"]["swim"]
    } else {document.getElementById("speed").innerHTML +=species[currentspecies]["species-traits"]["speed"]}
    document.getElementById("species-1").innerHTML = localStorage.getItem("species-feats")
    document.getElementById("classes").innerHTML = localStorage.getItem("class")+", "+ (localStorage.getItem("class2") || " ")
    document.getElementById("level").innerHTML = localStorage.getItem("level")
    document.getElementById("force-points").innerHTML = classes[localStorage.getItem("class")]["forcepoints"]+Math.floor(localStorage.getItem("level")/2)
    document.getElementById("base-attack").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["base-attack-bonus"]
    document.getElementById("fort-lvl").innerHTML = Math.floor(localStorage.getItem("level")/2)
    document.getElementById("ref-lvl").innerHTML = Math.floor(localStorage.getItem("level")/2)
    document.getElementById("will-lvl").innerHTML = Math.floor(localStorage.getItem("level")/2)
    document.getElementById("fort-class").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["defense-bonuses"]["Fortitude"] || 0
    document.getElementById("ref-class").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["defense-bonuses"]["Reflex"] || 0
    document.getElementById("will-class").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["defense-bonuses"]["Will"] || 0
    document.getElementById("credits").innerHTML = localStorage.getItem("credits")
    document.getElementById("force-uses").innerHTML = Math.floor(localStorage.getItem("level")/2)+1
    for (const skill of localStorage.getItem("skills").split(",")) {
        if (skill) {document.getElementById(skill).innerHTML += "  ▣"}
    }
}

function processhuman (currentspecies) {
    interestring = "<label>Choose Two Bonus Feats:</label>"
    interestring += "<form></form><select name=\"bonus-feat\" id=\"bonus-feat\" onchange=\"humansave()\">"
    for (item in species[currentspecies]["species-traits"]["bonus-traits"]){
        interestring += "<option value="+species[currentspecies]["species-traits"]["bonus-traits"][item]["name"].replace(" ", "-")+">"+species[currentspecies]["species-traits"]["bonus-traits"][item]["name"]+": "+species[currentspecies]["species-traits"]["bonus-traits"][item]["description"]+"</option>"
    }
    interestring += "</select><select name=\"bonus-feat2\" id=\"bonus-feat2\" onchange=\"humansave()\">"
    for (item in species[currentspecies]["species-traits"]["bonus-traits"]){
        interestring += "<option value="+species[currentspecies]["species-traits"]["bonus-traits"][item]["name"].replace(" ", "-")+">"+species[currentspecies]["species-traits"]["bonus-traits"][item]["name"]+": "+species[currentspecies]["species-traits"]["bonus-traits"][item]["description"]+"</option>"
    }
    interestring += "</select></form>"
    document.getElementById("bonus-traits").innerHTML = interestring
    document.getElementById("bonus-feat").value = localStorage.getItem("species-feats").split(", ")[0]
    document.getElementById("bonus-feat2").value = localStorage.getItem("species-feats").split(", ")[1]
}
function humansave () {
    localStorage.setItem("species-feats", document.getElementById("bonus-feat").value+", "+document.getElementById("bonus-feat2").value)
}

function changespecies() {
    currentspecies = document.getElementById("speciesform").value
    localStorage.setItem("species", currentspecies)
    document.getElementById("species-description").innerHTML = species[currentspecies]["description"]
    document.getElementById("species-names").innerHTML = "Example Names: "+species[currentspecies]["example-names"].join(", ")
    interestring = ""
    for (item in species[currentspecies]["species-traits"]["ability-score-adjustment"]) {
        if (species[currentspecies]["species-traits"]["ability-score-adjustment"][item] != 0 ) {
            interestring += item+": "+species[currentspecies]["species-traits"]["ability-score-adjustment"][item]+", "
        }
    }
    interestring += "Size: "+species[currentspecies]["species-traits"]["size"]+", "
    if (isNaN(species[currentspecies]["species-traits"]["speed"])) {
        interestring += "Land Speed: "+species[currentspecies]["species-traits"]["speed"]["land"]+", "
        interestring += "Swim Speed: "+species[currentspecies]["species-traits"]["speed"]["swim"]
    } else {interestring += "Speed: "+species[currentspecies]["species-traits"]["speed"]}
    document.getElementById("species-able-size-speed").innerHTML = interestring
    if (currentspecies=="Near-Human") {
        processhuman(currentspecies)
    } else {
        document.getElementById("bonus-traits").innerHTML = ""
        localStorage.setItem("species-feats", "")
        specialactions = ""
        for (item in species[currentspecies]["species-traits"]["bonus-traits"]){
            document.getElementById("bonus-traits").innerHTML += "<p class=trait>"+species[currentspecies]["species-traits"]["bonus-traits"][item]["name"]+": "+species[currentspecies]["species-traits"]["bonus-traits"][item]["description"]+"</p>"
            specialactions += species[currentspecies]["species-traits"]["bonus-traits"][item]["name"]+", "
        }
        localStorage.setItem("species-feats", specialactions)
    }
}

function save() {
    localStorage.setItem("character", document.getElementById("characterform").value)
    localStorage.setItem("player", document.getElementById("playerform").value)
    localStorage.setItem("weight", document.getElementById("weightform").value)
    localStorage.setItem("height", document.getElementById("heightform").value)
    localStorage.setItem("age", document.getElementById("ageform").value)
    localStorage.setItem("sex", document.getElementById("sexform").value)
    localStorage.setItem("level", document.getElementById("levelform").value)
    if (document.getElementById("levelform").value > 11) {
        
    } else if (document.getElementById("levelform").value > 1) {
        document.getElementById("multiclass").style.display = 'revert'
    } else {
        localStorage.setItem("class2", undefined)
        document.getElementById("multiclass").style.display = 'none'
    }
    localStorage.setItem("credits", document.getElementById("creditform").value)
}

function changeclass () {
    currentclass = document.getElementById("classform").value
    localStorage.setItem("class", currentclass)
    document.getElementById("class-desc").innerHTML = classes[currentclass]["abilities"]+" You also receive "
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Fortitude"]) {
        document.getElementById("class-desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Fortitude"]+" to your Fortitude defence, "
    }
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Reflex"]) {
        document.getElementById("class-desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Reflex"]+" to your Reflex defence, "
    }
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Will"]) {
        document.getElementById("class-desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Will"]+" to your Will defence, "
    }
    document.getElementById("class-desc").innerHTML += classes[currentclass]["classfeatures"]["other-feats"].join(", ")
    document.getElementById("class-desc").innerHTML += " and "+classes[currentclass]["classfeatures"]["starting-skills"]+" other starting skills of your choice."
    
}
function changeclass2 () {
    currentclass = document.getElementById("classform2").value
    localStorage.setItem("class2", currentclass)
    document.getElementById("class2-desc").innerHTML = classes[currentclass]["abilities"]+" You also receive "
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Fortitude"]) {
        document.getElementById("class2-desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Fortitude"]+" to your Fortitude defence, "
    }
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Reflex"]) {
        document.getElementById("class2-desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Reflex"]+" to your Reflex defence, "
    }
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Will"]) {
        document.getElementById("class2-desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Will"]+" to your Will defence, "
    }
    document.getElementById("class2-desc").innerHTML += classes[currentclass]["classfeatures"]["other-feats"].join(", ")
    document.getElementById("class2-desc").innerHTML += " and "+classes[currentclass]["classfeatures"]["starting-skills"]+" other starting skills of your choice."
}

function saveskill () {
    checked_skills = ""
    for (const skill of document.getElementsByClassName("skill")) {
        if (skill.checked) {
            checked_skills += skill.value+","
        }
    }
    if (classes[localStorage.getItem("class")]["classfeatures"]["starting-skills"] <= checked_skills.split(",").length-1) {
        document.getElementById("skilllabel").innerHTML = "Skills (you have reached your maximum, make sure you are leveling yourself up correcly before continueing):"
        console.log(classes[localStorage.getItem("class")]["classfeatures"]["starting-skills"], checked_skills.split(",").length)
    } else {
        document.getElementById("skilllabel").innerHTML = "Skills (you have "+classes[localStorage.getItem("class")]["classfeatures"]["starting-skills"]+" by default):"
    }
    localStorage.setItem("skills", checked_skills)
}

function featclick (button) {
    localStorage.setItem("feats", localStorage.getItem("feats")+button.id)
}
