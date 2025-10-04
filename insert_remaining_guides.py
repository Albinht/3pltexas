#!/usr/bin/env python3
"""Insert remaining 11 LocationGuides into data.ts"""

# Read the current data.ts
with open('/Users/al/3pltexas/web/src/lib/cms/data.ts', 'r') as f:
    lines = f.readlines()

# Read remaining guides
with open('/Users/al/3pltexas/remaining_guides.txt', 'r') as f:
    remaining = f.read()

# Find the closing ]; of locationGuides array (should be around line 2906)
for i in range(len(lines) - 1, 0, -1):
    if lines[i].strip() == '];' and i > 2900:
        # Found it - insert before this line
        # Add a comma and newline before the remaining guides
        insert_content = ',\n' + remaining + '\n'
        lines.insert(i, insert_content)
        break

# Write back
with open('/Users/al/3pltexas/web/src/lib/cms/data.ts', 'w') as f:
    f.writelines(lines)

print(f"Successfully inserted remaining 11 LocationGuides")
print(f"New file has {len(lines)} lines")
