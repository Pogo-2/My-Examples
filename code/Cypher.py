


debug = False

abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

hold=[]
edit=[]
final=[]

print("for encrypt press 0 for decrypt press 1")
yorn =int(input("-->"))

if (yorn == 0):
    #word input
    print("Print word (in lowercase and spaced out EX: 't e s t')")
    word = input().split()
    #key input
    print('key(1-25)')
    key = int(input())
    #finding index
    for x in word:
        for y in abc:
            if(x == y):
                hold.append(abc.index(y))
    #math
    for x in hold:
        x = x + key
        if(x > 25):
            x = x - 25
            edit.append(x)
        else: edit.append(x)
    #convert back to text
    for x in edit:
        final.append(abc[x])
else:










    if (debug == True):
        print("word length")
        print(word.__len__())
        print("word")
        print("letter numbers")
        print(hold)
        print("New letter numbers")
        print(edit)

print(final)
