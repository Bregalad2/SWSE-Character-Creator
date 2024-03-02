import fandom
import json

fandom.set_wiki("swse")
names = ["Armor Specialist",]
talents = {
  "armor-specialist-talent-tree": {
    "classes": ["soldier", "gladiator", "imperial-knight", "jedi-knight", "sith-apprentice"],
    "description": "You can maximize the benefits of wearing Armor while reducing or eliminating some of its drawbacks."
  },
  "awareness-talent-tree": {
    "classes": ["scout", "bounty-hunter", "gladiator", "gunslinger", "martial-arts-master", "pathfinder", "vanguard"],
    "description": "You are exceptionally good at noticing things and avoiding perilous situations."
  },
  "bounty-hunter-talent-tree": {
    "classes": ["bounty-hunter"],
    "description": "You are among the finest Bounty Hunters in the galaxy, relying on the element of surprise and your hunter's instincts to catch your prey."
  },
  "brawler-talent-tree": {
    "classes": ["soldier", "melee-duelist"],
    "description": "You like to get 'up close and personal' with your enemies and engage them in melee combat."
  },
  "camouflage-talent-tree": {
    "classes": ["scout", "elite-trooper", "infiltrator"],
    "description": "You learn quickly how to blend in with your environment."
  },
  "commando-talent-tree": {
    "classes": ["soldier", "elite-trooper", "officer"],
    "description": "You use advanced combat tactics to take down enemies quickly, shield your comrades, and endure whatever challenges are thrown your way."
  },
  "dark-side-devotee-talent-tree": {
    "classes": ["force-adept"],
    "description": "Your powerful negative emotions allow The Dark Side to flow through you, giving you great power."
  },
  "duelist-talent-tree": {
    "classes": ["imperial-knight", "jedi-knight", "jedi-master", "sith-apprentice"],
    "description": "Through rigorous training and experience, you become one of the greatest swordfighters in the galaxy."
  },
  "expert-pilot-talent-tree": {
    "classes": ["ace-pilot"],
    "description": "The Ace Pilot relies on finely honed instincts and years of pilot training to outmaneuver and destroy enemy Starships."
  },
  "force-adept-talent-tree": {
    "classes": ["force-adept", "force-disciple"],
    "description": "Force Adepts use The Force to survive on fringe worlds, and they often have signature Force Powers that they use particularly well."
  },
  "force-item-talent-tree": {
    "classes": ["force-adept"],
    "description": "You can imbue Weapons and objects with the power of The Force."
  },
  "fortune-talent-tree": {
    "classes": ["scoundrel", "gunslinger"],
    "description": "Many Scoundrels like to gamble with destiny, putting everything on the line and trusting fate (or The Force) to bring them fortune, fame, and success."
  },
  "fringer-talent-tree": {
    "classes": ["scout", "outlaw"],
    "description": "You're especially skilled at 'getting by' on backwater worlds."
  },
  "gunner-talent-tree": {
    "classes": ["ace-pilot"],
    "description": "Many Starship Gunners are skilled both in and out of the cockpit and are deadly with ranged Weapons of any kind."
  },
  "gunslinger-talent-tree": {
    "classes": ["gunslinger"],
    "description": "You never travel anywhere without a blaster (or two), and you know how to handle yourself in a gunfight."
  },
  "infamy-talent-tree": {
    "classes": ["crime-lord", "master-privateer"],
    "description": "You are wanted in multiple systems for criminal acts; and your manner of doing business has earned you an unsavory reputation in the criminal underworld."
  },
  "influence-talent-tree": {
    "classes": ["noble", "crime-lord"],
    "description": "One of your greatest strengths is your ability to exert influence over your opponents."
  },
  "inspiration-talent-tree": {
    "classes": ["noble", "droid-commander"],
    "description": "You can often get results out of their friends, allies, and followers that other leaders cannot."
  },
  "jedi-consular-talent-tree": {
    "classes": ["jedi"],
    "description": "Jedi that follow the path of the consular are skilled negotiators and talented ambassadors."
  },
  "jedi-guardian-talent-tree": {
    "classes": ["jedi"],
    "description": "Jedi that follow the path of the guardian are more combat-oriented than other Jedi, honing their skills to become deadly combatants."
  },
  "jedi-sentinel-talent-tree": {
    "classes": ["jedi"],
    "description": "The Jedi that follow the path of the sentinel are the true enemies of The Dark Side, hunting down evil and stopping the spread of darkness wherever they go."
  },
  "leadership-talent-tree": {
    "classes": ["noble", "corporate-agent", "droid-commander", "officer"],
    "description": "A born leader, you know how to change and lead your companions and followers to success."
  },
  "lightsaber-combat-talent-tree": {
    "classes": ["jedi", "imperial-knight", "jedi-knight", "sith-apprentice"],
    "description": "The Lightsaber is the chosen weapon of the Jedi. Not as clumsy or random as a blaster, the Lightsaber is an elegant weapon for a more civilized combatant."
  },
  "lightsaber-forms-talent-tree": {
    "classes": ["jedi-knight"],
    "description": "You have refined your knowledge of Lightsaber technique, your blade becoming an extension of yourself."
  },
  "lineage-talent-tree": {
    "classes": ["noble", "corporate-agent"],
    "description": "You lead a privileged life and reap the benefit of an upbringing beyond most citizens of the galaxy."
  },
  "mastermind-talent-tree": {
    "classes": ["crime-lord"],
    "description": "You have the ability to attract loyal minions and are skilled at redirecting allies on the battlefield."
  },
  "military-tactics-talent-tree": {
    "classes": ["officer"],
    "description": "You are an expert at leading troops into battle and using the battlefield to your advantage."
  },
  "misfortune-talent-tree": {
    "classes": ["scoundrel", "assassin", "bounty-hunter", "saboteur"],
    "description": "Your mother always said you were trouble. Now your enemies know it, too."
  },
  "sith-talent-tree": {
    "classes": ["sith-apprentice", "sith-lord"],
    "description": "The Sith believes in order through tyranny, conspiring to annihilate The Jedi and everything they stand for."
  },
  "slicer-talent-tree": {
    "classes": ["scoundrel", "outlaw", "saboteur"],
    "description": "You move like a ghost through The HoloNet and can hack into enemy mainframes and computer systems with astonishing grace."
  },
  "spacer-talent-tree": {
    "classes": ["scoundrel", "ace-pilot", "master-privateer"],
    "description": "You pron the space lanes seeking wealth, fame, adventure, or something more. You're also pretty good with Vehicles in general."
  },
  "survivor-talent-tree": {
    "classes": ["scout", "enforcer", "medic", "outlaw", "pathfinder", "vanguard"],
    "description": "As an explorer of dangerous places, you are trained to react to danger swiftly and adroitly, as well as navigate difficult terrain and reduce damage."
  },
  "weapon-master-talent-tree": {
    "classes": ["elite-trooper"],
    "description": "You are skilled at wielding a variety of weapons and can wield choice Weapons with deadly precision and force."
  },
  "weapon-specialist-talent-tree": {
    "classes": ["soldier", "melee-duelist"],
    "description": "You are highly trained at using specific weapons."
  }
}

for name in talents.keys():
    page = fandom.page(title = name.replace("-", " ").title())
    page_json = page.content
    talents[name]["talents"] = []
    for item in page_json["sections"][0]["sections"][0]["sections"]:
        try:
            talents[name]["talents"].append(
                {"name": item["title"],
                 "prerequisites": item["content"].split("\n")[0].split(": ")[1].split(", "),
                "description": "".join(item["content"].split("\n")[1:])}
                )
        except:
            talents[name]["talents"].append(
                {"name": item["title"],
                "description": item["content"]}
                )
    print(talents[name]["talents"])

open("talent-trees.json", "w").write(json.dumps(talents, indent=4))
