
# press control+v, u, D5 (or whatever hex value), to insert a unicode to search 'n replace'


recode WINDOWS-1252..utf8//TRANSLIT *.txt

iconv -f WINDOWS-1252 -t UTF-8//TRANSLIT 'applications - iOS.txt' -o 'applications - iOS.txt'

# get rid of non-utf-8 chars
# the -c flag
iconv -f UTF-8 -t UTF-8//TRANSLIT 'ideal girl.txt' -o 'ideal girl.txt' -c

