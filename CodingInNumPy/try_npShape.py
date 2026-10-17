import  numpy as np

_arr = np.array(((1,2,3,4,5), (6,7,8,9,0)))
arr_ = np.array([['A', 'B', 'C'], ['E', 'F', 'G'], ['X', 'Y', 'Z']])

ndaShapes = [_arr.shape, arr_.shape]
print("="*50, "\nndarray1:", _arr, "\nndarray2:", arr_, "\n", "-"*50)
print(f"ndarray1 Shape: {ndaShapes[0]}  ndarray2 Shape: {ndaShapes[1]}")
print('='*50)

# Sample output as below
'''
================================================== 
ndarray1: [[1 2 3 4 5]
 [6 7 8 9 0]] 
ndarray2: [['A' 'B' 'C']
 ['E' 'F' 'G']
 ['X' 'Y' 'Z']] 
 --------------------------------------------------
ndarray1 Shape: (2, 5)  ndarray2 Shape: (3, 3)
==================================================
'''
