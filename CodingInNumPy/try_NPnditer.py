import numpy as np

arr = np.array([
    [[1,2,3], [4,5,6], [7,8,9]],
    [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']],
    [['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R']],
    [['S', 'T', 'U'], ['V', 'W', 'X'], ['Y', 'Z', '-']]
  ])

cn = 0  # counter counting no. of digits exited in the ndarray
ca = 0  # counter counting no. of alphabats exited in the ndarray
cp = 0  # counter counting no. of parameters exited in the ndarray

n, a, p = [], [], []

for x in np.nditer(arr):
    tmp = str(x)
    if (tmp.isdigit()):
        cn+=1
        n.append(int(tmp))
    elif (tmp.isalpha()):
        ca+=1
        a.append(tmp)
    else:
        cp+=1
        p.append(tmp)
        
print(f"{n}\nThere are {cn} digit(s).\n")
print(f"{a}\nThere are {ca} alphabat(s).\n")
print(f"{p}\nThere are {cp} parameter(s)")

# Simple output as below
'''
[1, 2, 3, 4, 5, 6, 7, 8, 9]
There are 9 digit(s).

['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
There are 26 alphabat(s).

['-']
There are 1 parameter(s)
'''
