#!/usr/bin/python3 
import requests
import json


print("starting script ..")

#API variables
key = "f4e0158f7c5c7eead5286288b221e1bd"
latitude = "32.6960"
longitude = "-97.6022"

url = f"https://api.darksky.net/forecast/{key}/{latitude},{longitude}?exclude=minutely,hourly,daily,alerts,flags"

data = requests.get(url, json={"key": "value"})
content = json.dumps((data.json()), sort_keys=True, indent=4)

with open("./Weather.json","w") as fp:
    fp.write(content)



#Powered by Dark Sky API