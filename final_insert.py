#!/usr/bin/env python3
"""Final correct insert of 11 LocationGuides"""

# Read current data.ts
with open('/Users/al/3pltexas/web/src/lib/cms/data.ts', 'r') as f:
    content = f.read()

# Read proper guides
with open('/Users/al/3pltexas/proper_remaining.txt', 'r') as f:
    guides = f.read()

# Fix quotes
guides = guides.replace("leadTypes: ['", 'leadTypes: ["')
guides = guides.replace("', '", '", "')
guides = guides.replace("']", '"]')

# Find and replace pattern
old_pattern = "      body: \"Our team will connect you with independently-vetted Corpus Christi fulfillment providers that match your volume, product type, and service requirements.\",\n    },\n  },\n];\n\nexport const resourcesContent"

new_pattern = "      body: \"Our team will connect you with independently-vetted Corpus Christi fulfillment providers that match your volume, product type, and service requirements.\",\n    },\n  },\n" + guides + "];\n\nexport const resourcesContent"

if old_pattern in content:
    content = content.replace(old_pattern, new_pattern)
    with open('/Users/al/3pltexas/web/src/lib/cms/data.ts', 'w') as f:
        f.write(content)
    print("Successfully inserted 11 LocationGuides!")
else:
    print("Pattern not found - checking alternatives...")
    # Try simpler pattern
    if "  },\n];\n\nexport const resourcesContent" in content:
        content = content.replace("  },\n];\n\nexport const resourcesContent", "  },\n" + guides + "];\n\nexport const resourcesContent")
        with open('/Users/al/3pltexas/web/src/lib/cms/data.ts', 'w') as f:
            f.write(content)
        print("Successfully inserted with simpler pattern!")
    else:
        print("Could not find insertion point")
