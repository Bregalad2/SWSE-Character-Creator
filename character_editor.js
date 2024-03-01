species = JSON.parse(speciesstring)
classes = JSON.parse(classstring)
feats_check = [
"checkbox-acro-strike",
"checkbox-armor-prof-light",
"checkbox-armor-prof-med",
"checkbox-armor-prof-heavy",
"checkbox-bantha-rush",
"checkbox-charging-fire",
"checkbox-combat-ref",
"checkbox-coord-attack",
"checkbox-cyber-surgery",
"checkbox-dodge",
"checkbox-mobile",
"checkbox-improved-charge",
"checkbox-dread-rage",
"checkbox-dual-weapon-1",
"checkbox-dual-weapon-2",
"checkbox-dual-weapon-3",
"checkbox-exotic-weapons",
"checkbox-extra-rage",
"checkbox-extra-rage-3",
"checkbox-extra-rage-2",
"checkbox-extra-rage-1",
"checkbox-second-wind",
"checkbox-second-wind-3",
"checkbox-second-wind-2",
"checkbox-second-wind-1",
"checkbox-force-sensitivity",
"checkbox-force-training-3",
"checkbox-force-training-2",
"checkbox-force-training-1",
"checkbox-force-training",
"checkbox-force-boon",
"checkbox-improved-def",
"checkbox-improved-damage-thresh-3",
"checkbox-improved-damage-thresh-1",
"checkbox-improved-damage-thresh",
"checkbox-linguist-3",
"checkbox-linguist-1",
"checkbox-linguist",
"checkbox-mart-art-1",
"checkbox-mart-art-2",
"checkbox-mart-art-3",
"checkbox-melee-def",
"checkbox-impoved-disarm",
"checkbox-whirlwind-attack",
"checkbox-might-swing",
"checkbox-pin",
"checkbox-crush",
"checkbox-shiper",
"checkbox-deadeye",
"checkbox-precise-shot",
"checkbox-far-shot",
"checkbox-careful-shot",
"checkbox-point-blank-shot",
"checkbox-power-attack",
"checkbox-cleave",
"checkbox-great-cleave",
"checkbox-power-charge",
"checkbox-quick-draw",
"checkbox-run-attack",
"checkbox-shake-off",
"checkbox-skill-foc",
"checkbox-skill-train",
"checkbox-strong-in-force",
"checkbox-surgical-expert",
"checkbox-tough",
"checkbox-trip",
"checkbox-throw",
"checkbox-vehicular-combat",
"checkbox-weapon-finesse",
"checkbox-weapon-prof",
"checkbox-doube-attack",
"checkbox-burst-fire",
"checkbox-triple-attack",
"checkbox-rapid-shot",
"checkbox-rapid-strike",
"checkbox-triple-crit",
"checkbox-weapon-focus",
"checkbox-self-1",
"checkbox-self-2",
"checkbox-self-3",
"checkbox-self-4",
"checkbox-self-5",
"checkbox-self-6",
"checkbox-self-7"
]
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

abilities_forms = ["str-base",
"str-override",
"dex-base",
"dex-override",
"con-base",
"con-override",
"int-base",
"int-override",
"wis-base",
"wis-override",
"cha-base",
"cha-override",
"wil-base",
"wil-override",]
miscforms = ["torso-misc",
"head-misc",
"limb-misc",
"dmg-red",
"destiny-points",
"fort-misc",
"ref-misc",
"will-misc"
]

function clickchange (name) {
    document.getElementById('namediv').style.display = 'none'
    document.getElementById('classdiv').style.display = 'none'
    document.getElementById('skillsdiv').style.display = 'none'
    document.getElementById('featsdiv').style.display = 'none'
    document.getElementById('abilitiesdiv').style.display = 'none'
    document.getElementById('talentsdiv').style.display = 'none'
    document.getElementById('forcesdiv').style.display = 'none'
    document.getElementById('inventorydiv').style.display = 'none'
    document.getElementById('pdfdiv').style.display = 'none'
    document.getElementById(name+"div").style.display = 'revert'
    document.getElementById('name').style.background = '#c0bfdf'
    document.getElementById('class').style.background = '#c0bfdf'
    document.getElementById('skills').style.background = '#c0bfdf'
    document.getElementById('feats').style.background = '#c0bfdf'
    document.getElementById('abilities').style.background = '#c0bfdf'
    document.getElementById('talents').style.background = '#c0bfdf'
    document.getElementById('forces').style.background = '#c0bfdf'
    document.getElementById('inventory').style.background = '#c0bfdf'
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
    changeclass(document.getElementById("classform"))
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
    if (classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].length+Math.floor(localStorage.getItem("level")/2) <= localStorage.getItem("feats").split(",").length-1) {
        document.getElementById("class-feats").innerHTML = "Feats (you have reached your maximum, make sure you are leveling yourself up correcly before continueing):"
    } else {
        document.getElementById("class-feats").innerHTML = "Feats (you start with "+classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].join(", ")+" and "+Math.floor(localStorage.getItem("level")/2)+" others at your current level and class):"
    }
    linguist = 0
    for (const feat of localStorage.getItem("feats").split(",")){
        if (feat) {
            document.getElementById(feat).checked = true
            console.log(feat)
            if (feat.startsWith("checkbox-linguist")) {linguist += 2}
        }
    }
    for (const feat of feats_text) {
        try {
            document.getElementById(feat).value = localStorage.getItem(feat)
        } catch  {console.log(localStorage.getItem(feat))}
    }
    document.getElementById("languagelabel").innerHTML = "Languages (by default you should have "+species[localStorage.getItem("species")]["species-traits"]["automatic-language"].join(", ")+", and "+String(linguist)+" others):"
    for (const language of languages) {
        document.getElementById(language+"form").value = localStorage.getItem(language)
    }
}
function abilitiesclick () {
    clickchange("abilities")
    var result = JSON.parse('{"str": 0,"dex": 0,"con": 0,"int": 0,"wis": 0,"cha": 0,"wil": 0}')
    for (const id of abilities_forms) {
        document.getElementById(id+"form").value = localStorage.getItem(id)
        if (id.endsWith("-base")) {
            result[id.split("-base")[0]] += parseInt(localStorage.getItem(id), 10) || 0
        }
        if (id.endsWith("-override")) {
            result[id.split("-override")[0]] += parseInt(localStorage.getItem(id), 10) || 0
        }
    }
    for (const key in species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"]) {
        document.getElementById(key+"-species").innerHTML = species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"][key]
        result[key.toLowerCase()] += parseInt(species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"][key]) || 0
    }
    for (const key in result) {
        document.getElementById(key+"-result").innerHTML = String(result[key])+" (mod "+Math.floor((result[key]-10)/2)+")"
    }

}
function talentsclick () {
    clickchange("talents")
    document.getElementById("talentslabel").innerHTML = "Talents (you have "+Math.ceil(localStorage.getItem("level")/2)+" talents based on your current level):"
    console.log(Array(Math.ceil(localStorage.getItem("level")/2)).keys())
    options = "<option value=\"\">None</option>"
    console.log(classes[localStorage.getItem("class")]["talents"])
    for (var item of classes[localStorage.getItem("class")]["talents"]) {
        options += "<option value=\""+item["name"]+"\">"+item["name"]+"</option>"
    }
    if (localStorage.getItem("class-2")) {
        console.log(localStorage.getItem("class-2"))
        for (var item of classes[localStorage.getItem("class-2")]["talents"]) {
        options += "<option value=\""+item["name"]+"\">"+item["name"]+"</option>"
    }}
    for (const number of Array(Math.ceil(localStorage.getItem("level")/2)).keys()) {
        var select = document.getElementById("talents-"+(number+1)+"form")
        select.style.display = "block"
        select.innerHTML = options
    }    
}
function forcesclick () {
    clickchange("forces")
    
}
function inventoryclick () {
    clickchange("inventory")
    
}
function pdfclick () {
    clickchange("pdf")
    try{document.getElementById("character").innerHTML = localStorage.getItem("character")} catch (e) {console.log(e)}
    try{document.getElementById("player").innerHTML = localStorage.getItem("player")} catch (e) {console.log(e)}
    try{document.getElementById("species").innerHTML = species[localStorage.getItem("species")]["name"]} catch (e) {console.log(e)}
    try{document.getElementById("height").innerHTML = localStorage.getItem("height")} catch (e) {console.log(e)}
    try{document.getElementById("weight").innerHTML = localStorage.getItem("weight")} catch (e) {console.log(e)}
    try{document.getElementById("age").innerHTML = localStorage.getItem("age")} catch (e) {console.log(e)}
    try{document.getElementById("sex").innerHTML = localStorage.getItem("sex")} catch (e) {console.log(e)}
    try{document.getElementById("speed").innerHTML = ""} catch (e) {console.log(e)}
    try{if (isNaN(species[localStorage.getItem("species")]["species-traits"]["speed"])) {
        document.getElementById("speed").innerHTML += "Land: "+(parseInt(species[localStorage.getItem("species")]["species-traits"]["speed"]["land"])+(parseInt(localStorage.getItem("speed") || 0)))+", <br>"
        document.getElementById("speed").innerHTML += "Swim: "+species[localStorage.getItem("species")]["species-traits"]["speed"]["swim"]
    } else {document.getElementById("speed").innerHTML +=(parseInt(species[localStorage.getItem("species")]["species-traits"]["speed"])+(parseInt(localStorage.getItem("speed")) || 0))}} catch (e) {console.log(e)}
    try{document.getElementById("species-1").innerHTML = localStorage.getItem("species-feats")} catch (e) {console.log(e)}
    try{document.getElementById("classes").innerHTML = localStorage.getItem("class")+", "+ (localStorage.getItem("class-2") || " ")} catch (e) {console.log(e)}
    try{document.getElementById("level").innerHTML = localStorage.getItem("level")} catch (e) {console.log(e)}
    try{document.getElementById("force-points").innerHTML = parseInt(classes[localStorage.getItem("class")]["forcepoints"]+Math.floor(localStorage.getItem("level")/2))+(parseInt(localStorage.getItem("force-points")) || 0)} catch (e) {console.log(e)}
    try{document.getElementById("base-attack").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["base-attack-bonus"]+(parseInt(localStorage.getItem("base-attack"))|| 0)} catch (e) {console.log(e)}
    try{document.getElementById("fort-lvl").innerHTML = Math.floor(localStorage.getItem("level")/2)} catch (e) {console.log(e)}
    try{document.getElementById("ref-lvl").innerHTML = Math.floor(localStorage.getItem("level")/2)} catch (e) {console.log(e)}
    try{document.getElementById("will-lvl").innerHTML = Math.floor(localStorage.getItem("level")/2)} catch (e) {console.log(e)}
    try{document.getElementById("fort-class").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["defense-bonuses"]["Fortitude"] || 0} catch (e) {console.log(e)}
    try{document.getElementById("ref-class").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["defense-bonuses"]["Reflex"] || 0} catch (e) {console.log(e)}
    try{document.getElementById("will-class").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["defense-bonuses"]["Will"] || 0} catch (e) {console.log(e)}
    try{document.getElementById("credits").innerHTML = localStorage.getItem("credits")} catch (e) {console.log(e)}
    try{document.getElementById("force-uses").innerHTML = Math.floor(localStorage.getItem("level")/2)+1} catch (e) {console.log(e)}
    try{for (const skill of localStorage.getItem("skills").split(",")) {
        if (skill) {document.getElementById(skill).innerHTML = "  ▣"}
    }} catch (e) {console.log(e)}
    try{for (const feat of localStorage.getItem("feats").split(",")) {
        if (feat) {document.getElementById(feat.split("checkbox-")[1]).innerHTML = "▣"}
    }} catch (e) {console.log(e)}
    try{linguist = 0} catch (e) {console.log(e)}
    try{for (const feat of feats_text) {
        try {
            document.getElementById(feat.split("checkbox-")[1]).innerHTML = localStorage.getItem(feat)
            if (feat.startswith("linguist")) {linguist += 2}
        } catch  {console.log(localStorage.getItem(feat))}
    }} catch (e) {console.log(e)}
    try{for (const language of languages) {
        document.getElementById(language).innerHTML = localStorage.getItem(language)
    }} catch (e) {console.log(e)}
    try{var result = JSON.parse('{"str": 0,"dex": 0,"con": 0,"int": 0,"wis": 0,"cha": 0,"wil": 0}')} catch (e) {console.log(e)}
    try{for (const id of abilities_forms) {
        if (id.endsWith("-base")) {
            result[id.split("-base")[0]] += parseInt(localStorage.getItem(id), 10) || 0
        }
        if (id.endsWith("-override")) {
            result[id.split("-override")[0]] += parseInt(localStorage.getItem(id), 10) || 0
        }
    }} catch (e) {console.log(e)}
    try{for (const key in species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"]) {
        result[key.toLowerCase()] += parseInt(species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"][key]) || 0
    }} catch (e) {console.log(e)}
    try{for (const key in result) {
        document.getElementById(key+"-score").innerHTML = String(result[key])
        document.getElementById(key+"-mod").innerHTML = Math.floor((result[key]-10)/2)
    }} catch (e) {console.log(e)}
    try{for (var id of miscforms) {
        console.log(id)
        document.getElementById(id).innerHTML = localStorage.getItem(id) || 0
    }} catch (e) {console.log(e)}
    try{document.getElementById("fort-abil").innerHTML = result["con"]} catch (e) {console.log(e)}
    try{document.getElementById("ref-abil").innerHTML = result["dex"]} catch (e) {console.log(e)}
    try{document.getElementById("will-abil").innerHTML = result["wil"]} catch (e) {console.log(e)}
}
function downloadLocalStorageAsJSON() {
    let localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        localStorageData[key] = value;
    }
    let json = JSON.stringify(localStorageData);
    let blob = new Blob([json], { type: "application/json" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = (localStorage.getItem("character") || "Unnamed")+".character";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function uploadJSONToLocalStorage(event) {
    pdfclick()
    const file = event.target.files[0];
    if (!file) return;
    let reader = new FileReader();
    reader.onload = function(event) {
        let jsonData = JSON.parse(event.target.result);
        for (let key in jsonData) {
            if (jsonData.hasOwnProperty(key)) {
                localStorage.setItem(key, jsonData[key]);
            }
        }
        console.log("Data has been successfully written to local storage!");
    };
    reader.readAsText(file);
    nameclick()
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
    if (element.value) {
        localStorage.setItem(element.id.split("form")[0], element.value)
    } else {
        localStorage.removeItem(element.id.split("form")[0])
    }
}

function changeclass (element) {
    currentclass = element.value
    save(element)
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
function changeclass2 (element) {
    currentclass = element.value
    save(element)
    if (!currentclass) {
        document.getElementById("class-2desc").innerHTML = ""
        return
    }
    document.getElementById("class-2desc").innerHTML = classes[currentclass]["abilities"]+" You also receive "
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Fortitude"]) {
        document.getElementById("class-2desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Fortitude"]+" to your Fortitude defence, "
    }
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Reflex"]) {
        document.getElementById("class-2desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Reflex"]+" to your Reflex defence, "
    }
    if (classes[currentclass]["classfeatures"]["defense-bonuses"]["Will"]) {
        document.getElementById("class-2desc").innerHTML += "+"+classes[currentclass]["classfeatures"]["defense-bonuses"]["Will"]+" to your Will defence, "
    }
    document.getElementById("class-2desc").innerHTML += classes[currentclass]["classfeatures"]["other-feats"].join(", ")
    document.getElementById("class-2desc").innerHTML += " and "+classes[currentclass]["classfeatures"]["starting-skills"]+" other starting skills of your choice."
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
        localStorage.setItem("feats", feats.join(","))
        featsclick()
    }
    if (button.type == "text") {
        localStorage.setItem(button.id, button.value)
        
    }
    if (classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].length+Math.floor(localStorage.getItem("level")/2) <= localStorage.getItem("feats").split(",").length-1) {
        document.getElementById("class-feats").innerHTML = "Feats (you have reached your maximum, make sure you are leveling yourself up correcly before continueing):"
    } else {
        document.getElementById("class-feats").innerHTML = "Feats (you start with "+classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].join(", ")+" and "+Math.floor(localStorage.getItem("level")/2)+" others at your current level and class):"
    }
    
}
function saveability (input) {
    save(input)
    var result = JSON.parse('{"str": 0,"dex": 0,"con": 0,"int": 0,"wis": 0,"cha": 0,"wil": 0}')
    for (const id of abilities_forms) {
        document.getElementById(id+"form").value = localStorage.getItem(id)
        if (id.endsWith("-base")) {
            result[id.split("-base")[0]] += parseInt(localStorage.getItem(id), 10) || 0
        }
        if (id.endsWith("-override")) {
            result[id.split("-override")[0]] += parseInt(localStorage.getItem(id), 10) || 0
        }
    }
    for (const key in species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"]) {
        document.getElementById(key+"-species").innerHTML = species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"][key]
        result[key.toLowerCase()] += parseInt(species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"][key]) || 0
    }
    for (const key in result) {
        document.getElementById(key+"-result").innerHTML = String(result[key])+" (mod "+Math.floor((result[key]-10)/2)+")"
    }
}

function savetalent (select) {
    save(select)
    var label = document.getElementById(select.id.split("form")[0]+"desc")
    label.innerHTML = ""
    for (var item of classes[localStorage.getItem("class")]["talents"]) {
        if (item["name"] == select.value) {
            label.innerHTML += item["description"]
            return
        }
    }
    
}
