import json
import os

def rgb_to_hex(color):
    r = int(color.get('r', 0) * 255)
    g = int(color.get('g', 0) * 255)
    b = int(color.get('b', 0) * 255)
    return f"#{r:02x}{g:02x}{b:02x}".upper()

def extract_tokens(node, tokens, depth=0):
    # Extract Colors from fills
    if 'fills' in node:
        for fill in node['fills']:
            if fill.get('type') == 'SOLID' and 'color' in fill:
                hex_val = rgb_to_hex(fill['color'])
                tokens['colors'].add(hex_val)
    
    # Extract Colors from strokes
    if 'strokes' in node:
        for stroke in node['strokes']:
            if stroke.get('type') == 'SOLID' and 'color' in stroke:
                hex_val = rgb_to_hex(stroke['color'])
                tokens['colors'].add(hex_val)

    # Extract Typography
    if node.get('type') == 'TEXT' and 'style' in node:
        style = node['style']
        font_family = style.get('fontFamily')
        font_size = style.get('fontSize')
        
        if font_family:
            tokens['typography']['families'].add(font_family)
        if font_size:
            tokens['typography']['sizes'].add(font_size)
    
    # Extract Spacing (Item spacing, padding)
    if 'itemSpacing' in node:
        tokens['spacing'].add(node['itemSpacing'])
    if 'paddingLeft' in node:
        tokens['spacing'].add(node['paddingLeft'])
    
    # Extract Radii
    if 'cornerRadius' in node:
        tokens['radii'].add(node['cornerRadius'])

    # Recursion
    if 'children' in node:
        for child in node['children']:
            extract_tokens(child, tokens, depth+1)

def run():
    target_node_id = "1:4986"
    file_path = "/home/doomlord/Desktop/Freelance/client-site-01/.figma-node-data.json"
    
    if not os.path.exists(file_path):
        print(f"File {file_path} not found.")
        return

    with open(file_path, 'r') as f:
        data = json.load(f)

    # Note: the standard figma node fetch returns data['nodes'][id]
    # which contains 'document' which contains the actual node.
    # Our sample showed it at nodes['1:4986']['document']
    node_data_outer = data.get('nodes', {}).get(target_node_id, {})
    node_data = node_data_outer.get('document', {})
    
    if not node_data:
        print(f"Node {target_node_id} document not found in JSON.")
        return

    tokens = {
        'colors': set(),
        'typography': {
            'families': set(),
            'sizes': set()
        },
        'spacing': set(),
        'radii': set()
    }

    # Add background color of the node itself if it exists
    if 'backgroundColor' in node_data:
        tokens['colors'].add(rgb_to_hex(node_data['backgroundColor']))

    extract_tokens(node_data, tokens)

    # Print results as JSON
    result = {
        'colors': sorted(list(tokens['colors'])),
        'typography': {
            'families': sorted(list(tokens['typography']['families'])),
            'sizes': sorted(list([round(s) for s in list(tokens['typography']['sizes'])]))
        },
        'spacing': sorted(list([float(s) for s in list(tokens['spacing'])])),
        'radii': sorted(list([float(r) for r in list(tokens['radii'])]))
    }
    
    # Dump to stdout
    print(json.dumps(result, indent=2))

if __name__ == "__main__":
    run()
