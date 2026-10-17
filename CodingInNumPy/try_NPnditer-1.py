import numpy as np

arr = np.array([
    [[1,2,3], [4,5,6], [7,8,9]],
    [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']],
    [['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R']],
    [['S', 'T', 'U'], ['V', 'W', 'X'], ['Y', 'Z', '-']]
  ])
  
for x in np.nditer(arr[:, ::1]):
    print(x)

# Simple output as below
'''
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
'''
