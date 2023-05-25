import subprocess, sys, os

# % python3 .helper/rename_dir_script.py "maximumLists" "listLimit"
# % python3 .helper/rename_dir_script.py "notUser" "anonymousUser"

def main(old, new):
    # call first Python file with argument "/A/"
    subprocess.call(['python3', '/Users/vincentketteniss/UITests-KC/.helper/replace.py', os.getcwd(), f'/{old}/', f'/{new}/'])

    # call second Python file with argument "A"
    subprocess.call(['python3', '/Users/vincentketteniss/UITests-KC/.helper/rename_directories.py', os.getcwd(), f'{old}', f'{new}'])

main(sys.argv[1], sys.argv[2])