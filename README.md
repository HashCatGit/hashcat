# Project Name

This project is a tool for calculating transaction hash differences within a cycle.

## Overview

This tool takes an array containing transaction hashes and calculates the difference of each transaction hash with the last two transaction hashes. It then returns the top ten transaction hash objects sorted by the difference value.

## Installation and Running

1. First, ensure you have Node.js and npm installed.

2. Clone the project to your local machine:

    git clone https://github.com/HashCatGit/hashcat.git

3.  Navigate to the project directory and install dependencies:
cd your_repository
npm install

4. Run the project:

Verification method
hash the transactions that need to be verified into an array, and pass the calculatingResults to get the sorting result

Verification process
1. will receive the array, the last two hashes string concatenation
2. Sign the concatenated string with sha256 hash and get a hash for comparison
3. Use traversal to calculate the difference between all transaction hash and reference hash.
4. Sort the result of difference calculation in ascending order to get the result