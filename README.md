# TextToChemistry
A simple NodeJS program that tries to convert any string into a combination of chemical symbols.

## **How to use**
***This is a NodeJS script, meaning you need NodeJS installed to run this file in your Command Prompt.***
1. Download the most recent version
2. Open your command line tool of choice in the directory of the file
3. With NodeJS run this command: Node elementifier.js MyString
(Replace 'MyString' with the string you wish to convert!)

## **How it was made**
I made this program to learn JS and also get started with NodeJS. I first imported a list of all chemical symbols from the internet. The code starts by checking the length of your string. It will start by checking if the first letter of your string is a chemical symbol or if a combination of the first two letters is. It then adds the possibilities it found to an array. After that the elements in the array repeat this process (we take the part of the string we still need to convert, do the two checks on it and add the possibilities to the array, after which we remove the shorter old ones). This process is repeated until the array is either empty, meaning the string cannot be converted, or until the array is full of strings that are the same length as the input. It will then display every possibility.

## **What did I learn?**
I learned a lot about working with strings in JS, as well as for loops and array manipulation. It also shocked me how little words can be converted like this. As an example, my name (Casper) can be converted in two ways (CaSPEr or CAsPEr), but it took me ages to find some more examples. The best working string I found is 'Carbon', which can indeed be converted into chemical symbols (CaRbON, CArBON).
