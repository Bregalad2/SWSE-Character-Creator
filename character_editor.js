const species = JSON.parse(speciesstring)
const classes = JSON.parse(classstring)
const talenttrees = JSON.parse(talenttreesjson)
const armor = JSON.parse(armorjson)
const weapons = JSON.parse(weaponjson)

var mywindow = undefined;

const feats_check = [
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
const feats_text = [
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

const languages=["language-1",
"language-2",
"language-3",
"language-4",
"language-5",
"language-6",
"language-7"]

const abilities_forms = ["str-base",
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
const miscforms = ["torso-misc",
"head-misc",
"limb-misc",
"dmg-red",
"destiny-points",
"fort-misc",
"ref-misc",
"will-misc"
]
const armor_ids = [
    "armor",
    "armor-speed",
    "armor-fort-def",
    "armor-ref-def",
    "armor-dex-def",
    "armor-notes"]
const weapon_ids = [
    "weapon-1",
    "weapon-1-range",
    "weapon-1-att",
    "weapon-1-dmg",
    "weapon-1-crit",
    "weapon-1-type",
    "weapon-1-notes",
    "weapon-2",
    "weapon-2-range",
    "weapon-2-att",
    "weapon-2-dmg",
    "weapon-2-crit",
    "weapon-2-type",
    "weapon-2-notes",
    "weapon-3",
    "weapon-3-range",
    "weapon-3-att",
    "weapon-3-dmg",
    "weapon-3-crit",
    "weapon-3-type",
    "weapon-3-notes",
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
    document.getElementById("destinyform").value = localStorage.getItem("destiny")
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
    if (classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].length+Math.floor(localStorage.getItem("level")/2)) <= localStorage.getItem("feats").split(",").length-1) {
        document.getElementById("class-feats").innerHTML = "Feats (you have reached your maximum, make sure you are leveling yourself up correcly before continuing):"
    } else {
        document.getElementById("class-feats").innerHTML = "Feats (you start with "+classes[localStorage.getItem("class")]["classfeatures"]["other-feats"].join(", ")+" and "+Math.floor(localStorage.getItem("level")/2)+" others at your current level and class):"
    }
    linguist = 0
    for (const feat of localStorage.getItem("feats").split(",")){
        if (feat) {
            console.log(feat)
            document.getElementById(feat).checked = true
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
    options = ""
    for (const class_ in classes) {
        for (const item of classes[class_]["talents"]) {
            options += "<option value=\""+item["name"]+"\">"+item["name"]+"</option>"
        }
    }
    for (const item in talenttrees) {
        for (const talent of talenttrees[item]["talents"]) {
            options += "<option value=\""+talent["name"]+"\">"+talent["name"]+"</option>"
        }
    }
    document.getElementById("talents-list").innerHTML = options
    for (const number of Array(Math.ceil(parseInt(localStorage.getItem("level"))/2)+1).keys()) {
        talent = document.getElementById("talents-"+(number+1)+"form")
        talent.style.display = "block"
        talent.value = localStorage.getItem("talents-"+(number+1))
    }
}
function forcesclick () {
    clickchange("forces")
    for (const name of ["al","aug","cog","sor","tel","tec","vit"]) {
        for (const number of [1, 2, 3]) {
            document.getElementById(name+"-"+number+"form").checked = (localStorage.getItem(name+"-"+number) == "|")
        }
    }
    for (const item of document.getElementsByClassName("force-item")){
        item.value = localStorage.getItem(item.id.split("form")[0])
    }
}
function inventoryclick () {
    clickchange("inventory")
    var armor_data_list = ""
    var weapon_data_list = ""
    for (const armor_ in armor) {
        armor_data_list += "<option value=\""+armor_+"\">"+armor_+"</option>"
    }
    for (const weapon_ in weapons) {
        weapon_data_list += "<option value=\""+weapon_+"\">"+weapon_+"</option>"
    }
    document.getElementById("armor-list").innerHTML = armor_data_list
    document.getElementById("weapon-list").innerHTML = weapon_data_list
    for (const armor_ of armor_ids) {
        document.getElementById(armor_+'form').value = localStorage.getItem(armor_)
    }
    for (const weapon_ of weapon_ids) {
        document.getElementById(weapon_+'form').value = localStorage.getItem(weapon_)
    }
    document.getElementById("shieldform").value = localStorage.getItem("shield")
    for (const number of Array(16).keys()) {
        document.getElementById("gear-"+(number+1)+'form').value = localStorage.getItem("gear-"+(number+1))
        document.getElementById("w-"+(number+1)+'form').value = localStorage.getItem("w-"+(number+1))
    }
    const limit = Math.round(((parseInt(localStorage.getItem("str-base"), 10)+(parseInt(localStorage.getItem("str-override"), 10) || 0)+species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"]["str"])**2)/2)
    document.getElementById("inventorylabel").innerHTML = "Your inventory (you can hold up to "+limit+"kg before being encumbered):"
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
    try{document.getElementById("destiny").innerHTML = localStorage.getItem("destiny")} catch (e) {console.log(e)}
    try{document.getElementById("checkpoints").innerHTML = localStorage.getItem("checkpoints")} catch (e) {console.log(e)}
    try{document.getElementById("speed").innerHTML = ""} catch (e) {console.log(e)}
    try{if (isNaN(species[localStorage.getItem("species")]["species-traits"]["speed"])) {
        document.getElementById("speed").innerHTML += "Land: "+(parseInt(species[localStorage.getItem("species")]["species-traits"]["speed"]["land"])+(parseInt(localStorage.getItem("speed") || 0)))+", <br>"
        document.getElementById("speed").innerHTML += "Swim: "+species[localStorage.getItem("species")]["species-traits"]["speed"]["swim"]
    } else {document.getElementById("speed").innerHTML +=(parseInt(species[localStorage.getItem("species")]["species-traits"]["speed"])+(parseInt(localStorage.getItem("speed")) || 0))}} catch (e) {console.log(e)}
    try{document.getElementById("species-notes-1").innerHTML = localStorage.getItem("species-feats")} catch (e) {console.log(e)}
    try{document.getElementById("classes").innerHTML = localStorage.getItem("class")+", "+ (localStorage.getItem("class2") || " ")} catch (e) {console.log(e)}
    try{document.getElementById("level").innerHTML = localStorage.getItem("level")} catch (e) {console.log(e)}
    try{document.getElementById("force-points").innerHTML = parseInt(classes[localStorage.getItem("class")]["forcepoints"]+Math.floor(localStorage.getItem("level")/2))+(parseInt(localStorage.getItem("force-points")) || 0)} catch (e) {console.log(e)}
    try{document.getElementById("base-attack").innerHTML = classes[localStorage.getItem("class")]["classfeatures"]["base-attack-bonus"]+(parseInt(localStorage.getItem("base-attack"))|| 0)} catch (e) {console.log(e)}
    try{document.getElementById("fort-lvl").innerHTML = 0} catch (e) {console.log(e)}
    try{document.getElementById("ref-lvl").innerHTML = 0} catch (e) {console.log(e)}
    try{document.getElementById("will-lvl").innerHTML = 0} catch (e) {console.log(e)}
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
        document.getElementById(id).innerHTML = localStorage.getItem(id) || 0
    }} catch (e) {console.log(e)}
    try{document.getElementById("fort-abil").innerHTML = Math.floor((result["con"]-10)/2)} catch (e) {console.log(e)}
    try{document.getElementById("ref-abil").innerHTML = Math.min(Math.floor((result["dex"]-10)/2), (localStorage.getItem("armor-dex-def") || 100))} catch (e) {console.log(e)}
    try{document.getElementById("will-abil").innerHTML = Math.floor((result["wil"]-10)/2)} catch (e) {console.log(e)}
    try{
    for (const number of Array(Math.ceil(parseInt(localStorage.getItem("level"))/2)+1).keys()) {
        document.getElementById("talents-"+(number+1)).innerHTML = localStorage.getItem("talents-"+(number+1))
    }
    } catch (e) {console.log(e)}
    try{
    for (const name of ["al","aug","cog","sor","tel","tec","vit"]) {
        for (const number of [1, 2, 3]) {
            document.getElementById(name+"-"+number).innerHTML = localStorage.getItem(name+"-"+number)
        }
    }
    } catch (e) {console.log(e)}
    try{
        for (const item of document.getElementsByClassName("force-teq")) {
            item.innerHTML = localStorage.getItem(item.id)
        }
        for (const item of document.getElementsByClassName("force-sec")) {
            item.innerHTML = localStorage.getItem(item.id)
        }
        document.getElementById("dark-side").innerHTML = localStorage.getItem("dark-side")
        document.getElementById("dark-side-wis").innerHTML = result["wis"]
        document.getElementById("dark-side-total").innerHTML = Math.floor(parseInt(localStorage.getItem("dark-side"))-result["wis"])
    } catch (e) {console.log(e)}
    try{
        for (const armor_ of armor_ids) {
            document.getElementById(armor_).innerHTML = localStorage.getItem(armor_)
        }
        for (const weapon_ of weapon_ids) {
            document.getElementById(weapon_).innerHTML = localStorage.getItem(weapon_)
        }
        for (const number of Array(16).keys()) {
            document.getElementById("gear-"+(number+1)).innerHTML = localStorage.getItem("gear-"+(number+1))
            document.getElementById("w-"+(number+1)).innerHTML = localStorage.getItem("w-"+(number+1))
        }
        const limit = Math.round(((parseInt(localStorage.getItem("str-base"), 10)+(parseInt(localStorage.getItem("str-override"), 10) || 0)+species[localStorage.getItem("species")]["species-traits"]["ability-score-adjustment"]["str"])**2)/2)
        document.getElementById("carry-cap").innerHTML = limit
    } catch (e) {console.log(e)}
    try{
        document.getElementById("ref-armor").innerHTML = parseInt(localStorage.getItem("armor-ref-def")) || 0
        document.getElementById("fort-armor").innerHTML = parseInt(localStorage.getItem("armor-fort-def")) || 0
        document.getElementById("torso-fort").innerHTML = parseInt(localStorage.getItem("armor-fort-def")) || 0
        document.getElementById("will-armor").innerHTML = "0"
    } catch (e) {console.log(e)}
    try{
        for (const type of ["ref", "will", "fort"]){
            value = 0
            for (const additive of ["lvl", "armor", "abil", "class", "misc"]) {
              value += parseInt(document.getElementById(type+"-"+additive).innerHTML)
            }
            document.getElementById(type+"-def").innerHTML = value
        }
    } catch (e) {console.log(e)}
    try {
        document.getElementById("torso").innerHTML = parseInt(document.getElementById("torso-fort").innerHTML, 10) + parseInt(document.getElementById("torso-misc").innerHTML, 10) + 10
        document.getElementById("torso-head").innerHTML = parseInt(document.getElementById("torso").innerHTML, 10)/2+parseInt(document.getElementById("torso-fort").innerHTML, 10)
        document.getElementById("torso-limb").innerHTML = parseInt(document.getElementById("torso").innerHTML, 10)/2
        document.getElementById("head").innerHTML = parseInt(document.getElementById("head-misc").innerHTML, 10) + parseInt(document.getElementById("torso-head").innerHTML, 10)
        document.getElementById("limb").innerHTML = parseInt(document.getElementById("limb-misc").innerHTML, 10) + parseInt(document.getElementById("torso-limb").innerHTML, 10)
    } catch (e) {console.log(e)}
    try {document.getElementById("portrait").href.baseVal = localStorage.getItem("portrait")} catch (e) {console.log(e)}
    try {document.getElementById("shield").innerHTML = localStorage.getItem("shield")} catch (e) {console.log(e)}


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
    const file = event.target.files[0]
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
    if (localStorage.getItem("feats") == null) {localStorage.setItem("feats", "")}
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
    for (const talent_tree in talenttrees) {
        for (talent of talenttrees[talent_tree]["talents"]) {
            if (talent["name"] == select.value) {
                label.innerHTML += "Avalible to classes "+talenttrees[talent_tree]["classes"].join(", ")+"<br>"
                label.innerHTML += talent["description"]+"<br>"
                if (talent["prerequisites"]) {
                    if (talent["prerequisites"].length>1) {
                    label.innerHTML += "Make sure you meet the prerequisites: "+talent["prerequisites"].join(", ")+"."
                    } else if (talent["prerequisites"].length==1) {
                        label.innerHTML += "Make sure you meet the prerequisite "+talent["prerequisites"]+"."
                    }
                }
                return
            }
        }
    }
    for (const class_ in classes) {
        for (const item of classes[class_]["talents"]) {
            
            if (item["name"] == select.value) {
                label.innerHTML += "Avalible to class "+class_+"<br>"
                label.innerHTML += item["description"]+"<br>"
                if (item["prerequisites"].length>1) {
                label.innerHTML += "Make sure you meet the prerequisites: "+item["prerequisites"].join(", ")+"."
                } else if (item["prerequisites"].length==1) {
                    label.innerHTML += "Make sure you meet the prerequisite "+item["prerequisites"]+"."
                }
                return
            }
        }
    }
}
function saveforce (element) {
    if (element.checked) {
        localStorage.setItem(element.id.split("form")[0], "|")
    } else (localStorage.setItem(element.id.split("form")[0], " "))
}
function savearmor(element) {
    save(element)
    for (const armor_ in armor) {
        if (element.value == armor_) {
            document.getElementById("equipment-frame").src = armor[armor_]["name_url"]
            document.getElementById(element.id.split("form")[0]+"-fort-defform").value = armor[armor_]["equip_bonus"]
            document.getElementById(element.id.split("form")[0]+"-ref-defform").value = armor[armor_]["armor_bonus"]
            document.getElementById(element.id.split("form")[0]+"-dex-defform").value = armor[armor_]["max_dex_bonus"]
            document.getElementById("gear-1form").value = armor_
            save(document.getElementById("gear-1form"))
            document.getElementById("w-1form").value = armor[armor_]["weight"]
            save(document.getElementById("w-1form"))
        }
        for (const element of document.getElementsByClassName("equip-text")) {
            save(element)
        }
    }
}
function saveweapon(element) {
    save(element)
    for (const weapon_ in weapons) {
        if (element.value == weapon_) {
            document.getElementById("equipment-frame").src = weapons[weapon_]["name_url"]
            document.getElementById(element.id.split("form")[0]+"-dmgform").value = weapons[weapon_]["damage"]
            document.getElementById("gear-"+(parseInt(element.id.split("-")[1], 10)+1)+"form").value = weapon_
            save(document.getElementById("gear-"+(parseInt(element.id.split("-")[1], 10)+1)+"form"))
            if (weapons[weapon_]["weight"].endsWith(" kg")) {
                document.getElementById("w-"+(parseInt(element.id.split("-")[1], 10)+1)+"form").value = weapons[weapon_]["weight"]
                save(document.getElementById("w-"+(parseInt(element.id.split("-")[1], 10)+1)+"form"))
            }
        }
    }
    for (const element of document.getElementsByClassName("equip-text")) {
        save(element)
    }
}
function logsheet() {
    if (document.getElementById("logsheet").style.display == "none") {
        document.getElementById("logsheet").style.display = "block"
    } else {
        document.getElementById("logsheet").style.display = "none"
    }
    filllogsheet()
}
function filllogsheet() {
    document.getElementById("characterform2").value = localStorage.getItem("character")
    document.getElementById("playerform2").value = localStorage.getItem("player")
    document.getElementById("sheetnumberform2").value = (parseInt(localStorage.getItem("sheet-number"), 10)+1) || "1"
    document.getElementById("campaigntitleform2").value = localStorage.getItem("campaign-title")
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    document.getElementById("sessiondateform2").value = mm + '/' + dd + '/' + yyyy
    document.getElementById("sessionlengthform2").value = localStorage.getItem("hours-session")

    // LEVELS Form
    document.getElementById("levelform2").value = localStorage.getItem("level")
    document.getElementById("checkpointsform2").value = localStorage.getItem("checkpoints")
    document.getElementById("endlevelform2").value = localStorage.getItem("level")

    // INVENTORY Form
    document.getElementById("creditsform2").value = localStorage.getItem("credits")
    document.getElementById("endcreditsform2").value = localStorage.getItem("credits")

    // RENOWN Form
    document.getElementById("renownform2").value = localStorage.getItem("renown")
    document.getElementById("renownendform2").value = localStorage.getItem("renown")

    // DM Form
    document.getElementById("dmcontactform2").value = localStorage.getItem("dm-contact-info")

    // OPTIONAL Form
    document.getElementById("honerform2").value = localStorage.getItem("honor-code")
    document.getElementById("startinghonerform2").value = localStorage.getItem("honor")
    document.getElementById("honerendform2").value = localStorage.getItem("honor")

    document.getElementById("downtimeform2").value = localStorage.getItem("downtime")
    document.getElementById("downtimechangeform2").value = localStorage.getItem("downtime")
    document.getElementById("lifeexpenceform2").value = localStorage.getItem("lifestyle-expenses")

    // Additional Notes
    document.getElementById("notesform2").value = localStorage.getItem("notes")
}
function savetwo(elem) {
    // Mapping between element IDs and corresponding localStorage keys
    var idToKeyMap = {
        "sheetnumberform2": "sheet-number",
        "campaigntitleform2": "campaign-title",
        "sessionlengthform2": "hours-session",
        "endlevelform2": "level",
        "endcheckpointsform2": "checkpoints",
        "endcreditsform2": "credits",
        "endrenownform2": "renown",
        "dmcontactform2": "dm-contact-info",
        "honerform2": "honor-code",
        "endhonerform2": "honor",
        "downtimeform2": "downtime",
        "lifeexpenceform2": "lifestyle-expenses",
        "notesform2": "notes"
    };

    // Get the corresponding localStorage key for the given element ID
    var localStorageKey = idToKeyMap[elem.id];

    // If a corresponding key is found, save the value to localStorage
    if (localStorageKey) {
        localStorage.setItem(localStorageKey, elem.value);
    } else {
        localStorage.setItem(elem.id.split("form2")[0], elem.value)
    }
}

function gettext (child) {
    if (child.tagName.toLowerCase() == "input") {
        return child.value;
    } else if (child.tagName.toLowerCase() == "label") {
        return "\n"+child.innerText;
    }
}
function downloadlogsheet() {
    var logSheetElement = document.getElementById("logsheet");
    var logSheetContent = "";
    for (const child of logSheetElement.children) {
        logSheetContent += (gettext(child) || " ")
        for (const grandchild of child.children) {
            logSheetContent += (gettext(grandchild) || " ")
        }
    }
    var blob = new Blob([logSheetContent], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = localStorage.getItem("character") + "-logsheet-" + localStorage.getItem("sheet-number") + ".txt";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
