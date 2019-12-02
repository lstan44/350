"""
STANLEY LALANNE
CS 350 Homework 9
Converting JavaScript into Python 

"""

people = [
 {"name": "Amy", "pounds_weight": 152, "inches_height": 63},
 {"name": "Joe", "pounds_weight": 120, "inches_height": 64},
 {"name": "Tom", "pounds_weight": 210, "inches_height": 78},
 {"name": "Jim", "pounds_weight": 180, "inches_height": 68},
 {"name": "Jen", "pounds_weight": 120, "inches_height": 62},
 {"name": "Ann", "pounds_weight": 252, "inches_height": 63},
 {"name": "Ben", "pounds_weight": 240, "inches_height": 72},
]
def poundsToKg(mass):
    return mass/ 2.205

def inchesToMeters(length):
    return length / 39.37

def bmi(person):
  m = poundsToKg(person["pounds_weight"])
  h = inchesToMeters(person["inches_height"])
  return m/(h**2)

for p in people:
  p["bmi"]= bmi(p)

def isOverWeight(person):
    return person["name"] if (person["bmi"] >=25 and person["bmi"] <30) else None

def isObese(person):
    return person["name"] if person["bmi"] >= 30 else None
#helper function to print a list in a formatted way
def printf(li):
  for l in li:
    print("Name: "+ str(l["name"]) )
    print("Height: " + str(round( (inchesToMeters( l["inches_height"])),2 ) ) +" m" )
    print("Weight: "+ str(round( (poundsToKg( l["pounds_weight"])),2 ) ) +" kg")
    print("BMI: " +str( round( (l["bmi"]), 2) ) +" kg/m*m")
    print("\n")

overWeightPeople = list(filter(isOverWeight, people))
print("These are the overweight people:\n")
printf(overWeightPeople)

obesePeople = list(filter(isObese,people) )
print("These are the obese people:\n")
printf(obesePeople)