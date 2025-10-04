#!/usr/bin/env python3
"""Insert correct 11 LocationGuides into data.ts"""

# Read the cleaned data.ts
with open('/Users/al/3pltexas/web/src/lib/cms/data.ts', 'r') as f:
    lines = f.readlines()

# Read proper remaining guides (starting from Amarillo)
with open('/Users/al/3pltexas/proper_remaining.txt', 'r') as f:
    remaining = f.read()

# Fix single quotes to double quotes in leadTypes
remaining = remaining.replace("leadTypes: ['", 'leadTypes: ["')
remaining = remaining.replace("', '", '", "')
remaining = remaining.replace("']", '"]')

# Find the closing ]; of locationGuides array
for i in range(len(lines) - 1, 0, -1):
    if lines[i].strip() == '];' and 'locationGuides' in ''.join(lines[max(0, i-100):i]):
        # Found it - insert before this line, with a comma on previous line
        lines.insert(i, ',\n' + remaining)
        break

# Write back
with open('/Users/al/3pltexas/web/src/lib/cms/data.ts', 'w') as f:
    f.writelines(lines)

print("Successfully inserted 11 remaining LocationGuides")
