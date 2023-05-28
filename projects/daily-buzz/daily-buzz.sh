#! /bin/bash

# 1. Print the working directory.
pwd
# 2. List all files and directories in the current working directory
ls
# 3. With one command, change directories to the national/politics/ directory.
cd national/politics
# 4. List all files and directories in the working politics/ directory.
ls
# 5. In the politics/ directory, create a directory called elections/.
mkdir elections
# 6. Change directories into the elections/ directory.
cd elections
# 7. In the elections/ directory, make two files candidates.txt and issues.txt
touch candidates.txt issues.txt
# 8. Change directories three levels up to the daily-buzz/ directory, and print the working directory.
cd ../../..
# 9. In the daily-buzz/ directory, make a directory called business/ and change directories into the business/ directory.
mkdir business; cd business
# 10. List all files and directories in the business/ directory.
ls
# 11. From the business/ directory, make a directory called startups/ and change directories into the startups/ directory.
cd business; mkdir startups; cd startups
# 12. Change directories one level up back to the business/ directory. From the business/ directory, make a directory that is a child of startups/, called disruptors/.
cd ../ mkdir startups/disruptors
# 13. From the business/ directory, make three files in the disruptors/ directory. The files should be called tech.txt design.txt and education.txt.
cd stratups/diruptors; touch tech.txt design.txt education.txt; cd ../..
# 14. Change directories one level up to the daily-buzz/ directory and print the working directory.
cd ..; ls
