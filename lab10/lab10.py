movies = {
 "2018, Bohemian Rhapsody": ["Rami Malek","Ben Hardy","Mike Myers","Lucy Bynton"],
 "2017, Get Out": ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"],
 "2017 Logan": ["Hugh Jackman", "Boyd Holbrook", "Patrick Stewart"],
 "2018, Black Panther": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
 "2016, Doctor Strange": ["Benedict Cumberbatch", "Rachel McAdams", "Ch. Ejiofor"],
 "2016, La La Land": ["Emma Stone", "Ryan Gosling", "John Legend"]
}

m = [{key:movies[key]} for key in movies if key[0:4]=="2016"]
#print(m)

squares = [x**2 for x in range(12) if x%2==0]

#print (squares)

foo = []
for x in range(20):
 if x%2 == 0 :
    if x%5 == 0:
        foo.append(x)
#print(foo)

foo2 = [ x for x in range(20) if (x%2==0 and x%5 == 0)]
#print(foo2)

def powers_of_two(limit):
    value = 1
    while value < limit:
        yield value
        value = 2 * value

p = powers_of_two(100)


power_of_3 = ( 3**x for x in range(1000))


movies2 = ["2018, Black Panter", "2018: Bohemian Rhapsody", "2017: Get Out", "2017: Logan", "2016: La La Land", "2016: Doctor Strange"]
new_list = []
for m in movies:
    if m[0:4]=="2016":
        new_list.append("REMOVED FROM LIBRARY - " + m)
    else:
        new_list.append(m)

#print(new_list)

#using list comprehension
newlist2 = [ (m if m[0:4] != "2016" else "Removed from library "+ m) for m in movies2]
#print(newlist2)



def perfect_squares(limit):
    value = 1
    while value < limit:
        yield value*value
        value += 1

foo = perfect_squares(1000)
"""
for i in range(10):
    print(next(foo)) """

perfectSquares = (x*x for x in range(1,1000))

'''
for i in range(10):
    print(next(perfectSquares))'''


# this is python3 syntax.. must be run with python3
def getDigits(text:str)->[]:
    ln = [l for l in text if l.isdigit() ]
    return ln

mydigits = getDigits("My Name is Stanley Lalanne. I have 4 cars, 6 planes, and 2 wives.")
#print(mydigits)




