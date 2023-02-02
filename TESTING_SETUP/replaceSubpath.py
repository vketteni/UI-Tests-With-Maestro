import os, sys, re, shutil      
from pathlib import Path         

# EXAMPLE CALL
# % python3 TESTING_SETUP/replaceSubpath.py /Users/vincentketteniss/UITests-KC/UITests-KC  "UITests-KptnCook" "UITests-KC/UITests-KC"

def main(path, old, new):
    subpath = old.replace('/', r'\/')
    subpath_regex = re.compile(rf"""
    ({subpath}) # Match the subpath
    
    """, re.VERBOSE)

    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith('.yaml'):

                path = Path(root) / file
                text = path.read_text()
                text = re.sub(subpath_regex, new, text)
                path.write_text(text)
                

main(sys.argv[1], sys.argv[2], sys.argv[3])
