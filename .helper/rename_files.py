import os, sys, re, shutil
from pathlib import Path

# EXAMPLE CALLS
# % python3 .helper/rename_files.py /Users/vincentketteniss/UITests-KC/android "_mealPlannerMenu_" "_"

def main(path, old, new):
    for root, dirs, files in os.walk(path):
        # print(files)
        for file in files:
            if (file.find(old) != -1):
                path_old = Path(root) / file
                path_new = Path(root) / file.replace(old, new)
                # print(path_old, path_new)
                os.rename(path_old, path_new)

main(sys.argv[1], sys.argv[2], sys.argv[3])