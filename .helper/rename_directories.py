import os, sys, re, shutil
from pathlib import Path

# EXAMPLE CALLS
# % python3 .helper/rename_directories.py /Users/vincentketteniss/UITests-KC "withAccount" "user"
# % python3 .helper/rename_directories.py /Users/vincentketteniss/UITests-KC "noUser" "notUser"


def main(path, old, new):
    for root, dirs, files in os.walk(path, topdown=False):
        for dir in dirs:
            if (dir.find(old) != -1):
                path_old = Path(root) / dir
                path_new = Path(root) / new
                os.rename(path_old, path_new)

main(sys.argv[1], sys.argv[2], sys.argv[3])