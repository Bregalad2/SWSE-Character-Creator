namediv = document.getElementById('namediv')
classdiv = document.getElementById('classdiv')
skillsdiv = document.getElementById('skillsdiv')
abilitiesdiv = document.getElementById('abilitiesdiv')
pdfdiv = document.getElementById('pdfdiv')
species = JSON.parse(speciesstring)
classes = JSON.parse(classstring)

function nameclick () {
    namediv.style.display      = 'revert'
    classdiv.style.display     = 'none'
    skillsdiv.style.display    = 'none'
    abilitiesdiv.style.display = 'none'
    pdfdiv.style.display       = 'none'
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
    namediv.style.display      = 'none'
    classdiv.style.display     = 'revert'
    skillsdiv.style.display    = 'none'
    abilitiesdiv.style.display = 'none'
    pdfdiv.style.display       = 'none'
    document.getElementById("classform").value = localStorage.getItem("class")
    changeclass()
}
function skillsclick () {
    namediv.style.display      = 'none'
    classdiv.style.display     = 'none'
    skillsdiv.style.display    = 'revert'
    abilitiesdiv.style.display = 'none'
    pdfdiv.style.display       = 'none'
}
function abilitiesclick () {
    namediv.style.display      = 'none'
    classdiv.style.display     = 'none'
    skillsdiv.style.display    = 'none'
    abilitiesdiv.style.display = 'revert'
    pdfdiv.style.display       = 'none'
}
function pdfclick () {
    namediv.style.display      = 'none'
    classdiv.style.display     = 'none'
    skillsdiv.style.display    = 'none'
    abilitiesdiv.style.display = 'none'
    pdfdiv.style.display       = 'revert'
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
    document.getElementById("species-feats").innerHTML = localStorage.getItem("species-feats")
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
}

function printpdf () {
    pdfclick()
    var prtContent = document.getElementById("pdfdiv")
    var WinPrint = window.open()
    WinPrint.document.write(prtContent.innerHTML)
    WinPrint.document.close()
    WinPrint.focus()
    WinPrint.print()
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
