import json

items = json.loads("".join(open("run_results-1.json")))
mylist = {"None": {}}
for item in items["armor"][0]["weapons"]:
    mylist[item["name"]] = item


open("run_results-1.json", "w").write(json.dumps(mylist, indent=2))
