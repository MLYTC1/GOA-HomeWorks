
import random

my_students = ["dato", "giorgi", "zura", "nika", "giga"]
arr_of_cars = ["mercedes", "bmw", "toyota", "lexus", "honda"]


for i in range(len(my_students)):
    winner = random.choice(my_students)
    lacky_cars = random.choice(arr_of_cars)

    print(winner + " won this car: " + lacky_cars)

    my_students.remove(winner)
    arr_of_cars.remove(lacky_cars)

