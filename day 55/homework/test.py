# // შექმენით სია და ელემენტები დაალაგეთ ანბანის მიხედვით (a , b , c , d...) და ჩაამატეთ ახალ სიაში 
# // let dogArr = ['toby', 'molly', 'archy', 'busa', 'snoopy', 'eby', 'recksy', 'rony', 'odry', 'tino', 'lilu', 'balu', 'buddy', 'max', 'chalie', 'leo', 'louie', 'bean', 'lola', 'frankie', 'daisy', 'apollo']

# // let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


# dogArr = ['toby', 'molly', 'archy', 'busa', 'snoopy', 'eby', 'recksy', 'rony', 'odry', 'tino', 'lilu', 'balu', 'buddy', 'max', 'chalie', 'leo', 'louie', 'bean', 'lola', 'frankie', 'daisy', 'apollo']

# alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
# final_arr =[]
# index_id = 0



# for i in range(len(alphabet)):
#     for x in range(len(dogArr)):
#         if alphabet[i] == dogArr[x][0]:
#             final_arr.append(dogArr[x])
# print(final_arr)




#2) გადმოგეცემათ სია რომელშიც იქნება რიცხვები არეულად ( 1 , 8 ,5 , 0) და დაამატეთ ახალ სიაში დალაგებულად

# my_arr = [5,11,2,33,100,12]
# fin_arr = []
# min_num = 0

# for i in range(len(my_arr)):
#     for x in range(len(my_arr)-1):
#         if my_arr[x] < min_num:
#             min_num = my_arr[x]
#             fin_arr.append(my_arr[x])
#             my_arr.remove(my_arr[x])
#         elif my_arr[x] == min_num:
#             fin_arr.append(min_num)
#             my_arr.remove(my_arr[x])
#         min_num=my_arr[0]
#         if len(my_arr)==1:
#             fin_arr.append(min_num)
        

# print(fin_arr)

# for i in range(len(my_arr)-1):
#     for x in range(1,len(my_arr)):
#         print(my_arr[i],"-",my_arr[x])

# for i in range(0,len(my_arr)-1):
#     for x in range(1,len(my_arr)):
#         if my_arr[i] > my_arr[x]:
#             var = my_arr[i]
#             my_arr[i]=my_arr[x]
#             my_arr[x]= var

# print(my_arr)






