#importing the pytest module
import pytest 

#defining a function to test
def add_two_numbers(x, y): 
    return x + y 
  
#creating a test case using the pytest.mark.parametrize decorator  
@pytest.mark.parametrize("x,y,expected", [(1,2,3), (2,-3,-1), (0,0,0)]) 
def test_add_two_numbers(x, y, expected): 
    result = add_two_numbers(x, y) 
    assert result == expected