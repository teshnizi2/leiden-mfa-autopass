#!/usr/bin/env python3
"""
Simple script to generate extension icons.
Requires Pillow: pip install Pillow
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    import os
    
    def create_icon(size, output_path):
        """Create a simple icon with Leiden colors"""
        # Create image with Leiden blue background (#003d82)
        img = Image.new('RGB', (size, size), color='#003d82')
        draw = ImageDraw.Draw(img)
        
        # Draw a simple shield/key icon
        # Draw a shield shape
        shield_points = [
            (size * 0.3, size * 0.2),
            (size * 0.7, size * 0.2),
            (size * 0.85, size * 0.4),
            (size * 0.85, size * 0.7),
            (size * 0.5, size * 0.9),
            (size * 0.15, size * 0.7),
            (size * 0.15, size * 0.4),
        ]
        draw.polygon(shield_points, fill='white')
        
        # Draw a checkmark inside
        check_points = [
            (size * 0.35, size * 0.5),
            (size * 0.45, size * 0.6),
            (size * 0.65, size * 0.4),
        ]
        draw.line([check_points[0], check_points[1]], fill='#003d82', width=int(size * 0.08))
        draw.line([check_points[1], check_points[2]], fill='#003d82', width=int(size * 0.08))
        
        img.save(output_path)
        print(f"Created {output_path}")
    
    # Create icons directory if it doesn't exist
    os.makedirs('icons', exist_ok=True)
    
    # Generate icons in different sizes
    create_icon(16, 'icons/icon16.png')
    create_icon(48, 'icons/icon48.png')
    create_icon(128, 'icons/icon128.png')
    
    print("\nIcons created successfully!")
    
except ImportError:
    print("Pillow not installed. Installing...")
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    print("Please run this script again.")
except Exception as e:
    print(f"Error creating icons: {e}")
    print("\nYou can also create simple icons manually:")
    print("1. Create 16x16, 48x48, and 128x128 pixel PNG images")
    print("2. Use Leiden blue (#003d82) as the background color")
    print("3. Save them as icon16.png, icon48.png, and icon128.png in the icons/ folder")
