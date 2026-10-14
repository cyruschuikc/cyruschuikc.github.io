import numpy as np

x = np.array([
    [[1,2,3], [4,5,6], [7,8,9]],
    [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']],
    [['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R']],
    [['S', 'T', 'U'], ['V', 'W', 'X'], ['Y', 'Z', '-']]
  ])
  
print('='*30, "\n1L-Iterating")
for r in x:
    print(r)

print('='*30, "\n2L-Iterating")
for r in x:
    for c in r:
        print(c)
        
print('='*30, "\n3L-Iterating")
for r in x:
    for c in r:
        for i in c:
            print(i)
            
n = [] = a = o
print('='*30, "\n3L-Iterating + if-elif-else")
for r in x:
    for c in r:
        for i in c:
            # i is a NumPy string scalar, so we convert it to a standard Python string
            item_str = str(i) 
            if item_str.isdigit():      # Checks if the string contains a number (like '1')
                n.append(int(item_str))  # Convert back to actual int if desired
            elif item_str.isalpha():    # Checks if the string contains an alphabet (like 'A')
                a.append(item_str)
            else:                       # Catches symbols (like '-')
                o.append(item_str)
print(f"Numbers: {n}")
print(f"Alphabets: {a}")
print(f"Other: {o}")

# Simple output as below
'''
============================== 
1L-Iterating
[['1' '2' '3']
 ['4' '5' '6']
 ['7' '8' '9']]
[['A' 'B' 'C']
 ['D' 'E' 'F']
 ['G' 'H' 'I']]
[['J' 'K' 'L']
 ['M' 'N' 'O']
 ['P' 'Q' 'R']]
[['S' 'T' 'U']
 ['V' 'W' 'X']
 ['Y' 'Z' '-']]
============================== 
2L-Iterating
['1' '2' '3']
['4' '5' '6']
['7' '8' '9']
['A' 'B' 'C']
['D' 'E' 'F']
['G' 'H' 'I']
['J' 'K' 'L']
['M' 'N' 'O']
['P' 'Q' 'R']
['S' 'T' 'U']
['V' 'W' 'X']
['Y' 'Z' '-']
============================== 
3L-Iterating
1
2
3
4
5
6
7
8
9
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z
-
============================== 
3L-Iterating + if-elif-else
Numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
Other: ['-']
'''
            
