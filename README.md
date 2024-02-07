[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/cToVU-1r)
# Binary Search

Implement a binary search function that, given a sorted list and an element to
look for, returns the index of the element in the list or -1 if the element is
not there.

Use the template in `code.js`. The tests in `code.test.js` will be run
automatically every time you push to Github; if they pass you are done.

RESOURCES USED: Originally coded in python and used ai to convert to js where function takes in sorted array and searches for first occurence of element. Below is python code I used to compute binary search without testing

def binarySearch(num_list, element, low, high):
    
if high >= low:
        
mid = (low + high) // 2
        
if num_list[mid] == element:
            
return mid
        
elif num_list[mid] > element:
            
return binarySearch(num_list, element, low, mid - 1)
        
else:
            
return binarySearch(num_list, element, mid + 1, high)
    
else:
        
return -1

element = 7

num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

low = 0

high = len(num_list) - 1

index = binarySearch(num_list, element, low, high)

print(index)
