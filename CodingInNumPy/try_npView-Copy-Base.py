import  numpy as np

_arr = np.array((1,2,3,4,5))  # with use tupple
arr_ = np.array(['A', 'B', 'C', 'D', 'E'])  # with use array

_tmp1, _tmp2 = _arr.copy(), _arr.view()
tmp_1, tmp_2 = arr_.copy(), arr_.view()

print('='*30, "\nBefore Changes")
print(f"ndarray1: {_arr}")
print(f"ndarray2: {arr_}")

print('='*30, "\nCopies as below")
print(f"ndarray1 copy: {_tmp1} | .base: {_tmp1.base}")
print(f"ndarray2 copy: {tmp_1} | .base: {tmp_1.base}")

print('='*30, "\nViews as below")
print(f"ndarray1 view: {_tmp2} | .base: {_tmp2.base}")
print(f"ndarray2 view: {tmp_2} | .base: {tmp_2.base}")

print('='*30, "\nChanges as below\n- _arr[0] = _arr[4] = _arr[0]\n- arr_[4] = 'F")
_arr[0] = _arr[4] = _arr[0]
arr_[4] = 'F'

print('='*30, "\nAfter Changes")
print(f"ndarray1: {_arr}")
print(f"ndarray2: {arr_}")
print('-'*30)
print(f"ndarray1 copy: {_tmp1} | .base: {_tmp1.base}")
print(f"ndarray2 copy: {tmp_1} | .base: {tmp_1.base}")
print('-'*30)
print(f"ndarray1 view: {_tmp2} | .base: {_tmp2.base}")
print(f"ndarray2 view: {tmp_2} | .base: {tmp_2.base}")

''' ==================================================================================
simple ouput as below
----------------------------------------------------------------------------------
============================== 
Before Changes
ndarray1: [1 2 3 4 5]
ndarray2: ['A' 'B' 'C' 'D' 'E']
============================== 
Copies as below
ndarray1 copy: [1 2 3 4 5] | .base: None
ndarray2 copy: ['A' 'B' 'C' 'D' 'E'] | .base: None
============================== 
Views as below
ndarray1 view: [1 2 3 4 5] | .base: [1 2 3 4 5]
ndarray2 view: ['A' 'B' 'C' 'D' 'E'] | .base: ['A' 'B' 'C' 'D' 'E']
============================== 
Changes as below
- _arr[0] = _arr[4] = _arr[0]
- arr_[4] = 'F
============================== 
After Changes
ndarray1: [1 2 3 4 1]
ndarray2: ['A' 'B' 'C' 'D' 'F']
------------------------------
ndarray1 copy: [1 2 3 4 5] | .base: None
ndarray2 copy: ['A' 'B' 'C' 'D' 'E'] | .base: None
------------------------------
ndarray1 view: [1 2 3 4 1] | .base: [1 2 3 4 1]
ndarray2 view: ['A' 'B' 'C' 'D' 'F'] | .base: ['A' 'B' 'C' 'D' 'F'] '''
