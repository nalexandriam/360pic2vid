#!/bin/bash

# Iterate over each file in the current directory
for file in *; do
    # Remove spaces and replace parentheses with '0' in the file name
    newName=$(echo "$file" | sed -e 's/ //g' -e 's/(/0/g' -e 's/)/0/g')

    # Rename the file
    mv "$file" "$newName"
done
