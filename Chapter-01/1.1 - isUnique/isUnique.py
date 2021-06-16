
 # Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 
 def contains_no_duplicates(string):
     letters = {}
     for letter in string:
         if letter in letters:
             return False
        letters[letter] = True
    return True

    if __name__ == "__main__":
        import sys
        print(contains_no_duplicates(sys.argv[-1]))

