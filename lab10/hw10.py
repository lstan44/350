import random as rd

text = "The raw, lingering emotion of the 2016 presidential campaign erupted into a shouting match here Thursday as top strategists of Hillary Clinton’s campaign accused their Republican counterparts of fueling and legitimizing racism to elect Donald Trump."

words = text.split()

def txtGen(t):
    l = t.split()
    w = []
    for i in range(25):
        idx = rd.randint(0,25)
        w.append(l[idx])
    txt = ""
    for words in w:
        txt += words
        txt += " "
    return txt

rdWords = txtGen(text)
#print(rdWords)


file = open("sampletext.txt", 'r')
thetext = file.read()
#print(thetext)

def twograms(txt):
    words = txt.split()
    t = ""
    for l in range(len(words)-1):
        t += words[l]
        t+= " "
        t+= words[l+1]
        print(t)
        t = ""

twograms(thetext)