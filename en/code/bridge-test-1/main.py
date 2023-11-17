from p5 import *

col_1 = (255, 0, 0)
col_2 = (0, 255, 0)
col_3 = (0, 0, 255)
col_4 = (255, 255, 0)
col_5 = (111,255,0)

pos_1 = (50, 20)
pos_2 = (100, 20)
pos_3 = (150, 20)
pos_4 = (200, 20)
pos_5 = (250, 20)

circle_radius = 20

is_drawing = False

my_image = "pic1.jpg"


def draw():
    add_background(100, 100, 250, 300)
    if is_drawing:
        fill(current_color)
        circle(mouse_x, mouse_y, 20)


####### Hide this code #######

# Variable to track drawing state
# Current drawing color

current_color = None
default = (0, 0, 0)
image_set = False

def get_global_positions():
    # Generate list dynamically
    positions = []
    i = 1
    while f'pos_{i}' in globals():
        positions.append(globals()[f'pos_{i}'])
        i += 1
    return positions


def get_global_colors():
    # Generate list dynamically
    colors = []
    i = 1
    while f'col_{i}' in globals():
        colors.append(globals()[f'col_{i}'])
        i += 1
    return colors


def add_background(x, y, width, height):
    global image_set, background_img
    if not image_set:
        image(background_img, x, y, width, height) 
        image_set = True


def setup():
    global color_choices, current_color, background_img, my_image
    size(800, 800)
    no_stroke()
    background_img = load_image(my_image)
    # Initialize color choices within setup
    color_choices = get_global_colors()
    current_color = Color(default[0],default[1],default[2])  # Default color (black)
    global is_drawing
    color_positions = get_global_positions()
    # Draw color choice circles
    for i, col in enumerate(color_choices):
        draw_circle(color_positions[i], col, circle_radius)
        
def draw_circle(pos, col, radius):
    fill(Color(col[0], col[1], col[2]))
    circle(pos[0], pos[1], radius)


def get_color(col):
    color = Color(col[0], col[1], col[2])
    return color


def check_which_circle():
    global current_color
    color_positions = get_global_positions()
    for i, pos in enumerate(color_positions):
        if dist(mouse_x, mouse_y, *pos) < circle_radius:
            #current_color = Color(color_choices[i][0], color_choices[i][1], color_choices[i][2])
            current_color = get_color(color_choices[i])
            return current_color


def mouse_pressed():
    global is_drawing
    check_which_circle()
    color_positions = get_global_positions()
    # Check if a color circle is clicked
    for i, pos in enumerate(color_positions):
        if dist(mouse_x, mouse_y, *pos) < circle_radius:
            current_color = color_choices[i]
            return  # Return early to prevent starting drawing when selecting color

    is_drawing = True  # Start drawing

def mouse_released():
    global is_drawing
    is_drawing = False  # Stop drawing

if __name__ == '__main__':
    run()
