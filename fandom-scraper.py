import fandom
import json

fandom.set_wiki("swse")
page = fandom.page(title = "Talents")
print(json.dumps(page.content, indent=2))
