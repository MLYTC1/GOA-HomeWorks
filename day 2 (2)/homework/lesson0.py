from turtle import *


#we want to paint a house
speed(7)
width(4)
color("black")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door


forward(70)
color("brown")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()


penup()
goto(200, 200)
pendown()

right(150)
color("red")
begin_fill()
forward(200)
left(120)
forward(200)
end_fill()



#window

penup()
goto(20,120)
pendown()

color("yellow")
begin_fill()
left(120)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
end_fill()

penup()
goto(150,120)
pendown()

color("yellow")
begin_fill()
left(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
end_fill()






exitonclick()