species = JSON.parse(speciesstring)
classes = JSON.parse(classstring)
feats_text = [
    "checkbox-exotic-weapon-1",
    "checkbox-exotic-weapon-2",
    "checkbox-exotic-weapon-3",
    "checkbox-skill-foc-1",
    "checkbox-skill-foc-2",
    "checkbox-skill-foc-3",
    "checkbox-skill-foc-4",
    "checkbox-skill-train-1",
    "checkbox-skill-train-2",
    "checkbox-skill-train-3",
    "checkbox-skill-train-4",
    "checkbox-skill-train-5",
    "checkbox-weapon-prof-1",
    "checkbox-weapon-pro-2",
    "checkbox-weapon-pro-3",
    "checkbox-weapon-pro-4",
    "checkbox-weapon-pro-5",
    "checkbox-weapon-pro6",
    "checkbox-burst-attack-1",
    "checkbox-burst-attack-2",
    "checkbox-burst-attack-3",
    "checkbox-triple-attack-1",
    "checkbox-triple-attack-2",
    "checkbox-triple-attack-3",
    "checkbox-triple-crit-1",
    "checkbox-triple-crit-2",
    "checkbox-triple-crit-3",
    "checkbox-weapon-focus-1",
    "checkbox-weapon-focus-2",
    "checkbox-weapon-focus-3",
    "checkbox-self-fill-1",
    "checkbox-self-fill-2",
    "checkbox-self-fill-3",
    "checkbox-self-fill-4",
    "checkbox-self-fill-5",
    "checkbox-self-fill-6",
    "checkbox-self-fill-7"]

languages=["language-1",
"language-2",
"language-3",
"language-4",
"language-5",
"language-6",
"language-7"]

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
    
    document.getElementById("classform").value = localStorage.getItem("class")
    changeclass()
    document.getElementById("levelform").value = localStorage.getItem("level")
    document.getElementById("creditsform").value = localStorage.getItem("credits")
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
    
}
function featsclick () {
    clickchange("feats")
    console.log(classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].length+Math.floor(localStorage.getItem("level")/2) , localStorage.getItem("feats").split(",").length-1)
    if (classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].length+Math.floor(localStorage.getItem("level")/2) <= localStorage.getItem("feats").split(",").length-1) {
        document.getElementById("class-feats").innerHTML = "Feats (you have reached your maximum, make sure you are leveling yourself up correcly before continueing):"
    } else {
        document.getElementById("class-feats").innerHTML = "Feats (you start with "+classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].join(", ")+" and "+Math.floor(localStorage.getItem("level")/2)+" others at your current level and class):"
    }
    for (const feat of localStorage.getItem("feats").split(",")){
        if (feat) {
            document.getElementById(feat).checked = true
        }
    }
    for (const feat of feats_text) {
        try {
            document.getElementById(feat).value = localStorage.getItem(feat)
        } catch  {console.log(localStorage.getItem(feat))}
        console.log(localStorage.getItem(feat))
    }
}
function abilitiesclick () {
    clickchange("abilities")
    
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
        if (skill) {document.getElementById(skill).innerHTML = "  ▣"}
    }
    for (const feat of localStorage.getItem("feats").split(",")) {
        if (feat) {document.getElementById(feat.split("checkbox-")[1]).innerHTML = "▣"}
    }
    for (const feat of feats_text) {
        try {
            document.getElementById(feat.split("checkbox-")[1]).innerHTML = localStorage.getItem(feat)
        } catch  {console.log(localStorage.getItem(feat))}
        console.log(localStorage.getItem(feat))
    }
}

function processhuman (currentspecies) {
    interestring = "<label>Choose Two Bonus Feats:</label>"
    interestring += "<form></form><select name=\"bonus-feat\" id=\"bonus-feat\" onchange=\"human\">"
    for (item in species[currentspecies]["species-traits"]["bonus-traits"]){
        interestring += "<option value="+species[currentspecies]["species-traits"]["bonus-traits"][item]["name"].replace(" ", "-")+">"+species[currentspecies]["species-traits"]["bonus-traits"][item]["name"]+": "+species[currentspecies]["species-traits"]["bonus-traits"][item]["description"]+"</option>"
    }
    interestring += "</select><select name=\"bonus-feat2\" id=\"bonus-feat2\" onchange=\"human\">"
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

function save(element) {
    localStorage.setItem(element.id.split("form")[0], element.value)
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
    if (button.type == "checkbox") {
        feats = localStorage.getItem("feats").split(",")
        if ((button.checked) && !(button.value in feats)) {
            feats.push(button.value)
        } else if (!(button.checked) && !(button.value in feats)) {
            feats[feats.indexOf(button.value)] = ""
        }
        feats = feats.filter(item => item !== "")
        console.log(feats)
        localStorage.setItem("feats", feats.join(","))
    }
    if (button.type == "text") {
        localStorage.setItem(button.id, button.value)
        console.log(button.value)
        
    }
    if (classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].length+Math.floor(localStorage.getItem("level")/2) <= localStorage.getItem("feats").split(",").length-1) {
        document.getElementById("class-feats").innerHTML = "Feats (you have reached your maximum, make sure you are leveling yourself up correcly before continueing):"
    } else {
        document.getElementById("class-feats").innerHTML = "Feats (you start with "+classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].join(", ")+" and "+Math.floor(localStorage.getItem("level")/2)+" others at your current level and class):"
    }
}
