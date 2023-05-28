#! /bin/bash

# bicycle-world-ii
# |—— brands.txt
# |—— freight/
# |   |—— messenger/
# |   |—— porteur/
# |—— mountain/
# |   |—— downhill/
# |   |   |—— heavyweight/
# |   |   |—— lightweight/
# |   |—— hardtail/
# |—— racing/
#     |—— road/
#     |—— track/

mkdir bicycle-world-ii
touch bicycle-word-ii/brands.txt
mkdir bicycle-world-ii/freight
mkdir bicycle-world-ii/freight/messenger
mkdir bicycle-world-ii/freight/porteur
mkdir bicycle-world-ii/mountain
mkdir bicycle-world-ii/mountain/downhill
mkdir bicycle-world-ii/mountain/downhill/heavyweight
mkdir bicycle-world-ii/mountain/downhill/lightweight
mkdir bicycle-world-ii/mountain/hardtail
mkdir bicycle-world-ii/racing
mkdir bicycle-world-ii/racing/road
mkdir bicycle-world-ii/racing/track

# 1. Print the working directory.
pwd
# 2. List the files and directories in the working directory.
ls
# 3. Change directories to the freight/ directory.
cd freight
# 4. List the files and directories in the working directory.
ls
# 5. Change directories to the porteur/ directory.
cd porteur
# 6. Change directories up two levels to the bicycle-world-ii/ directory. List the files and directories in the bicycle-world-ii/ directory.
cd ../..
ls
# 7. Change directories to the mountain/downhill/ directory.
cd mountain/downhill
# 8. Make a file called dirt.txt.
touch dirt.txt
# 9. Make a file called mud.txt.
touch mud.txt
# 10. List the files and directories in the downhill/ directory.
ls
# 11. Downhill biking is dangerous: In the downhill/ directory, make a directory called safety/.
mkdir safety
# 12. Change directories to the bicycle-world-ii/ directory.
cd ../..
# 13. List the contents of the bicycle-world-ii/ directory.
ls
# 14. The shop is adding a new type of bike! In bicycle-world-ii/, make a directory called bmx/.
mkdir bmx
# 15. Without changing directories from bicycle-world-ii/, make a file in the bmx/ directory called tricks.txt.
touhc bmx/tricks.txt
# 16. List all files and directories in the current directory.
ls
