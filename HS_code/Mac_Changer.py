#!/usr/bin/even python

import subprocess
print("MAC input")
mac = input("-->")





subprocess.call("ifconfig", shell=True)

subprocess.call("ifconfig eth0 down", shell=True)

subprocess.call("ifconfig eth0 hw ether " + mac, shell=True)

subprocess.call("ifconfig eth0 up", shell=True)
